import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "../assets/images/hero.avif";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#121212]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior elegante do restaurante Macieira"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
      </div>

      <span className="absolute right-8 md:right-24 bottom-8 font-serif text-[10rem] md:text-[20rem] leading-none text-white/[0.035] select-none">
        M
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-[#B08D57] uppercase tracking-[0.45em] text-xs mb-6">
            Fine Dining Português
          </p>

          <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-8">
            A essência de Portugal,
            <br />
            servida com elegância.
          </h1>

          <p className="max-w-xl text-white/72 text-base md:text-lg leading-relaxed mb-10">
            Uma experiência gastronómica contemporânea inspirada na tradição
            portuguesa.
          </p>

          <a
            href="#reservas"
            className="inline-flex bg-[#FAF9F6] text-[#121212] px-9 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#B08D57] hover:text-white transition duration-300"
          >
            Reservar Mesa
          </a>
        </motion.div>

        <a
          href="#experiencia"
          className="hidden md:flex absolute bottom-10 right-10 flex-col items-center gap-3 text-white/70 hover:text-white transition"
          aria-label="Explorar"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;