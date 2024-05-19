require('dotenv').config({ path: '../.env' }); // Asegúrate de ajustar la ruta si es necesario

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Prisma connected to the database');
    await prisma.$disconnect();
  } catch (error) {
    console.error('Prisma failed to connect:', error);
  }
}

testConnection();
