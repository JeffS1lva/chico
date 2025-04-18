interface Slide {
  image: string;
  title: string;
  desc: string;
}

interface CarouselProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export function Carousel({ slides, currentSlide, setCurrentSlide }: CarouselProps) {
  return (
    <div className="relative overflow-hidden h-56 md:h-80">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="text-white p-6 md:p-12 max-w-lg">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg mb-4">{slide.desc}</p>
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full font-medium">
                  Ver coleção
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

      {/* Carousel navigation buttons */}
      <button
        onClick={() =>
          setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-blue-600 hover:bg-white"
      >
        ←
      </button>

      <button
        onClick={() =>
          setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-blue-600 hover:bg-white"
      >
        →
      </button>

    </div>
  );
}