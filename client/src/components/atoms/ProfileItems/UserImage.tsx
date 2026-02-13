import { motion, useAnimation, type Variants } from "framer-motion";

export const UserImage = ({ src, alt }: { src: string; alt: string }) => {
    const circleControls = useAnimation();
    const handControls = useAnimation();

    const handleMouseEnter = async () => {
        await circleControls.start("visible");
        handControls.start("waving");
    };

    const handleMouseLeave = () => {
        circleControls.start("hidden");
        handControls.start("hidden");
    };

    const svgVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    const handVariants: Variants = {
        hidden: { opacity: 0, scale: 0, y: 10, x: 10 },
        waving: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            rotate: [0, 25, -15, 25, 0],
            transition: {
                opacity: { duration: 0.3, delay: 0.1 },
                scale: { duration: 0.3, delay: 0.1 },
                y: { duration: 0.3, delay: 0.1 },
                x: { duration: 0.3, delay: 0.1 },
                rotate: {
                    delay: 0.5, 
                    repeat: Infinity,
                    repeatDelay: 1,
                    duration: 1,
                    ease: "easeInOut"
                }
            }
        }
    };


    return (
        <motion.div
            className="relative w-24 h-24 mb-4 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img src={src} alt={alt} className="w-full h-full rounded-full object-cover" />
            <motion.svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 104 104"
                initial="hidden"
                animate={circleControls}
            >
                <motion.circle
                    cx="52"
                    cy="52"
                    r="50"
                    stroke="#00ff00"
                    strokeWidth="4"
                    fill="none"
                    variants={svgVariants}
                />
            </motion.svg>
            <motion.div
                className="absolute bottom-0 -right-2.5 text-3xl"
                style={{ originX: "80%", originY: "80%" }}
                initial="hidden"
                animate={handControls}
                variants={handVariants}
            >
                👋
            </motion.div>
        </motion.div>
    );
}