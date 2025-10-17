import { useState } from "react";
import Form from "../contact/Form";
import type { RootObject } from "../../interfaces/dbData";
import MenuMobile from "../headerComponents/MenuMobile";
import Menu from "../headerComponents/Menu";

interface MenuToggleProps {
  data: RootObject;
}

const MenuToggle = ({ data }: MenuToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Botón para abrir/cerrar el panel */}
      <div
        className="flex items-center gap-2 cursor-pointer text-white px-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: data.colors.secondaryColor,
        }}
      >
        <i className="fa-solid fa-bars text-2xl cursor-pointer p-2 rounded-md" aria-hidden={true}></i>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Panel lateral */}
      <div
        className={`z-50 fixed top-0 left-[0%] md:w-[30%] w-[90%] h-full bg-white shadow-md transform transition-transform duration-500 ease-in-out overflow-y-scroll content_scroll ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Contenido del panel */}
        <div className="px-4 py-6 text-center">
          <i
            className="fas fa-times text-3xl cursor-pointer text-white p-2 rounded-md absolute top-2 left-2"
            style={{ backgroundColor: data.colors.secondaryColor }}
            onClick={() => setIsOpen(false)}
            aria-hidden={true}
          ></i>

          <img
            src={data.logos.secondary}
            alt="logo"
            className="w-[260px] mx-auto"
          />
          <Menu data={data} />
          {
            data.redesSociales.length > 0 && (
              <div className="flex justify-start gap-4 mt-4 p-5">
                {data.redesSociales.map((item, index) => {
                  return (
                    <a
                      href={item.link}
                      target="_blank"
                      aria-label={item.name}
                      key={index}
                      className="w-10 h-10 flex justify-center items-center rounded-full bg-secondary text-white"
                    >
                      <i className={`fa-brands fa-${item.icon}`} />
                    </a>
                  )
                })}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MenuToggle;
