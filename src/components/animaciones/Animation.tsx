import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimationProps {
  children: React.ReactNode;
  animation: string; // Tipo de animación, como "fade-up" o "zoom-in"
  duration?: number; // Duración de la animación (en milisegundos)
  delay?: number; // Retraso de la animación (en milisegundos)
  easing?: string; // Curva de transición, como "ease-in-out"
  offset?: number; // Offset de activación de la animación
  once?: boolean; // Si la animación debe ejecutarse solo una vez
}

const Animated: React.FC<AnimationProps> = ({
  children,
  animation,
  duration = 1000,
  delay = 0,
  easing = 'ease',
  offset = 120,
  once = true,
}) => {
  // Inicializar AOS solo una vez al cargar el componente
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-easing={easing}
      data-aos-offset={offset}
      data-aos-once={once ? 'true' : 'false'}
    >
      {children}
    </div>
  );
};

export default Animated;
