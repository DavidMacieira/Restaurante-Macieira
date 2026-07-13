import { motion } from "framer-motion";
import logo from "../assets/images/logotipo.png";

function Footer() {
  return (
    <footer className="bg-[#FAF9F6] px-6 py-14 text-[#121212] md:px-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex max-w-7xl flex-col items-center border-t border-black/10 pt-12 text-center"
      >
        <img
          src={logo}
          alt="Logótipo Macieira"
          className="h-28 w-28 object-contain"
        />

        <p className="mt-5 font-serif text-2xl tracking-[0.28em]">
          MACIEIRA
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 text-sm text-black/55 sm:flex-row sm:gap-5">
          <span>Porto · Portugal</span>

          <span className="hidden text-black/20 sm:inline">•</span>

          <a
            href="mailto:reservas@macieira.pt"
            className="transition hover:text-[#121212]"
          >
            reservas@macieira.pt
          </a>
        </div>

        <div className="mt-5 flex gap-6 text-[0.65rem] uppercase tracking-[0.25em] text-black/40">
          <a href="#" className="transition hover:text-[#121212]">
            Instagram
          </a>

          <a href="#" className="transition hover:text-[#121212]">
            Facebook
          </a>
        </div>

        <div className="mt-10 w-full border-t border-black/10 pt-6">
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-black/30">
            © 2026 Macieira
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;