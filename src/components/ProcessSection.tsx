import { MessageSquare, Lightbulb, Palette, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Entendimento",
    description: "Conhecemos seu negócio, objetivos e público-alvo para criar a estratégia ideal."
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Planejamento",
    description: "Definimos estrutura, conteúdo e fluxo de conversão do projeto."
  },
  {
    icon: Palette,
    step: "03",
    title: "Design",
    description: "Criamos um design moderno e estratégico alinhado à sua marca."
  },
  {
    icon: Code,
    step: "04",
    title: "Desenvolvimento",
    description: "Transformamos o design em código limpo, rápido e responsivo."
  },
  {
    icon: Rocket,
    step: "05",
    title: "Entrega & Suporte",
    description: "Publicamos seu site e oferecemos suporte para garantir seu sucesso."
  }
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nosso Processo
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Do briefing ao{' '}
            <span className="text-gradient-gold">lançamento</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo estruturado e transparente para entregar
            resultados excepcionais em cada projeto.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden sm:block" />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover-lift transition-all duration-300 group ml-16 sm:ml-20 lg:ml-0">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="text-primary font-bold text-sm">{item.step}</span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-2xl bg-card border-2 border-primary/30 flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
