import { useState } from "react";
import type { RootObject } from "../../interfaces/dbData";

interface Props {
  data: RootObject;
}

const Map = ({ data }: Props) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(
    data.dataGeneral.location[0].urlCity
  );
  const [selectedNameCity, setSelectedNameCity] = useState<string | null>(
    data.dataGeneral.location[0].city
  );

  const handleCityClick = (urlCity: string, cityName: string) => {
    setSelectedCity(urlCity);
    setSelectedNameCity(cityName);
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <div className="md:w-[95%] mx-auto mt-[60px]">
        <div className="w-full mb-10 justify-center gap-2 flex flex-wrap"></div>
      </div>
      <h2
        className="
        md:text-[40px] text-[30px] font-bold text-center bg-primary md:w-[80%] mx-auto md:rounded-t-full text-white md:py-0 py-4
        "
      >
        We Cover {data?.milesCover} Miles Around {selectedNameCity}
      </h2>
      <div className="w-full h-auto flex justify-center items-center">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-4 py-2 my-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none "
        >
          {isVisible ? "Close All" : "Show All"} Locations
        </button>
      </div>
      <div className={`flex items-start justify-center absolute top-[150px] left-0 z-20 ${isVisible ? "h-[300px]" : "h-0"} overflow-hidden transition-all duration-500`}>
        {/* Botón para alternar visibilidad */}


        {/* Div con animación */}
        <div
          className={`transition-all duration-500 ${isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
            } p-4 shadow-lg rounded-b-2xl bg-white flex flex-wrap justify-center gap-2 overflow-y-auto`}
        >
          {data.dataGeneral.location.map((item, index) => (
            <span
              key={index}
              onClick={() => handleCityClick(item.urlCity, item.city)}
              className={`cursor-pointer text-white px-8 py-2 rounded-xl border-white min-w-[200px] max-w-[300px] ${selectedCity === item.urlCity
                ? "bg-primary border-primary"
                : "bg-secondary border-secondary"
                }`}
            >
              <i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
              {item.city}
            </span>
          ))}
        </div>
      </div>
      {/* <div className="md:w-[80%] mx-auto w-[95%] flex flex-wrap justify-center py-4 gap-4">
        {data.dataGeneral.location.map((item, index) => (
          <span
            key={index}
            onClick={() => handleCityClick(item.urlCity, item.city)}
            className={`cursor-pointer text-white px-8 py-2 rounded-xl border-white min-w-[200px] max-w-[300px] ${selectedCity === item.urlCity
                ? "bg-primary border-primary"
                : "bg-secondary border-secondary"
              }`}
          >
            <i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
            {item.city}
          </span>
        ))}
      </div> */}
      <div className="relative">
        {selectedCity && (
          <iframe
            src={selectedCity}
            width="600"
            title="Geo Location"
            height="500"
            className="w-full"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Map;
