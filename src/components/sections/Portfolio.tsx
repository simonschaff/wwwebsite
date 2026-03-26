"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

const categories = [
  {
    id: "eingang",
    title: "Ankommen und Eintreten",
    description: "Der Eingangsbereich ist das Tor zur Seele eines Hauses und sollte daher mit Sorgfalt gestaltet werden, um einen bleibenden Eindruck zu hinterlassen.",
    cover: "/graphics/eingang/20260324_1928.jpg",
    images: [
      "/graphics/eingang/20260324_1928.jpg",
      "/graphics/eingang/20260324_1933.jpg"
    ]
  },
  {
    id: "kochen",
    title: "Kochen und Essen",
    description: "Eine gut geplante Küche ist die Grundlage für ein angenehmes Kocherlebnis. Durch die optimale Anordnung der Arbeitsbereiche kann man Zeit und Energie sparen, um im Essbereich kulinarische Highlights zu genießen.",
    cover: "/graphics/kochen/20260324_1439.jpg",
    images: [
      "/graphics/kochen/20260324_1439.jpg",
      "/graphics/kochen/20260324_1445.jpg",
      "/graphics/kochen/20260324_1455.jpg",
      "/graphics/kochen/20260324_1593.jpg"
    ]
  },
  {
    id: "wohnen",
    title: "Wohnen und Wohlfühlen",
    description: "Ein gut gestalteter Wohnbereich verfügt über bequeme Möbel, eine ansprechende Beleuchtung und eine Atmosphäre, die zum Verweilen mit Familie und Freunden einlädt.",
    cover: "/graphics/wohnen/20260324_1520.jpg",
    images: [
      "/graphics/wohnen/20260324_1426.jpg",
      "/graphics/wohnen/20260324_1480.jpg",
      "/graphics/wohnen/20260324_1520.jpg",
      "/graphics/wohnen/20260324_1547.jpg",
      "/graphics/wohnen/20260324_1949.jpg"
    ]
  },
  {
    id: "schlafen",
    title: "Schlafen und Träumen",
    description: "Ein gut gestaltetes Schlafzimmer ist der perfekte Ort, um Ruhe und Erholung zu finden.",
    cover: "/graphics/schlafen/20260324_1273.jpg",
    images: [
      "/graphics/schlafen/20260324_1273.jpg"
    ]
  },
  {
    id: "bad",
    title: "Bad und Ankleide",
    description: "Das Badezimmer verwandelt sich immer mehr zu einer Wohlfühloase.",
    cover: "/graphics/bad/20260324_1241.jpg",
    images: [
      "/graphics/bad/20260324_1241.jpg",
      "/graphics/bad/20260324_1245.jpg",
      "/graphics/bad/20260324_1255.jpg",
      "/graphics/bad/20260324_1260.jpg",
      "/graphics/bad/20260324_1302.jpg"
    ]
  },
  {
    id: "gastro",
    title: "Gastronomie und Verkauf",
    description: "In einem sorgfältig ausgewählten Interieur fühlen sich die Gäste wohl. Sie verweilen, genießen und kommen gerne wieder.",
    cover: "/graphics/gastro/20260324_1544.jpg",
    images: [
      "/graphics/gastro/20260324_1544.jpg",
      "/graphics/gastro/20260324_1659.jpg",
      "/graphics/gastro/20260324_1661.jpg"
    ]
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedData = categories.find((c) => c.id === activeCategory);

  const handleOpen = (id: string) => {
    setActiveCategory(id);
    setCurrentImageIndex(0);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedData) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedData.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedData) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedData.images.length) % selectedData.images.length);
  };

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-[90rem]">
          <h2 className="text-primary tracking-widest uppercase text-xs md:text-sm mb-6 font-medium text-center lg:text-left">
            Was wir fertigen …
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-dark mb-16 text-center lg:text-left">
            Unsere Arbeiten
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-dark aspect-[4/5] object-cover shadow-xl"
                onClick={() => handleOpen(category.id)}
              >
                <Image
                  src={category.cover}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-white text-2xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {category.title}
                  </h4>
                  <p className="text-white/80 font-sans font-light mt-3 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {category.description}
                  </p>
                  <div className="w-8 h-[1px] bg-white/0 mt-4 transition-all duration-500 ease-out group-hover:bg-white/100 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal 
        isOpen={!!activeCategory} 
        onClose={() => setActiveCategory(null)} 
        className="max-w-6xl w-full bg-transparent shadow-none p-0 overflow-hidden flex items-center justify-center pointer-events-none"
      >
        {selectedData && (
          <div className="relative w-full h-[80vh] bg-black/95 flex flex-col items-center justify-center rounded-2xl overflow-hidden group pointer-events-auto shadow-2xl">
            <Image 
              src={selectedData.images[currentImageIndex]} 
              alt={`${selectedData.title} Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {selectedData.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors border border-white/20"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors border border-white/20"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-y-1/2 flex space-x-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                  {selectedData.images.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} 
                      aria-label={`Gehe zu Bild ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="absolute top-6 left-6 text-white max-w-lg drop-shadow-lg px-6 py-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
              <h4 className="font-serif text-2xl mb-2">{selectedData.title}</h4>
              <p className="font-sans font-light text-white/80 text-sm leading-relaxed">{selectedData.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
