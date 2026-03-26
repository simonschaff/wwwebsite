import React from 'react';
import Image from 'next/image';

export function Symbol() {
  return (
    <section className="py-32 bg-primary text-white text-center flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 flex justify-center opacity-100">
          <Image
            src="/logotest.svg"
            alt="Wenigzeller Werkstätte Logo - Birnbaum"
            width={120}
            height={120}
            className="w-auto h-24 sm:h-28 object-contain"
          />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
          Verwurzelt in der Region.<br />Zuhause in der Welt.
        </h2>
        <p className="font-sans font-light text-white/70 max-w-xl mx-auto tracking-wide text-lg">
          Der Birnbaum steht für Beständigkeit, Wärme und edlen Charakter &ndash; Werte, die wir in jedem unserer Stücke verankern.
        </p>
      </div>
    </section>
  );
}
