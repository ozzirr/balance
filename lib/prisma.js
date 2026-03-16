const { PrismaClient } = require("@prisma/client");

const globalForPrisma = globalThis;

const prisma = globalForPrisma.__balancePrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__balancePrisma = prisma;
}

module.exports = { prisma };
