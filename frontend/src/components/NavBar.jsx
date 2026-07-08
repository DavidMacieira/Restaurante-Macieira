import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experiência", href: "#experiencia" },
    { label: "Menu", href: "#menu" },
    { label: "Galeria", href: "#galeria" },
    { label: "Reservas", href: "#reservas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-xl border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-700 ${
          isScrolled ? "h-16" : "h-24"
        }`}
      >
        <a
          href="#"
          className={`font-serif tracking-[0.35em] transition-all duration-700 ${
            isScrolled ? "text-xl text-[#121212]" : "text-2xl text-white/85"
          }`}
        >
          MACIEIRA
        </a>

        <div
          className={`hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.22em] transition-all duration-700 ${
            isScrolled
              ? "opacity-100 translate-y-0 text-[#121212]"
              : "opacity-0 -translate-y-2 pointer-events-none text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-[#B08D57] transition after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-px after:bg-[#B08D57] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setLanguage("PT")}
              className={`transition ${
                language === "PT" ? "scale-110" : "opacity-45 hover:opacity-100"
              }`}
              title="Português"
            >
              <span className="fi fi-pt text-xl rounded-sm"></span>
            </button>

            <button
              onClick={() => setLanguage("EN")}
              className={`transition ${
                language === "EN" ? "scale-110" : "opacity-45 hover:opacity-100"
              }`}
              title="English"
            >
              <span className="fi fi-gb text-xl rounded-sm"></span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition ${
              isScrolled ? "text-[#121212]" : "text-white"
            }`}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-t border-black/10 px-6 py-8">
          <div className="flex flex-col gap-6 text-sm uppercase tracking-[0.22em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#B08D57] transition"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-4 pt-4">
              <button onClick={() => setLanguage("PT")}>
                <span className="fi fi-pt text-xl rounded-sm"></span>
              </button>

              <button onClick={() => setLanguage("EN")}>
                <span className="fi fi-gb text-xl rounded-sm"></span>
              </button>
            </div>

            <a
              href="#reservas"
              onClick={() => setIsOpen(false)}
              className="mt-2 border border-[#121212] px-6 py-4 text-center hover:bg-[#121212] hover:text-white transition"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;