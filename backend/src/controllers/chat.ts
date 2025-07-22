import { Request, Response } from "express";
import { main } from "../services/gemini";
import redis from "../utils/redisClient"

const CONTEXT_KEY = "chat:context";
const CONTEXT_LIMIT = 5;

export const chatWithGemini = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if(!prompt) {
        return res.status(400).json({error: "Prompt is required"});
    }

    await redis.rPush(CONTEXT_KEY, JSON.stringify({sender: "user", text: prompt}));
    await redis.lTrim(CONTEXT_KEY, -CONTEXT_LIMIT, -1);

    const contextMessages = await redis.lRange(CONTEXT_KEY, 0, -1);

    const fullPrompt = contextMessages.map((msg) => {
        const {sender, text} = JSON.parse(msg);
        return `${sender === "user" ? "User": "AI"}: ${text}`;
    }).join("\n");

    const reply = await main(fullPrompt);

    await redis.rPush(CONTEXT_KEY, JSON.stringify({sender: 'ai', text: reply}));
    await redis.lTrim(CONTEXT_KEY, -CONTEXT_LIMIT, -1);
    
    await redis.expire(CONTEXT_KEY, 60 * 30);

    res.json({ reply });
  } catch (err) {
    console.error("gemini chat err", err);
    res.status(500).json({ error: "Something went wrong with gemini Api" });
  }
};