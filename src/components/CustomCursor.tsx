import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring animation for the glow only (tighter/faster now)
    const springConfig = { damping: 30, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Golden Aura Spotlight (Slightly smoothed) */}
            <motion.div
                className="absolute w-[400px] h-[400px] bg-gold/15 rounded-full blur-[80px] mix-blend-screen opacity-50"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Minimal Tech Dot Follower (Instant/Locked) */}
            <motion.div
                className="absolute w-2 h-2 bg-gold shadow-[0_0_10px_hsl(45,100%,50%)] rounded-full mix-blend-screen"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
};

export default CustomCursor;
