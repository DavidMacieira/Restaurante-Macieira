import { Calendar, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import logo from "../assets/images/logotipo.png";

function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-black px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1fr_1fr_1fr] gap-12 items-center">
          <div>
            <img
              src={logo}
              alt="Logótipo Macieira"
              className="w-56 h-56 object-contain mx-auto lg:mx-0"
            />
          </div>

          <div className="lg:border-l lg:border-[#B08D57]/40 lg:pl-12">
            <p className="text-black/65 leading-loose text-lg">
              Cozinha portuguesa contemporânea num ambiente elegante, tranquilo
              e memorável.
            </p>

            <div className="flex gap-5 mt-8 text-[#B08D57] text-2xl">
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaTripadvisor className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

          <div>
            <h3 className="text-[#B08D57] uppercase tracking-[0.35em] text-sm mb-8">
              Contactos
            </h3>

            <div className="space-y-5 text-black/70">
              <p className="flex gap-4 items-center">
                <MapPin size={20} className="text-[#B08D57]" />
                Portugal
              </p>

              <p className="flex gap-4 items-center">
                <Phone size={20} className="text-[#B08D57]" />
                +351 000 000 000
              </p>

              <p className="flex gap-4 items-center">
                <Mail size={20} className="text-[#B08D57]" />
                reservas@macieira.pt
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[#B08D57] uppercase tracking-[0.35em] text-sm mb-8">
              Horário
            </h3>

            <div className="space-y-5 text-black/70">
              <p className="flex gap-4 items-center">
                <Calendar size={20} className="text-[#B08D57]" />
                Terça a Domingo
              </p>

              <p>19:00 — 23:30</p>
              <p>Segunda-feira encerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#B08D57]/40 mt-16 pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            © 2026 Macieira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;