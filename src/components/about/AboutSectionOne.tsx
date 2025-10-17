import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import Animated from "../animaciones/Animation";
import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";

interface Props {
  data: RootObject;
  aboutSection: SectionsHomeAbout[];
}

const AboutSectionOne: React.FC<Props> = ({ data, aboutSection }) => {
  return (
    <section className="flex flex-col-reverse md:flex-col items-center py-20 font-poppins">
      <div className="justify-center flex-1 py-4 mx-auto lg:py-6 relative z-10">
        <Animated animation="fade-down" easing="linear" duration={2000}>
          <div className="flex flex-wrap items-center w-4/5 mx-auto text-center relative z-10 bg-white rounded-b-xl">
            <div className="w-full px-0 md:px-6 mb-10 flex flex-col justify-center items-center bg-white py-4 lg:mb-8">
              <div className="text-center pb-5">
                <span className="text-secondary text-[22px] font-bold">About Us</span>
                <h2 className="text-2xl md:text-5xl font-bold text-secondary">
                  <HighlightedText text={data.slogan[2]} defaultColor="red" />
                </h2>
              </div>
              <p className="mb-4 text-base leading-7 text-gray-600">
                {aboutSection[0].text}
              </p>
              <ButtonContent linkBtn={`tel:+1:${data.dataGeneral.phones[0].number}`} />
            </div>
          </div>
        </Animated>
      </div>
      <div className="w-full flex justify-center items-center mt-0 md:-mt-56">
        <div className="w-1/2 h-[300px] md:h-[450px] relative">
          <Animated animation="zoom-in-right" duration={2000} delay={500}>
            <img
              src={aboutSection[0].additionalImages[0]}
              alt="about-img-1"
              className="w-full h-[450px] object-cover"
            />
            <img
              src="/assets/img/waves_1.png"
              className="w-1/2 h-full absolute top-0 right-0"
              alt="waves"
            />
          </Animated>
        </div>
        <div className="w-1/2 h-[300px] md:h-[450px] relative">
          <Animated animation="zoom-in-left" duration={2000} delay={500}>
            <img
              src={aboutSection[0].additionalImages[1]}
              alt="about-img-1"
              className="w-full h-[450px] object-cover"
            />
            <img
              src="/assets/img/waves_1.png"
              className="w-1/2 h-full absolute top-0 -scale-100 left-0"
              alt="waves"
            />
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
