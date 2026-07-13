import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredDishes } from "../data/dishes";
import { Link } from "react-router-dom";


function DishInformation({ dish }) {
  return (
    <div>
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-[#B08D57]">
        {dish.category}
      </p>

      <div className="flex items-start justify-between gap-6">
        <h3 className="font-serif text-3xl leading-tight text-[#121212]">
          {dish.name}
        </h3>

        <span className="shrink-0 font-serif text-2xl text-[#B08D57]">
          {dish.price}
        </span>
      </div>

      <p className="mt-4 max-w-md leading-relaxed text-black/55">
        {dish.description}
      </p>
    </div>
  );
}

function MenuSection() {
  const [mainDish, ...secondaryDishes] = featuredDishes;

  return (
    <section id="menu" className="bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col gap-8 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#B08D57]">
              À LA CARTE
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#121212] md:text-6xl">
              O Menu    
            </h2>
          </div>

            <Link
  to="/menu"
  className="group inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#121212]"
>
  Ver menu completo

  <ArrowUpRight
    size={17}
    className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
  />
            </Link>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85 }}
            className="group"
          >
            <div className="mb-7 h-[420px] overflow-hidden bg-[#F2EFE9] md:h-[620px]">
              <img
                src={mainDish.image}
                alt={mainDish.name}
                className="h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.035]"
              />
            </div>

            <DishInformation dish={mainDish} />
          </motion.article>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryDishes.map((dish, index) => (
              <motion.article
                key={dish.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className="group"
              >
                <div className="mb-6 h-[280px] overflow-hidden bg-[#F2EFE9] lg:h-[264px]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.04]"
                  />
                </div>

                <DishInformation dish={dish} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;