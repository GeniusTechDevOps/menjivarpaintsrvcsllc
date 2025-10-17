import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import ButtonContent from "../buttons/Buttons";
import { useEffect, useState } from "react";
import Animated from "../animaciones/Animation";

interface HeroSection2Props {
  data: RootObject;
  dataBlock: SectionsHomeAbout[]
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data, dataBlock }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Cambiar slide automáticamente cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [currentSlide]); // Escucha los cambios en `currentSlide`

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === dataBlock[0].additionalImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? dataBlock[0].additionalImages.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-auto relative z-10 overflow-hidden">
      <div className="w-full relative bg-[url('/assets/img/banner-3.jpg')] bg-cover bg-center pt-[100px] pb-[180px] flex justify-center items-center text-center clip-path-slide">
        
        <div className="absolute w-full h-full left-0 top-0 z-10 bg-gradient-to-tl from-secondary to-black opacity-50"></div>
        <img className="w-[150px] md:w-[180px] h-[150px] md:h-[180px] object-contain absolute right-5 top-28 animate-floating z-10" src="\assets\img\paint-1.png" alt="rollo-painting" />
        <img className="w-[150px] md:w-[180px] h-[150px] md:h-[180px] object-contain absolute left-5 bottom-20 animate-floating z-10" src="\assets\img\paint-3.png" alt="rollo-painting" />
        <div className="relative z-10 flex flex-col justify-center items-center pb-12 w-4/5 px-10">
          <Animated animation="fade-up" duration={2000} delay={500} >
            <img src={data.logos.secondary} className="w-full md:w-1/3 h-full mx-auto" alt="logo" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white ">{dataBlock[0].title}</h1>
            <p className="text-base text-white pb-10">{dataBlock[0].text}</p>

          </Animated>
          <ButtonContent />
        </div>
      </div>
      {dataBlock[0].additionalImages.map((image, index) => (
        <div key={index} className={`w-4/5 mx-auto relative h-[220px] md:h-[420px] -mt-36 ${index === currentSlide ? 'animate-slideUp' : 'hidden'}`}>
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          <img src="\assets\img\waves_2.png" className="w-full h-full absolute bottom-0 left-0 z-10" alt="waves" />
        </div>
      ))}

    </div>
  );
};

export default HeroSection2;
