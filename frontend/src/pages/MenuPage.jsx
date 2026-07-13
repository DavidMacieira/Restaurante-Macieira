import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { menuCategories } from "../data/fullMenu";

function MenuItem({ item }) {
  return (
    <article className="border-b border-black/10 py-6 last:border-b-0">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="font-serif text-xl leading-tight text-[#121212] sm:text-2xl">
            {item.name}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/50">
            {item.description}
          </p>
        </div>

        <span className="shrink-0 font-serif text-xl text-[#B08D57] sm:text-2xl">
          {item.price}
        </span>
      </div>
    </article>
  );
}

function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121212]">
      <header className="border-b border-black/10 bg-[#FAF9F6]/95 px-5 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-black/50 transition hover:text-[#121212]"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>

          <Link
            to="/"
            className="font-serif text-lg tracking-[0.3em] sm:text-xl"
          >
            MACIEIRA
          </Link>

          <span className="w-[69px]" aria-hidden="true" />
        </div>
      </header>

      <section className="px-5 pb-20 pt-14 md:px-10 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-[#B08D57]">
              Cozinha Portuguesa
            </p>

            <h1 className="font-serif text-5xl leading-none sm:text-6xl md:text-7xl">
              MENU
            </h1>
          </div>

          <nav
            className="sticky top-0 z-30 -mx-5 mb-14 overflow-x-auto border-y border-black/10 bg-[#FAF9F6]/95 px-5 backdrop-blur md:-mx-10 md:px-10"
            aria-label="Categorias do menu"
          >
            <div className="mx-auto flex w-max min-w-full max-w-4xl items-center gap-8 py-5">
              {menuCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="shrink-0 text-[0.65rem] uppercase tracking-[0.25em] text-black/45 transition hover:text-[#B08D57]"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="space-y-20">
            {menuCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-24"
              >
                <div className="mb-3 flex items-end justify-between border-b border-black/20 pb-5">
                  <h2 className="font-serif text-3xl sm:text-4xl">
                    {category.name}
                  </h2>

                  <span className="text-[0.6rem] uppercase tracking-[0.25em] text-black/30">
                    {category.items.length} opções
                  </span>
                </div>

                <div>
                  {category.items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 border-t border-black/10 pt-8 text-center">
            <p className="text-xs leading-relaxed text-black/40">
              Informe a nossa equipa sobre alergias ou restrições alimentares.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block text-[0.65rem] uppercase tracking-[0.28em] text-black/50 transition hover:text-[#B08D57]"
            >
              Voltar à página inicial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MenuPage;