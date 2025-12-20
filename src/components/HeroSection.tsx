import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Code2, Rocket, Globe, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse interaction for 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = clientX - innerWidth / 2;
    const y = clientY - innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);
  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);

  // Smooth out the motion
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  return (
    <section
      className="relative min-h-[110vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
    >

      {/* Noise Overlay - adds texture/cinema feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        mixBlendMode: 'overlay'
      }} />

      {/* Golden Aura Gradient - Bottom to Top */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-gold/10 via-gold/5 to-transparent pointer-events-none z-0 opacity-80" />

      {/* Dynamic Background Effects */}
      <motion.div style={{ y: y1, x: -50 }} className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen opacity-40 animate-pulse-gold" />
      <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-10 pointer-events-none opacity-30" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(45 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 50%) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
      }} />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start relative z-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/30 border border-white/5 backdrop-blur-md mb-8 hover:bg-secondary/50 hover:border-gold/20 transition-all cursor-default group"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold shadow-[0_0_15px_hsl(45,100%,50%)]"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-foreground/90 tracking-widest uppercase group-hover:text-gold transition-colors">
              Lumarc Studio Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8"
          >
            A Excelência do <br className="hidden lg:block" />
            <span className="text-gradient-gold relative inline-block drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              Digital Premium
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                className="absolute w-[105%] h-3 -bottom-2 -left-[2%] text-gold opacity-80"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-light"
          >
            Não criamos apenas sites. Construímos <span className="text-foreground font-medium">experiências digitais imersivas</span> que posicionam sua marca no topo e multiplicam seus resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button
              size="xl"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black font-bold text-lg h-14 rounded-full shadow-[0_0_40px_hsl(45,100%,50%,0.3)] hover:shadow-[0_0_60px_hsl(45,100%,50%,0.5)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              onClick={() => openWhatsApp()}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skewed-x-[-15deg] group-hover:translate-x-[100%] transition-transform duration-700 ease-out z-10" />
              <span className="relative z-20 flex items-center">
                Iniciar Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-white/5 bg-white/5 hover:bg-white/10 text-foreground h-14 rounded-full backdrop-blur-md transition-all duration-300 hover:border-gold/20"
              asChild
            >
              <a href="https://www.instagram.com/lumarc.studio/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Ver Portfólio
                <Globe className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Content - 3D Interactivity */}
        <motion.div
          className="relative hidden lg:block h-[600px] w-full lg:w-[120%] lg:-mr-32 perspective-[1000px]"
          style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
        >

          {/* Decorative Orb */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-gold/10 to-transparent blur-[80px] pointer-events-none z-0"
          />

          {/* Card 1: Code Structure (Back Left Depth) */}
          <motion.div
            style={{ z: -50, x: useTransform(mouseX, [-500, 500], [20, -20]) }}
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 5 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-10 left-0 w-[400px] bg-[#0A0A0A]/90 backdrop-blur-xl rounded-xl border border-white/5 shadow-2xl p-6 transform -rotate-3 z-10"
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">
                <MousePointer2 className="w-3 h-3" />
                lumarc-engine.tsx
              </div>
            </div>
            <div className="space-y-3 font-mono text-xs leading-relaxed opacity-90">
              <div className="flex gap-4"><span className="text-muted-foreground/30">01</span> <span className="text-purple-400">export const</span> <span className="text-yellow-400">Success</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">02</span> <span className="pl-4 text-blue-400">const</span> <span className="text-cyan-400">results</span> = <span className="text-purple-400">useGrowth</span>({'{'}</div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">03</span> <span className="pl-8 text-white">performance:</span> <span className="text-green-400">'Maximum'</span>,</div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">04</span> <span className="pl-8 text-white">design:</span> <span className="text-green-400">'Award-Winning'</span>,</div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">05</span> <span className="pl-8 text-white">seo:</span> <span className="text-green-400">'Rank #1'</span></div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">06</span> <span className="pl-4">{'}'});</span></div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">07</span> <span className="pl-4 text-purple-400">return</span> <span className="text-yellow-400">&lt;ScaleUp /&gt;</span>;</div>
              <div className="flex gap-4"><span className="text-muted-foreground/30">08</span> {'}'}</div>
            </div>
          </motion.div>

          {/* Card 2: Main Visual (Center Front Focus) */}
          <motion.div
            style={{ z: 50, x: useTransform(mouseX, [-500, 500], [-15, 15]), y: useTransform(mouseY, [-500, 500], [-15, 15]) }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-28 right-24 w-[380px] h-[480px] bg-gradient-to-b from-[#151515] to-[#050505] rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] z-20 overflow-hidden group cursor-pointer"
          >
            {/* Animated Glow on Hover */}
            <div className="absolute inset-0 bg-gold/10 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none -translate-x-full group-hover:translate-x-full transform transition-transform" style={{ transitionDuration: '1.5s' }} />

            <div className="h-full flex flex-col relative">
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex flex-col">
                  <span className="text-[10px] items-center gap-1.5 flex uppercase tracking-[0.2em] text-gold font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                    Live Analytics
                  </span>
                </div>
                <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-400 font-mono">
                  +12.4% vs last week
                </div>
              </div>

              {/* Chart Viz */}
              <div className="flex-1 p-8 flex flex-col justify-end relative">
                {/* Grid lines */}
                <div className="absolute inset-x-0 bottom-8 px-8 space-y-8 pointer-events-none opacity-20">
                  {[1, 2, 3].map(i => <div key={i} className="h-px bg-white w-full" />)}
                </div>

                <div className="h-48 flex items-end justify-between gap-3 relative z-10">
                  {[35, 50, 45, 70, 60, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: `${h}%`, opacity: 1 }}
                      transition={{ delay: 1.2 + (i * 0.1), duration: 1.5, type: "spring", bounce: 0.2 }}
                      className="flex-1 bg-gradient-to-t from-gold via-gold/50 to-gold/10 rounded-t-lg relative group/bar"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat */}
              <div className="p-6 bg-white/[0.02] border-t border-white/5">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-muted-foreground text-xs mb-1">Taxa de Conversão</div>
                    <div className="text-2xl font-bold text-white">8.4% <span className="text-[10px] text-muted-foreground font-normal align-middle">Avg: 2.1%</span></div>
                  </div>
                  <div className="text-gold">
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Floating Sticker (Front Elements) */}
          <motion.div
            style={{ z: 80, x: useTransform(mouseX, [-500, 500], [-30, 30]), y: useTransform(mouseY, [-500, 500], [-30, 30]) }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
            className="absolute bottom-40 right-10 z-30"
          >
            <div className="bg-[#151515] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-orange-500 flex items-center justify-center text-black shadow-lg">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Mobile First</div>
                <div className="text-[10px] text-muted-foreground">Otimizado 100%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ z: 60, x: useTransform(mouseX, [-500, 500], [-10, 10]), y: useTransform(mouseY, [-500, 500], [10, -10]) }}
            className="absolute top-20 right-20 z-0 opacity-40"
          >
            <Globe className="w-32 h-32 text-white/5 animate-spin-slow" style={{ animationDuration: '30s' }} />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
