import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const PartnersSection = () => {
    return (
        <section id="quem-somos" className="relative py-24 overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Quem <span className="text-gradient-gold">Somos</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A mente e a estratégia por trás da Lumarc Studio. Unimos tecnologia e design para acelerar o seu negócio.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
                    {/* Lucas */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gold/60 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-2 border-white/5 transition-all duration-500 group-hover:border-gold/30 group-hover:scale-105 shadow-2xl shadow-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                                    <img
                                        src="/assets/img-lucas.png"
                                        alt="Lucas Castro"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-2 group-hover:text-gold transition-colors">Lucas Castro</h3>
                            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6 border-b border-gold/30 pb-4 px-8">
                                Co-Founder & Tech Lead
                            </p>

                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 px-4">
                                "Acredito que a tecnologia deve ser invisível e poderosa. Meu foco é construir estruturas digitais robustas que não apenas funcionam, mas que impulsionam o crescimento real das empresas."
                            </p>

                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Marcelo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gold/60 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-2 border-white/5 transition-all duration-500 group-hover:border-gold/30 group-hover:scale-105 shadow-2xl shadow-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                                    <img
                                        src="/assets/img-marcelo.png"
                                        alt="Marcelo"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-2 group-hover:text-gold transition-colors">Marcelo Alves</h3>
                            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6 border-b border-gold/30 pb-4 px-8">
                                Co-Founder & Creative Director
                            </p>

                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 px-4">
                                "O design é a alma do negócio. Busco trazer não apenas estética, mas uma experiência visual que conecta marcas ao seu público de forma autêntica e memorável."
                            </p>

                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
