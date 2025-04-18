interface Testimonial {
  name: string;
  since: string;
  text: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex text-amber-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold mr-3">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.since}</p>
        </div>
      </div>
    </div>
  );
}