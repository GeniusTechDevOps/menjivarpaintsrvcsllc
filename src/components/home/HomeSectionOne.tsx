import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import Animated from "../animaciones/Animation";
import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";
import HighlightedText from "../global/TitleColor";

interface Props {
  data: RootObject;
  homeSection: SectionsHomeAbout[]

}

const HomeSectionOne: React.FC<Props> = ({ data, homeSection }) => {
  return (
    <section className="flex items-center font-poppins md:py-[100px] py-[50px]">
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 flex flex-col self-center">
            <Animated animation="zoom-in-right" duration={1800} delay={300}>
              <div className="mb-6">
                <div className="flex items-center gap-2 flex-wrap-reverse">
                  <span className="text-2xl font-black text-primary">
                    A Little About Us
                  </span>
                  <div className="w-1/3 h-2 border-b-2 border-primary"></div>
                </div>
                <h2 className="mt-2 text-3xl font-black md:text-5xl text-secondary">
                  <HighlightedText text={homeSection[0].title} defaultColor="black" />
                </h2>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-600">
                {homeSection[0].text}
              </p>
              <ButtonContent linkBtn={`tel:+1:${data.dataGeneral.phones[0].number}`} />
            </Animated>
          </div>

          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex self-center relative justify-center">
            <Animated animation="zoom-in" duration={2600} delay={500}>
              <img
                src={homeSection[0].additionalImages[0]}
                alt="aboutimage"
                className="relative z-10 object-cover md:w-[500px] w-[320px] md:h-[500px] h-[320px] border-[20px] border-white shadow-2xl rounded-2xl"
              />
            </Animated>
            <img
              src={homeSection[0].additionalImages[1]}
              alt="aboutimage"
              className="z-10 object-cover md:w-[200px] w-[150px] md:h-[280px] h-[150px] absolute -bottom-10 md:bottom-20 right-10 md:-right-6 border-[12px] border-white shadow-2xl rounded-2xl animate-floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;
