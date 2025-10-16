import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;

export const sendWhatsAppMessage = async (to: string, message: string) => {
  const url = `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`;
  const data = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: { body: message },
  };

  const headers = {
    Authorization: `Bearer ${WHATSAPP_TOKEN}`,
    "Content-Type": "application/json",
  };

  await axios.post(url, data, { headers });
};
