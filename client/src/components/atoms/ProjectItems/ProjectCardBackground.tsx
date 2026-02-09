import { motion, useSpring } from "framer-motion";

export const ProjectCardBackground = ({ children }: { children: React.ReactNode }) => {
    const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
    const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            onMouseMove={(e) => {
                const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - left) / width;
                const y = (e.clientY - top) / height;
                rotateX.set((y - 0.5) * 30); 
                rotateY.set((x - 0.5) * -30);
            }}
            onMouseLeave={() => {
                rotateX.set(0);
                rotateY.set(0);
            }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="flex flex-col rounded-2xl sm:grid cursor-pointer sm:gap-6 py-4 border-b border-green-900/50 bg-[#1a1a1a] hover:bg-green-900/10 duration-300 px-4 font-mono group"
        >
            {children}
        </motion.div>
    );
}