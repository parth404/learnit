import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// handle hot reload in development
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
