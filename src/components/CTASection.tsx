import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gold Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(0 0% 0%) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6">
            Pronto para elevar o nível da sua presença digital?
          </h2>

          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Vamos criar juntos uma landing page ou site que realmente converte.
            Solicite um orçamento sem compromisso.
          </p>

          {/* CTA Button */}
          <Button
            variant="secondary"
            size="xl"
            className="bg-background text-foreground hover:bg-background/90 font-bold shadow-2xl group"
          >
            <MessageCircle className="w-5 h-5" />
            Fale conosco agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Atendimento humano</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Soluções sob medida</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
