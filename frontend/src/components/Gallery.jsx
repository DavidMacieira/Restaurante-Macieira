const galleryImages = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop",
];

function Gallery() {
  return (
    <section id="galeria" className="px-6 md:px-10 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-[#B08D57] uppercase tracking-[0.4em] text-xs mb-5">
            Galeria
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            Uma atmosfera feita para ficar na memória.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Galeria Macieira"
              className={`w-full object-cover ${
                index % 2 === 0 ? "h-96" : "h-80 md:mt-16"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;