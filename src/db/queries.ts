
import { db } from './index';
import { InsertUser, users } from './schema';

export async function createUser(data: InsertUser) {
  await db.insert(users).values(data);
}

export async function updateUser(data:InsertUser) {
  await db.update(users).set({clerk_origin: data})
}
