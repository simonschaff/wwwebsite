"use client";

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';

export function Footer() {
  const [activeModal, setActiveModal] = useState<"impressum" | "datenschutz" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-dark text-white/60 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <button
            onClick={scrollToTop}
            className="font-serif text-xl text-white tracking-wide hover:text-cream transition-colors text-left focus:outline-none"
          >
            Wenigzeller Werkstätte
          </button>

          <div className="text-xs font-sans uppercase tracking-[0.3em] opacity-80 mt-2 md:mt-0">
            Holz. Hand. Werk.
          </div>

          <div className="flex gap-6 items-center text-sm font-light">
            <div className="w-[1px] h-4 bg-white/20 mx-2" />
            <button
              onClick={() => setActiveModal("impressum")}
              className="hover:text-white transition-colors focus:outline-none"
            >
              Impressum
            </button>
            <button
              onClick={() => setActiveModal("datenschutz")}
              className="hover:text-white transition-colors focus:outline-none"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </footer >

      <Modal isOpen={activeModal === "impressum"} onClose={() => setActiveModal(null)} className="max-w-2xl p-8 md:p-12 bg-background rounded-2xl shadow-2xl">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-dark">Impressum</h2>
        <div className="font-sans font-light text-gray-subtle space-y-4 leading-relaxed">
          <div>
            <strong className="text-dark font-medium">Anton Schafferhofer</strong><br />
            Wenigzeller Werkstätte<br />
            Unternehmensgegenstand: Tischlerei
          </div>
          <address className="not-italic">
            Pittermann 123<br />
            A – 8254 Wenigzell<br />
            Österreich
          </address>
          <div className="pt-2">
            <strong>Kontakt:</strong><br />
            Tel.: <a href="tel:+4333362175" className="hover:text-primary transition-colors">+43 3336 2175</a><br />
            E-Mail: <a href="mailto:office@wenigzellerwerkstaette.at" className="hover:text-primary transition-colors">office@wenigzellerwerkstaette.at</a>
          </div>
          <div className="pt-2">
            <strong>Rechtsform & Aufsicht:</strong><br />
            UID Nr.: ATU29253009<br />
            Bezirkshauptmannschaft Hartberg-Fürstenfeld
          </div>
          <div className="pt-2">
            <strong>Kammerzugehörigkeit:</strong><br />
            Mitglied der WKO, Bundesinnung Tischler<br />
            Meisterbetrieb, Meisterprüfung abgelegt in Österreich
          </div>
          <div className="pt-2">
            <strong>Berufsrecht:</strong><br />
            Gewerbeordnung: <a href="http://www.ris.bka.gv.at/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4">www.ris.bka.gv.at</a>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "datenschutz"} onClose={() => setActiveModal(null)} className="max-w-2xl p-8 md:p-12 bg-background rounded-2xl shadow-2xl">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-dark">Datenschutzerklärung</h2>
        <div className="font-sans font-light text-gray-subtle space-y-6 leading-relaxed text-justify">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich
            auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren
            wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
          </p>
          <h3 className="font-sans font-medium text-dark text-lg pt-4">Datenverarbeitung</h3>
          <p>
            Unsere Website dient in erster Linie der Präsentation unseres Handwerks. Wir setzen standardmäßig keine
            unnötigen Tracking-Cookies oder Analyse-Tools ein, die Ihr Surfverhalten profilieren. Wenn Sie per
            E-Mail oder Telefon Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>
          <h3 className="font-sans font-medium text-dark text-lg pt-4">Ihre Rechte</h3>
          <p>
            Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung,
            Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die
            Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst
            in einer Weise verletzt worden sind, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.
          </p>
          <div className="pt-6 mt-6 border-t border-cream text-sm text-left">
            <strong className="text-dark font-medium">Verantwortlich für die Datenverarbeitung:</strong><br />
            Anton Schafferhofer<br />
            Pittermann 123, 8254 Wenigzell<br />
            E-Mail: <a href="mailto:office@wenigzellerwerkstaette.at" className="hover:text-primary transition-colors">office@wenigzellerwerkstaette.at</a>
          </div>
        </div>
      </Modal>
    </>
  );
}
