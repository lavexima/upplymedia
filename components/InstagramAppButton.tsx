import Link from "next/link";

export default function InstagramAppButton() {
  return (
    <Link
      href="https://instagram.com/upplymedia"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg text-white transition"
      aria-label="Instagram ile iletişime geç"
    >
      <img src="/instagram.png" alt="Instagram" className="w-7 h-7" />
    </Link>
  );
}
