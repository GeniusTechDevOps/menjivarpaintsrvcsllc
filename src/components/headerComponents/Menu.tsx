import React, { useState } from "react";

interface SubMenuProps {
  clickEvent?: () => void;
  styleForSubMenu?: string;
  colorText?: string;
  styleList?: string;
  data: any;
}

interface Route {
  name: string;
  path: string;
  icon?: string;
  child?: boolean;
  submenu?: string;
  statusRoutes?: boolean;
  subitems?: any;
}

export default function Menu({
  clickEvent,
  styleForSubMenu,
  colorText,
  styleList,
  data,
}: SubMenuProps) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const serviceCategories = [
    {
      category: "Services",
      path: "/services",
      services: data?.services?.map((service: any) => service.title),
      subMenu: "subMenuServices",
      child: data?.widgets?.landingServices,
    },
    {
      category: "Portfolio",
      path: "/portfolio",
      services: data?.landingsGallery?.map(
        (product: any) => product.nameLanding
      ),
      subMenu: "subMenuGallery",
      child: data?.widgets?.landingGallery,
    },
  ];

  const routes: Route[] = [
    {
      name: "Home",
      path: "/",
      icon: "home",
    },
    {
      name: "About Us",
      path: "/about",
      icon: "About",
    },
    ...serviceCategories.map((category) => ({
      name: category.category,
      path: category.path,
      icon: category.category + "Icon",
      child: category.child,
      subitems: category.services,
      submenu: category.subMenu,
    })),
    {
      name: "Reviews",
      path: "/reviews",
      icon: "Reviews",
      statusRoutes: data?.reviews?.stateReviews && data.reviews?.viewAll,
    },
    {
      name: "Videos",
      path: "/videos",
      icon: "Videos",
      statusRoutes: data?.widgets?.landingVideos && data.videos?.landingVideos,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "Contact",
    },
  ];

  return (
    <div className={`flex flex-col md:flex-row md:gap-6 gap-[24px] ${styleList}`}>
      {routes.map((item, index) => {
        if (item.statusRoutes === undefined || item.statusRoutes === true) {
          return (
            <div
              key={index}
              className={`relative content_subItems z-50 md:border-none border-b-2 border-white md:w-auto w-[200px] py-2 ${colorText}`}
              onMouseEnter={() => setActiveSubMenu(item.submenu || null)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              {item.child ? (
                <>
                  <span
                    className={`font-medium text-[17px] cursor-pointer flex items-center ${styleForSubMenu}`}
                    onMouseOver={goToTop}
                  >
                    <span>{item.name}</span>
                    <i className="fas fa-chevron-down ml-2"></i>
                  </span>
                  {activeSubMenu === item.submenu && (
                    <div
                      className={`submenu-container bg-white md:absolute z-[99] rounded-md top-8 relative text-black md:text-[16px] text-[16px] shadow-lg md:my-0 gap-2 md:w-[300px] h-[450px] overflow-y-scroll`}
                      onClick={clickEvent}
                    >
                      {item.submenu === "subMenuServices" &&
                        item.subitems.map((subitem: any, subIndex: any) => (
                          <a
                            key={subIndex}
                            href={`/services/${subitem
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            className="group font-semibold flex items-center rounded-md py-3 px-4 transition duration-300 transform hover:bg-white hover:text-black"
                          >
                            <span className="mr-2 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-secondary"></span>
                            {subitem}
                          </a>
                        ))}

                      {item.submenu === "subMenuGallery" &&
                        item.subitems.map((subitem: any, subIndex: any) => (
                          <div
                            key={subIndex}
                            className="group mr-4 flex items-center rounded-md py-2 transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black font-semibold"
                          >
                            <span className="mr-2 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-secondary"></span>
                            <a
                              href={`/portfolio/${subitem
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                            >
                              {subitem}
                            </a>
                          </div>
                        ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.path} onClick={clickEvent}>
                  <span
                    className="font-medium text-[17px] md:px-4 md:cursor-pointer md:rounded-full md:transition-all md:duration-500 md:ease-in-out"
                  >
                    {item.name}
                  </span>
                </a>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
