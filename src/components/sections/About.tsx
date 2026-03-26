import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-primary tracking-widest uppercase text-xs md:text-sm mb-6 font-medium">
          Wer wir sind …
        </h2>
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-dark mb-10">
          Wir sind ein familiär geführtes Handwerks-Unternehmen mit Mitarbeitern, die schon langjährig bei uns tätig sind.
        </p>
        <p className="font-sans text-gray-subtle text-base md:text-lg lg:text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Unser Team stammt aus der unmittelbaren Region, dem Joglland in der Oststeiermark. 
          Wir fertigen hochwertige Möbel nach Kundenwunsch im Privatbereich und setzen innovative 
          Projekte und Sonderlösungen in Zusammenarbeit mit Architekten um. Unser Ziel ist es, mit 
          erfahrenen und motivierten Mitarbeitern die beste Qualität für Sie zu erzeugen.
        </p>
      </div>
    </section>
  );
}
