import { PrismaClient } from "@prisma/client";

class PrismaInstance {
  private static instance: PrismaClient;
  private constructor() {}

  static getInstance(): PrismaClient {
    if (!PrismaInstance.instance) {
        PrismaInstance.instance = new PrismaClient({
          log: ["query", "info", "warn", "error"],
        });
    }
    return PrismaInstance.instance;
  }
}


export const prisma = PrismaInstance.getInstance