import { RevealObserver } from "@/components/RevealObserver";
import {
  CyberHero,
  CyberProblem,
  CyberDifferent,
  CyberWhoWeAre,
  CyberHowWeWork,
  CyberDeliver,
  CyberEngagement,
  CyberClosing,
} from "@/components/cyber/CyberSections";
import { Contact } from "@/components/sections/Contact";

// Standalone P32 Cyber Intelligence & Exposure site (its own domain, split
// from the company site at p32.ltd in October 2026).
export default function Home() {
  return (
    <main>
      <RevealObserver />
      <CyberHero />
      <CyberProblem />
      <CyberDifferent />
      <CyberWhoWeAre />
      <CyberHowWeWork />
      <CyberDeliver />
      <CyberEngagement />
      <CyberClosing />
      <Contact />
    </main>
  );
}
