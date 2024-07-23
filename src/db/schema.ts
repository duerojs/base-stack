import { pgTable, serial, timestamp, json  } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').defaultNow(),
  clerk_origin: json('clerk_origin').notNull()
});

export type InsertUser = typeof users.$inferInsert
export type SelectUser = typeof users.$inferSelect