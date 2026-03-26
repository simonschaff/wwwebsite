import React from "react";
import { Check } from "lucide-react";

const values = [
  {
    title: "Maßgefertigt",
    description: "Jedes Stück wird individuell nach Ihren Wünschen und Raummaßen geplant und gefertigt.",
  },
  {
    title: "Höchste Qualität",
    description: "Wir verarbeiten ausschließlich erstklassige Materialien für lebenslange Beständigkeit.",
  },
  {
    title: "Regionale Wertschöpfung",
    description: "Produktion vor Ort in der Oststeiermark mit Holz aus nachhaltiger, regionaler Forstwirtschaft.",
  },
  {
    title: "Architektur-Kooperationen",
    description: "Wir setzen Entwürfe von Architekten präzise und lösungsorientiert in die Realität um.",
  },
];

export function Values() {
  return (
    <section id="values" className="py-24 md:py-32 bg-background border-t border-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
              Unsere Werte & Philosophie
            </h2>
            <p className="font-sans text-gray-subtle leading-relaxed mb-8 font-light">
              Handwerkliches Können und modernste Fertigungstechnik gehen bei uns Hand in Hand.
              Das Resultat sind Möbel und Türen, die Generationen überdauern.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {values.map((value, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-primary">
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg text-dark mb-2">{value.title}</h3>
                  <p className="font-sans font-light text-gray-subtle">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
