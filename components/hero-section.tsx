import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="mt-0 flex flex-col justify-center gap-4">
        <h2 className="text-4xl relative w-[80%] mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
          Dijital Kimliğin Kayıp mı? Merak Etme, Biz Buluruz.
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="text-10xl font-bold text-orange-500 leading-[1.2]">
              <span>Upply Media</span>
            </div>
          </div>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-[60%] mx-auto py-2">
          {/* WhatsApp butonu */}
          <Link
            href="https://wa.me/9050506415703?text=Merhaba%20Upply%20Media,%20yardımcı%20olur%20musunuz?"
            target="_blank"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD8A8_0%,#f97316_50%,#FFD8A8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
              Bize Ulaşın
            </span>
          </Link>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
