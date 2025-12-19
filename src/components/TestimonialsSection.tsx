import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechStart",
    content: "A Lumarc Studio transformou completamente nossa presença digital. Em apenas 2 meses, triplicamos nossas conversões.",
    rating: 5
  },
  {
    name: "Ana Beatriz",
    role: "Fundadora, Bela Estética",
    content: "Profissionalismo impecável. O site ficou lindo e já está gerando muito mais agendamentos para minha clínica.",
    rating: 5
  },
  {
    name: "Roberto Silva",
    role: "Diretor, Construtora RS",
    content: "Atendimento próximo e resultado excepcional. Recomendo para qualquer empresa que queira se destacar online.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 relative bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que nossos clientes{' '}
            <span className="text-gradient-gold">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resultados reais de empresas que confiaram na Lumarc Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 hover-lift transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
