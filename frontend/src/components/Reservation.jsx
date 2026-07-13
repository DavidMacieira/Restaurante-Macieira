import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import reservationImage from "../assets/images/reservas.png";
import ReservationModal from "./ReservationModal";

function Reservation() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <section
        id="reservas"
        className="bg-[#121212] px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#F7F4EE]">
          <div className="grid min-h-[650px] lg:grid-cols-2">
            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col justify-center px-8 py-20 sm:px-14 lg:px-20"
            >
              <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#B08D57]">
                Reservas
              </p>

              <h2 className="max-w-xl font-serif text-5xl leading-[1.02] text-[#121212] md:text-7xl">
                Uma mesa
                <br />
                espera por si.
              </h2>

              <div className="mt-12">
                <button
                  type="button"
                  onClick={() => setIsReservationOpen(true)}
                  className="group relative inline-flex min-w-[230px] items-center justify-between overflow-hidden border border-[#121212] px-7 py-5"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#121212] transition-transform duration-500 ease-out group-hover:translate-x-0" />

                  <span className="relative z-10 text-xs uppercase tracking-[0.28em] text-[#121212] transition-colors duration-500 group-hover:text-white">
                    Reservar mesa
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="relative z-10 text-[#121212] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </button>
              </div>

              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-black/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-black/45">
                <span>Terça a Domingo</span>
                <span>19:00 — 23:30</span>
              </div>
            </motion.div>

            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1 }}
              className="group relative min-h-[500px] overflow-hidden lg:min-h-full"
            >
              <img
                src={reservationImage}
                alt="Mesa preparada no restaurante Macieira"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1800ms] group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-black/10 transition duration-700 group-hover:bg-black/0" />

              <div className="absolute bottom-7 right-7 border border-white/40 px-4 py-3">
                <span className="text-[0.6rem] uppercase tracking-[0.32em] text-white">
                  Macieira
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}

export default Reservation; 