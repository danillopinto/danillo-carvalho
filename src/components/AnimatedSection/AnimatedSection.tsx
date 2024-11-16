import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: "left" | "right"; // Direção do movimento
}

const AnimatedSection = ({ children, direction = "left" }: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Anima apenas uma vez
    threshold: 0.1, // Quanto do componente precisa estar visível para animar
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Defina os valores iniciais com base na direção
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100, // -100 para a esquerda, 100 para a direita
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
