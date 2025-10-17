import React from 'react';
import { motion } from 'framer-motion';

const Fireworks = () => {
  // Generar partículas
  const particles = new Array(30).fill(null).map((_, index) => {
    const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio para la dispersión
    const distance = Math.random() * 200 + 100; // Distancia aleatoria
    const duration = Math.random() * 2 + 1; // Duración de la animación

    return {
      angle,
      distance,
      duration,
      delay: Math.random() * 0.5, // Retardo aleatorio entre partículas
    };
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-yellow-400"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
          }}
          initial={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: 0,
            x: Math.cos(particle.angle) * particle.distance,
            y: Math.sin(particle.angle) * particle.distance,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;
