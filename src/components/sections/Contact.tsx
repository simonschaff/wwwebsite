import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-16">
          Wo wir sind …
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between text-left gap-16 md:gap-24">
          <div className="flex-1">
            <h3 className="text-primary text-xs uppercase tracking-widest font-semibold mb-6">Standort</h3>
            <div className="font-sans text-lg text-dark font-light leading-relaxed mb-6">
              Auf 850m Seehöhe, umgeben von einer hügeligen Landschaft im oststeirischen Joglland, finden Sie unseren Betrieb.
            </div>
            <address className="not-italic font-sans text-lg text-dark font-light leading-relaxed">
              <strong>Wenigzeller Werkstätte</strong><br />
              Pittermann 123<br />
              A – 8254 Wenigzell<br />
            </address>
          </div>
          
          <div className="flex-1">
            <h3 className="text-primary text-xs uppercase tracking-widest font-semibold mb-6">Kontakt</h3>
            <div className="font-sans text-lg text-dark font-light leading-relaxed flex flex-col space-y-8">
              <div>
                <strong className="font-medium text-xl">Anton Schafferhofer</strong><br/>
                Tel: <a href="tel:+436641327054" className="hover:text-primary transition-colors">+43 664 132 70 54</a><br/>
                E-Mail: <a href="mailto:office@wenigzellerwerkstaette.at" className="hover:text-primary transition-colors" style={{ wordBreak: 'break-all' }}>office@wenigzellerwerkstaette.at</a>
              </div>
              <div>
                <strong className="font-medium text-xl">Andreas Kropfhofer</strong><br/>
                Tel: <a href="tel:+436649242054" className="hover:text-primary transition-colors">+43 664 924 20 54</a><br/>
                E-Mail: <a href="mailto:a.kropfhofer@wenigzellerwerkstaette.at" className="hover:text-primary transition-colors" style={{ wordBreak: 'break-all' }}>a.kropfhofer@wenigzellerwerkstaette.at</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
