import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import MenuSection from "../components/MenuSection";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="bg-[#FAF9F6] text-[#121212] overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <MenuSection />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}

export default Home;