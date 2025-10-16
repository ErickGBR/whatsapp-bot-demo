import { sendWhatsAppMessage } from "../../src/services/whatsapp.service";

test("Enviar mensaje WhatsApp (mock)", async () => {
  await expect(sendWhatsAppMessage("1234567890", "Hola demo")).resolves.not.toThrow();
});
