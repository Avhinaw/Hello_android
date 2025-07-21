import {Router} from "express";
import { chatWithGemini } from "../controllers/chat";

const router = Router();

router.post('/chat', chatWithGemini);

export default router;