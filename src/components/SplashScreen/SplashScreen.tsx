import { motion } from "framer-motion";
import { useEffect } from "react";
import "./SplashScreen.css"; // Estilo personalizado

const SplashScreen = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 2000); // Duração total da SplashScreen (3 segundos)

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-container">
      <motion.div
        className="dot"
        animate={{
          y: [0, -20, 0], // Movimento de pular
        }}
        transition={{
          duration: 0.6, // Tempo de cada pulo
          repeat: Infinity, // Repetição infinita
          delay: 0, // Sem atraso
        }}
      />
      <motion.div
        className="dot"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.2, // Atraso para pular após a primeira
        }}
      />
      <motion.div
        className="dot"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.4, // Atraso para pular após a segunda
        }}
      />
    </div>
  );
};

export default SplashScreen;
