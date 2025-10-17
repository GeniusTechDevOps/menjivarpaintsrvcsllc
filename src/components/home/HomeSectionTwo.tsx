import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import Animated from "../animaciones/Animation";
import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";

interface Props {
  data: RootObject;
  homeSection: SectionsHomeAbout[]
}

const HomeSectionTwo: React.FC<Props> = ({ data, homeSection }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center bg-primary overflow-hidden pb-10 md:pb-0">
      <div className="w-full md:w-[45%] h-auto">
        <Animated animation="zoom-in-down" easing="linear" duration={1000}>
          <img
            src={homeSection[1].additionalImages[1]}
            alt="img-home-2"
            className="w-full h-[480px] md:h-[680px] object-cover rounded-full -ml-0 md:-ml-28 -mt-36 md:-mt-24 border-b-[16px] md:border-b-0 border-r-0 md:border-r-[16px] border-btnColor"
          />
        </Animated>
      </div>
      <div className="w-full md:w-2/4 px-5 md:px-10 py-5 md:py-0 text-center md:text-start">
        <div className="flex items-center justify-center md:justify-start text-center md:text-start text-white gap-1 pb-4">
          <p>{data.name}</p>
          <span className="w-10 h-0 border-y-[1px] border-white"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold capitalize text-white">
          <IconGlobal />
          {homeSection[1].title}
        </h2>
        <p className="font-light text-white py-6">
          {homeSection[1].text}
        </p>
        <Animated animation="fade-right" offset={300} easing="ease-in-sine" duration={1000}>
          <div className="w-full md:w-[150%] flex flex-col md:flex-row justify-center md:justify-start items-center p-3 bg-slate-200 rounded-full gap-4 -ml-0 md:-ml-[350px] relative">
            <div className="absolute w-full md:w-1/2 h-full left-0 top-0 flex justify-center md:justify-start items-center px-10">
              <div className="w-24 h-24 border-white border-8 md:border-[12px] bg-secondary rounded-full z-10 flex justify-center items-center hover:rotate-[70deg] hover:shadow-xl transform transition duration-300 ease-in-out">
                {data.dataGeneral.phones[0].number ? (
                  <a href={`tel:+1:${data.dataGeneral.phones[0].number}`}>
                    <i className="fa-solid fa-phone text-3xl md:text-3xl text-white" />
                  </a>
                ) : null}
              </div>
            </div>
            <img
              src={homeSection[1].additionalImages[0]}
              alt="img-home-1"
              className="w-full md:w-1/2 h-[260px] md:h-[140px] rounded-full object-cover"
            />
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start items-center">
              <div className="w-full md:w-1/2 px-10 py-0 md:py-5">
                <p className="text-6xl font-black text-secondary">
                  {data.yearsExperience}+
                </p>
                <p className="text-sm font-light">Years of experience</p>
              </div>
              <div className="w-1/2 hidden md:block">
                <p className="text-sm font-light">
                  <i className="fa-solid fa-circle-small text-xs mr-2"></i> Professionals
                </p>
                <p className="text-sm font-light">
                  <i className="fa-solid fa-circle-small text-xs mr-2"></i> Efficient
                </p>
                <p className="text-sm font-light">
                  <i className="fa-solid fa-circle-small text-xs mr-2"></i> Cost-Effectiveness
                </p>
                <p className="text-sm font-light">
                  <i className="fa-solid fa-circle-small text-xs mr-2"></i> Diligence
                </p>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
