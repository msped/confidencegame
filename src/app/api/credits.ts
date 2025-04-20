import { NextApiRequest, NextApiResponse } from 'next';
import { eq } from 'drizzle-orm';
import { db } from '@/db/index';
import { credits } from '@/db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    try {
      const userCredits = await db.select().from(credits).where(eq(credits.userId, Number(userId)));
      return res.status(200).json(userCredits);
    } catch {
      return res.status(500).json({ error: 'Failed to fetch credits' });
    }
  }

  if (req.method === 'POST') {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).json({ error: 'User ID and amount are required' });
    }

    try {
      await db.insert(credits).values({ userId, balance: amount });
      return res.status(201).json({ message: 'Credits added successfully' });
    } catch {
      return res.status(500).json({ error: 'Failed to add credits' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}