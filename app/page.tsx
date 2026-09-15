import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Registration from "@/components/home/Registration";
import Tentang from "@/components/home/Tentang";
import Lentera from "@/components/home/Lentera";
import Narahubung from "@/components/home/Narahubung";
import PanitiaPopup from "@/components/home/PanitiaPopup";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e1d2] text-[#191814]">
      <Navbar />
      <Hero />
      <Registration />
      <Tentang />
      <Lentera />
      <Narahubung />
      <Footer />
      <PanitiaPopup />
    </main>
  );
}
