import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Values } from "@/components/sections/Values";
import { Symbol } from "@/components/sections/Symbol";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Values />
      <Symbol />
      <Contact />
      <Footer />
    </main>
  );
}
