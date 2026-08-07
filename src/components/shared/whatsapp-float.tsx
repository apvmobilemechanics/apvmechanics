import { WhatsAppIcon } from "@/components/icons/social-icons";
import { WHATSAPP_URL } from "@/constants/site.constants";

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
