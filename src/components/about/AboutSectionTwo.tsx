import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";

interface Props {
  data: RootObject;
   aboutSection: SectionsHomeAbout[];
}

const AboutSectionTwo: React.FC<Props> = ({ data, aboutSection }) => {
  return (
    <section className="flex items-center justify-center lg:h-screen bg-gradient-to-b from-secondary pt-10">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="flex flex-wrap">
          <div className="flex-1 pl-0 lg:pl-4 text-white">
            <div className="mb-12 text-center">
              <div className="relative">
                <h2 className="text-5xl font-bold">{data.slogan[6]}</h2>
                <div className="flex w-24 mt-3 mb-10 overflow-hidden rounded mx-auto">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div
                    className="flex-1 h-2"
                    style={{ backgroundColor: data.colors.secondaryColor }}
                  ></div>
                  <div
                    className="flex-1 h-2"
                    style={{ backgroundColor: data.colors.primaryColor }}
                  ></div>
                </div>
              </div>
              <p className="mb-16 text-base text-white">{aboutSection[1].text}</p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {[
                { icon: "fas fa-star", text: "Quality & Durability" },
                { icon: "fas fa-headset", text: "Expert Solutions" },
                { icon: "fas fa-lightbulb", text: "Innovation" },
                { icon: "fas fa-leaf", text: "Sustainability & Environment" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg"
                >
                  <div
                    className="inline-block p-4 mb-4 rounded-full w-14 h-14"
                    style={{ backgroundColor: data.colors.secondaryColor }}
                  >
                    <i className={`${item.icon} text-white`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-black">{item.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;