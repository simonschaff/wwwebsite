import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/graphics/bad/20260324_1302.webp"
          alt="Wenigzeller Werkstätte detail"
          fill
          priority
          className="object-cover object-center scale-105 animate-[ken-burns_20s_ease-out_forwards]"
          sizes="100vw"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
        <span className="text-white/90 uppercase tracking-[0.2em] text-xs sm:text-sm mb-6 opacity-0 animate-[fade-in-up_1s_ease-out_0.5s_forwards]">
          Seit über 35 Jahren
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight opacity-0 animate-[fade-in-up_1s_ease-out_0.7s_forwards]">
          Möbel mit <br className="sm:hidden" />
          <span className="italic font-light">Herz</span> und Wert.
        </h1>
        <p className="text-white/80 font-sans text-lg md:text-xl font-light max-w-3xl mb-12 opacity-0 animate-[fade-in-up_1s_ease-out_0.9s_forwards] leading-relaxed">
          „Freude am Handwerk.“ Wir sammeln Erfahrung, welche sich in unseren durchdachten Produkten wiederfindet. Von Maßtüren über Küchen, Schlaf- und Wohnzimmer, bis hin zum Gastrobereich – wir setzen Ihre Bedürfnisse um.
        </p>

        <div className="opacity-0 animate-[fade-in-up_1s_ease-out_1.1s_forwards]">
          <a href="#about">
            <Button className="bg-white text-primary hover:bg-cream">
              Wer wir sind
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
