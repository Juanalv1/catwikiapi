try {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  module.exports = prisma;
} catch (error) {
  console.error('Error initializing Prisma:', error);
  process.exit(1);
}