import { COMPANY, WHATSAPP_MESSAGE } from "@/lib/config";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const number = COMPANY.whatsappNumber.replace(/\D/g, "");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5 fill-current" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us on WhatsApp</span>
    </a>
  );
}
