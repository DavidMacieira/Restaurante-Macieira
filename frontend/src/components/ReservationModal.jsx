import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function ReservationModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 px-4 py-8 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-[#FAF9F6] px-6 py-10 text-[#121212] shadow-2xl sm:px-10 md:px-14 md:py-14"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar reservas"
              className="absolute right-5 top-5 text-black/45 transition hover:text-[#121212]"
            >
              <X size={24} />
            </button>

            <div className="mx-auto max-w-2xl">
              <p className="mb-5 text-center text-[0.65rem] uppercase tracking-[0.42em] text-[#B08D57]">
                Macieira
              </p>

              <h2 className="text-center font-serif text-4xl leading-tight sm:text-5xl">
                Reservar mesa
              </h2>

              <form className="mt-10 grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                      Nome
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      className="border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                      Telefone
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      required
                      className="border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                    Email
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    className="border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                  />
                </label>

                <div className="grid gap-6 sm:grid-cols-3">
                  <label className="grid gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                      Data
                    </span>

                    <input
                      type="date"
                      name="date"
                      required
                      className="border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                      Hora
                    </span>

                    <input
                      type="time"
                      name="time"
                      required
                      className="border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                      Pessoas
                    </span>

                    <select
                      name="people"
                      required
                      defaultValue="2"
                      className="border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                    >
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5">5 pessoas</option>
                      <option value="6">6 pessoas</option>
                      <option value="7">7+ pessoas</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/45">
                    Observações
                  </span>

                  <textarea
                    name="notes"
                    rows="3"
                    className="resize-none border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-[#B08D57]"
                  />
                </label>

                <button
                  type="submit"
                  className="group relative mt-3 overflow-hidden border border-[#121212] px-8 py-5"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#121212] transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative z-10 text-xs uppercase tracking-[0.3em] transition-colors duration-500 group-hover:text-white">
                    Pedir reserva
                  </span>
                </button>

                <p className="text-center text-xs leading-relaxed text-black/40">
                  O pedido fica sujeito a confirmação.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ReservationModal;