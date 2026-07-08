import { motion } from "framer-motion";
import experienceOne from "../assets/images/Experience-01.png";
import experienceTwo from "../assets/images/Experience-02.png";
import experienceThree from "../assets/images/Experience-03.png";

const experiences = [
  {
    label: "Ambiente",
    image: experienceOne,
  },
  {
    label: "Ingredientes",
    image: experienceTwo,
  },
  {
    label: "Detalhe",
    image: experienceThree,
  },
];

function Experience() {
  return (
    <section id="experiencia" className="bg-[#FAF9F6] px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-[#B08D57] uppercase tracking-[0.45em] text-xs mb-5">
            Descubra
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#121212]">
            A experiência
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {experiences.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group relative h-[560px] overflow-hidden bg-[#121212]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition duration-[1400ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-80" />

              <div className="absolute left-7 bottom-7">
                <p className="text-white text-xs uppercase tracking-[0.35em]">
                  {item.label}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;