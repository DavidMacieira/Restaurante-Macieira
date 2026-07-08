function Reservation() {
  return (
    <section
      id="reservas"
      className="bg-[#121212] text-white px-6 md:px-10 py-28"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#B08D57] uppercase tracking-[0.4em] text-xs mb-5">
            Reservas
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Reserve uma noite especial no Macieira.
          </h2>

          <p className="text-white/60 leading-relaxed text-lg">
            Uma experiência pensada para jantares românticos, encontros de
            negócios e celebrações memoráveis.
          </p>
        </div>

        <form className="bg-[#FAF9F6] text-[#121212] p-8 md:p-10 grid gap-5">
          <input
            placeholder="Nome"
            className="border border-black/10 bg-white px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <input
            placeholder="Email"
            className="border border-black/10 bg-white px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="date"
              className="border border-black/10 bg-white px-5 py-4 outline-none focus:border-[#B08D57]"
            />

            <input
              type="time"
              className="border border-black/10 bg-white px-5 py-4 outline-none focus:border-[#B08D57]"
            />
          </div>

          <select className="border border-black/10 bg-white px-5 py-4 outline-none focus:border-[#B08D57]">
            <option>2 pessoas</option>
            <option>3 pessoas</option>
            <option>4 pessoas</option>
            <option>5 pessoas</option>
            <option>6+ pessoas</option>
          </select>

          <button
            type="button"
            className="bg-[#121212] text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#B08D57] transition"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;