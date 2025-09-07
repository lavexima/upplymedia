"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import Image from "next/image";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-none rounded-full w-50 py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        <div className="flex items-center h-16 mt-3">
          <Image src="/upply.png" alt="Logo" width={140} height={64} priority />
        </div>

        {/* Masaüstü menü (değişmedi) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-slate-400 hover:text-orange-500 transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/about" className="text-slate-400 hover:text-orange-500 transition-colors">
            Hakkımızda
          </Link>
          <Link href="/services" className="text-slate-400 hover:text-orange-500 transition-colors">
            Hizmetler
          </Link>
          <Link href="/references" className="text-slate-400 hover:text-orange-500 transition-colors">
            Referanslar
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-400 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Mobil menüyü aç/kapa"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <button className="hidden md:inline-flex relative h-10 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD8A8_0%,#f97316_50%,#FFD8A8_100%)]" />
            <span className="g-orange-500 hover:bg-orange-400 text-white font-semibold h-12 px-8 rounded-lg transition-colors">
              Bize Ulaşın
            </span>
          </button>
        </div>
      </nav>

      {/* Mobil menü - sadece burası değişti */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-30 backdrop-blur-sm text-white rounded-b-lg shadow-lg py-6 px-8 space-y-6 border-t border-gray-700">
          <Link
            href="/"
            className="block text-lg font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/about"
            className="block text-lg font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link
            href="/services"
            className="block text-lg font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Hizmetler
          </Link>
          <Link
            href="/references"
            className="block text-lg font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Referanslar
          </Link>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
