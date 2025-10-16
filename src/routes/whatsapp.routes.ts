
import { Router } from "express";
import { sendMessage, getMdContent } from "../controllers/whatsapp.controller";

const router = Router();

router.post("/send", sendMessage);
router.get("/md/:filename", getMdContent);

export default router;
