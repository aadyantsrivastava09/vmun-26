import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FoundingClass from "@/components/FoundingClass";
import Committees from "@/components/Committees";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <FoundingClass />
        <Committees />
        <Register />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
