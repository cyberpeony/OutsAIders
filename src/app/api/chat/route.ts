import { NextApiRequest, NextApiResponse } from 'next';
import { handleChatMessage } from '@/lib/chat';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, message } = req.body;
    try {
      const response = await handleChatMessage(userId, message);
      res.status(200).json({ response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error handling chat message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
