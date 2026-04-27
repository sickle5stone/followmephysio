import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TheWork from "./components/TheWork";
import AboutDodo from "./components/AboutDodo";
import AreasOfCare from "./components/AreasOfCare";
import Journey from "./components/Journey";
import FromTheNotes from "./components/FromTheNotes";
import SkyBreak from "./components/SkyBreak";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="bg-canvas text-ink-primary">
      <Nav />
      <Hero />
      <TheWork />
      <AboutDodo />
      <AreasOfCare />
      <Journey />
      <FromTheNotes />
      <SkyBreak />
      <CTA />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
