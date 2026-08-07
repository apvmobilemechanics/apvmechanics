import { WHATSAPP_URL } from "@/constants";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with APV Mobile Mechanics on WhatsApp"
    >
      <WhatsAppIcon size={32} />
      <span className="whatsapp-float__tooltip">Chat on WhatsApp</span>
    </a>
  );
}
