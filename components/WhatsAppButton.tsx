import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/905056415703"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg text-white transition"
      aria-label="WhatsApp ile iletişime geç"
    >
      <Image
        src="/whatsapp.png" // 👈 PNG dosya adı burası
        alt="WhatsApp"
        width={28}
        height={28}
        className="object-contain"
      />
    </Link>
  );
}
