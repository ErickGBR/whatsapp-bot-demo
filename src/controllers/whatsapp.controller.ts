
import { Request, Response } from "express";
import { sendWhatsAppMessage } from "../services/whatsapp.service";
import { readMarkdown } from "../services/md-reader.service";

export const sendMessage = async (req: Request, res: Response) => {
  const { to, message } = req.body;
  try {
    await sendWhatsAppMessage(to, message);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getMdContent = (req: Request, res: Response) => {
  const { filename } = req.params;
  try {
    const content = readMarkdown(filename);
    res.json({ success: true, content });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};
