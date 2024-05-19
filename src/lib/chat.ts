import { PrismaClient } from '@prisma/client';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" }); 
const prisma = new PrismaClient();

async function getUserFinances(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { accounts: true }
    });
    return user;
  }
  
  async function getUserPreferences(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    return user;
  }
  
  async function getUserFeatures(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    return user;
  }
  

  async function handleChatMessage(userId: string, message: string) {
    // 1. Retrieve user data based on the message content
    let userData;
    if (message.includes("finances")) {
      userData = await getUserFinances(userId);
    } else if (message.includes("preferences")) {
      userData = await getUserPreferences(userId);
    } else if (message.includes("preferences")) {
        userData = await getUserPreferences(userId);
    }
  
    // 2. Construct a prompt for Gemini based on user message and data
    const prompt = `You are a helpful chatbot for Outsiders. The user asks: ${message}. 
                    Here's some information about the user: ${JSON.stringify(userData)}. 
                    Provide a helpful and informative response.`
  
    // 3. Use Gemini to generate a response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    return text;
  }