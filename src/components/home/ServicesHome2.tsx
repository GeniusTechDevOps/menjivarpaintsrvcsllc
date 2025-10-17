import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import type { DataGeneral, RootObject, Service } from "../../interfaces/dbData";
import FormatText from "../../hooks/FormatText";
import { useState } from "react";
import ButtonContent from "../buttons/Buttons";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';

interface SliderServicesProps {
  dbServices: Service[];
  landingServices: boolean;
  slidesPerView?: number;
  onePage?: boolean;
  dataGeneral?: DataGeneral;
  dataglobal: RootObject;
}

const ServicesHome2: React.FC<SliderServicesProps> = ({
  dbServices,
  landingServices,
  slidesPerView = 2,
  onePage,
  dataGeneral,
  dataglobal,
}) => {

  const [sendInput, setSendInput] = useState("");
  const [active, setActive] = useState(false);
  const sendWhatsapp = () => {
    const relmsg = sendInput.replace(/ /g, "%20");
    const phone = dataglobal.dataGeneral.phones[0].number
      .replace("-", "")
      .replace("-", "");

    window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
    setSendInput("");
    setActive(false);
  };
  return (
    <div className="w-full h-auto relative">
      <div className="w-full h-[600px] md:h-[500px] relative">
        <img className="w-full h-full object-cover absolute top-0 left-0" src={dataglobal.gallery[9]} alt="bgimg" />
        <div className="w-full h-full absolute top-0 left-0 bg-black/60 "></div>
        <img src="\assets\img\waves_2.png" className="w-full h-full absolute top-0 left-0 z-10 -scale-y-100" alt="waves" />
        <div className="w-full h-auto px-10 flex flex-col md:flex-row items-end relative z-10 pt-20">
          <div className="w-4/5 mx-auto md:w-1/4">
            <img className="w-full h-auto object-contain" src={dataglobal.logos.secondary} alt="logos" />
          </div>
          <div className="pt-5 md:pt-28">
            <div className="w-full px-2 md:px-10 text-white text-center md:text-start">
              <h2 className="text-3xl md:text-5xl font-extrabold md:font-bold capitalize">Call us now for the best quality services! {
                dataglobal.dataGeneral.phones && (
                  <a href={`tel:${dataglobal.dataGeneral.phones[0].number}`} className="text-3xl md:text-5xl font-extrabold md:font-bold"><i className="fa-regular fa-phone mr-3"></i>{dataglobal.dataGeneral.phones[0].number}</a>
                )
              }</h2>
              
            </div>
            <div className="w-[100%] md:w-[90%] mx-auto z-50 border-[1px] border-white rounded-3xl py-2 px-2 flex items-start space-x-2 mt-4">
              <div className="w-auto h-auto hidden md:block">
                <div className="w-10 h-10 bg-green-700 rounded-full flex justify-center items-center">
                  <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                </div>
              </div>
              <div className="w-[90%] bg-white rounded-xl overflow-hidden px-1 h-full">
                <input
                  className="w-full h-full py-3 rounded-lg px-2 text-black"
                  type="text"
                  placeholder="Send Message..."
                  value={sendInput}
                  onChange={(e) => setSendInput(e.target.value)}
                />
              </div>
              <div className="w-auto">
                <button
                  className="w-12 h-12 rounded-full shadow-xl bg-white hover:bg-green-600 text-black hover:text-white"
                  id="send_btn"
                  type="button"
                  onClick={() => sendWhatsapp()}
                >
                  <i className="fa-regular fa-paper-plane text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row space-x-4  relative w-11/12 mx-auto md:mx-0 md:ml-auto rounded-l-3xl bg-white -mt-14">
        <div className="w-full md:w-1/4 text-start px-5 flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary px-10 pb-10">Our Services</h2>
          <ButtonContent />
        </div>
        <div className="w-full md:w-3/4 px-5 md:px-0">
          <div className="w-full h-auto relative z-20">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={5}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              navigation
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: slidesPerView,
                },
              }}
              className="border-none  "
            >
              {dbServices.map((service, index) => (
                <SwiperSlide className=" w-full py-5" key={index}>
                  <div className="h-[260px] w-11/12 mx-auto shadow-lg rounded-2xl border-none relative">
                    <div className="absolute z-10 bg-secondary p-5 rounded-2xl -left-5 -bottom-5">
                      <p className="text-lg font-bold text-white capitalize">{service.title}</p>
                      <a href={`${onePage
                        ? `tel:${dataGeneral?.phones[0].number}`
                        : landingServices
                          ? `/services/${FormatText(service.title)}`
                          : "/services"
                        }`}
                        className="text-primary text-base  mt-4 inline-block hover:bg-primary text-white transition-all border-b-2" >
                        Read More
                      </a>
                    </div>
                    <img className="w-full h-full object-cover rounded-2xl" src={service.description[0].image} alt="img-services" />

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome2;
