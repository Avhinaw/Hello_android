import { Request, Response } from "express"
import { main } from "../services/gemini";

export const chatWithGemini = async (req: Request, res: Response) => {
    try{
        const {prompt} = req.body;
        const reply = await main(prompt);
        res.json({reply});
    }catch(err) {
        res.status(500).json({error: "Something went wrong with gemini Api"});
    }
}