import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import galleryOne from "../assets/images/gallery-01.png";
import galleryTwo from "../assets/images/gallery-02.png";
import galleryThree from "../assets/images/gallery-03.png";
import galleryFour from "../assets/images/gallery-04.png";
import galleryFive from "../assets/images/gallery-05.png";
import gallerySix from "../assets/images/gallery-06.png";

const galleryImages = [
  {
    id: 1,
    src: galleryOne,
    alt: "Sala do restaurante Macieira",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: galleryTwo,
    alt: "Prato português contemporâneo",
    className: "",
  },
  {
    id: 3,
    src: galleryThree,
    alt: "Detalhe de mesa",
    className: "",
  },
  {
    id: 4,
    src: galleryFour,
    alt: "Chef a finalizar um prato",
    className: "",
  },
  {
    id: 5,
    src: galleryFive,
    alt: "Ambiente intimista",
    className: "",
  },
  {
    id: 6,
    src: gallerySix,
    alt: "Vinho servido no Macieira",
    className: "md:col-span-2",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section
        id="galeria"
        className="bg-[#FAF9F6] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="mb-12 border-b border-black/10 pb-8"
          >
            <h2 className="font-serif text-5xl leading-none text-[#121212] md:text-7xl">
              Galeria
            </h2>
          </motion.header>

          <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[280px]">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden bg-[#121212] text-left ${image.className}`}
                aria-label={`Abrir imagem: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white">
                    Ver fotografia
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 text-white/75 transition hover:text-white"
              aria-label="Fechar imagem"
            >
              <X size={30} />
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Gallery;