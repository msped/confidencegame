import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const credits = pgTable('credits', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  balance: integer('balance').default(0).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const conversationHistory = pgTable('conversation_history', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  conversation: text('conversation').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});