import { dishes } from "../data/dishes";

function MenuSection() {
  return (
    <section id="menu" className="bg-white px-6 md:px-10 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#B08D57] uppercase tracking-[0.4em] text-xs mb-5">
            Menu
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            Pratos em destaque
          </h2>

          <p className="text-black/60 leading-relaxed">
            Uma seleção inspirada nos sabores portugueses, reinterpretada com
            técnica, detalhe e apresentação contemporânea.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group bg-[#FAF9F6] border border-black/10 overflow-hidden hover:shadow-2xl transition duration-500"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <p className="text-[#B08D57] text-xs uppercase tracking-[0.25em] mb-3">
                  {dish.category}
                </p>

                <div className="flex justify-between gap-4 mb-4">
                  <h3 className="font-serif text-2xl">{dish.name}</h3>
                  <span className="text-[#B08D57] font-serif text-2xl">
                    {dish.price}
                  </span>
                </div>

                <p className="text-black/60 leading-relaxed">{dish.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;