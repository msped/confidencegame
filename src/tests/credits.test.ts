import { createMocks } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/app/api/credits';
import { db } from '@/db/index';
import { credits } from '@/db/schema';
import { eq } from 'drizzle-orm';

// Mock the database functions
jest.mock('@/db/index', () => ({
  db: {
    select: jest.fn(),
    insert: jest.fn(),
  },
}));

describe('/api/credits', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET', () => {
    it('should return 400 if userId is not provided', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {},
      });

      await handler(req as NextApiRequest, res as unknown as NextApiResponse);

      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual({ error: 'User ID is required' });
    });

    it('should return 200 with user credits if userId is provided', async () => {
      const mockCredits = [{ userId: 1, balance: 100 }];
      (db.select as jest.Mock).mockReturnValue({
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockResolvedValue(mockCredits),
      });

      const { req, res } = createMocks({
        method: 'GET',
        query: { userId: '1' },
      });

      await handler(req as NextApiRequest, res as unknown as NextApiResponse);

      expect(res._getStatusCode()).toBe(200);
      expect(JSON.parse(res._getData())).toEqual(mockCredits);
      expect(db.select).toHaveBeenCalled();
      expect(db.select().from).toHaveBeenCalledWith(credits);
      expect(db.select().from().where).toHaveBeenCalledWith(eq(credits.userId, 1));
    });

    it('should return 500 if database query fails', async () => {
      (db.select as jest.Mock).mockReturnValue({
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockRejectedValue(new Error('Database error')),
      });

      const { req, res } = createMocks({
        method: 'GET',
        query: { userId: '1' },
      });

      await handler(req as NextApiRequest, res as unknown as NextApiResponse);

      expect(res._getStatusCode()).toBe(500);
      expect(JSON.parse(res._getData())).toEqual({ error: 'Failed to fetch credits' });
    });
  });

  describe('POST', () => {
    it('should return 400 if userId or amount is not provided', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {},
      });

      await handler(req as NextApiRequest, res as unknown as NextApiResponse);

      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual({ error: 'User ID and amount are required' });
    });

    it('should return 201 if credits are added successfully', async () => {
      (db.insert as jest.Mock).mockReturnValue({
        values: jest.fn().mockResolvedValue(undefined),
      });

      const { req, res } = createMocks({
        method: 'POST',
        body: { userId: 1, amount: 50 },
      });

      await handler(req as NextApiRequest, res as unknown as NextApiResponse);

      expect(res._getStatusCode()).toBe(201);
      expect(JSON.parse(res._getData())).toEqual({ message: 'Credits added successfully' });
      expect(db.insert).toHaveBeenCalledWith(credits);
      expect(db.insert().values).toHaveBeenCalledWith({ userId: 1, balance: 50 });
    });

    it('should return 500 if database insert fails', async () => {
      (db.insert as jest.Mock).mockReturnValue({
        values: jest.fn().mockRejectedValue(new Error('Database error')),
      });

      const { req, res } = createMocks({
        method: 'POST',
        body: { userId: 1, amount: 50 },
      });

      await handler(req as NextApiRequest, res as unknown as NextApiResponse);

      expect(res._getStatusCode()).toBe(500);
      expect(JSON.parse(res._getData())).toEqual({ error: 'Failed to add credits' });
    });
  });

  it('should return 405 if method is not GET or POST', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
    });

    await handler(req as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({ error: 'Method not allowed' });
  });
});
