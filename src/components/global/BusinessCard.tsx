import { useState } from "react";
import type { RootObject } from "../../interfaces/dbData";
import { motion, type Variants, AnimatePresence } from "framer-motion";

interface BusinessCardProps {
    data: RootObject;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ data }) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [sendInput, setSendInput] = useState("");
    const [active, setActive] = useState(false);

    const handleImageFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    const sendWhatsapp = () => {
        const relmsg = sendInput.replace(/ /g, "%20");
        const phone = data.dataGeneral.phones[0].number
          .replace("-", "")
          .replace("-", "");
    
        window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
        setSendInput("");
        setActive(false);
      };
    return (
        <section className="w-full h-auto py-10">
            {/* <div className="relative bottom-0 left-0 right-0 flex justify-center items-center p-2">

                <motion.button
                    className=" bg-secondary rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 p-3 text-white font-bold"
                    onClick={() => handleImageFlip()}
                    whileHover={{ scale: 1.05 }}
                    title="ver imagen"
                >
                    {isFlipped ? "Front" : "Back"}

                </motion.button>
            </div> */}
            <div>
                {
                    isFlipped ? (
                        <motion.div
                            className="w-full md:w-[660px] h-auto md:h-[360px] border mx-auto relative bg-primary overflow-hidden rounded-lg flex flex-col md:flex-row justify-center items-center py-5 pl-3"
                            initial={{ opacity: 0, rotateY: isFlipped ? 180 : 0, scaleX: isFlipped ? 1 : -1 }}
                            animate={{ opacity: 1, rotateY: isFlipped ? 0 : 180 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-[500px] h-[400px] absolute bg-tertiary left-20 md:left-44 -top-20 rounded-l-full "></div>
                            <div className="w-[500px] h-[400px] absolute bg-secondary left-20 md:left-44 -bottom-20 rounded-l-full "></div>
                            <div className="w-[500px] h-[500px] absolute bg-white left-28 md:left-56 -top-20 rounded-l-full z-10"></div>
                            <div className="w-full md:w-2/5 h-full flex flex-col justify-center items-start relative z-20">
                                <div className="w-full h-[400px] rounded-2xl">
                                    <img src={data.logos.secondary} alt="logo" className="object-contain w-11/12 h-full -scale-x-100" />
                                </div>
                                <div className="w-3/5 p-1 bg-white rounded-3xl text-base text-primary -scale-x-100 text-center">
                                    <button onClick={() => sendWhatsapp()}>

                                        <span className="text-base font-semibold"><i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp</span>
                                    </button>
                                </div>

                            </div>
                            <div className="w-full md:w-3/5 h-full flex flex-col justify-start items-start relative z-20 -scale-x-100 px-5 py-3">
                                <h2 className="text-lg md:text-2xl font-black text-white md:text-primary text-end px-2 py-2">
                                    Our Services:
                                </h2>
                                {
                                    data.services.slice(0, 7).map((service, index) => (
                                        <a href={`tel:+1${data.dataGeneral.phones[0].number}`} className=" flex justify-center items-center gap-1 text-white md:text-black mb-2 ml-4 hover:scale-105 transition-all duration-300 hover:text-primary" key={index}>
                                            <i className={`fa-solid fa-chevron-right text-base`}></i>
                                            <p key={index} className="text-base font-semibold text-start px-2 py-1">
                                                {service.title}
                                            </p>
                                        </a>
                                    ))
                                }
                            </div>
                        </motion.div>
                    )
                        : (
                            <motion.div
                                className="w-full md:w-[660px] h-auto md:h-[360px] border mx-auto relative bg-primary overflow-hidden rounded-lg flex flex-col md:flex-row justify-center items-center py-5 pl-3"
                                initial={{ opacity: 0, rotateY: isFlipped ? 180 : 0, scaleX: isFlipped ? 1 : -1 }}
                                animate={{ opacity: 1, rotateY: isFlipped ? 0 : 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-[500px] h-[400px] absolute bg-tertiary left-20 md:left-32 -top-20 rounded-l-full "></div>
                                <div className="w-[500px] h-[400px] absolute bg-secondary left-20 md:left-32 -bottom-20 rounded-l-full "></div>
                                <div className="w-[500px] h-[500px] absolute bg-white left-28 md:left-44 -top-48 md:-top-20 rounded-l-full hidden md:block z-10"></div>
                                <div className="w-full md:w-2/5 h-full flex flex-col justify-start items-start relative z-20">
                                    <div className="w-full md:w-11/12 h-[240px] md:h-[180px] rounded-2xl">
                                        <img src={data.logos.secondary} alt="logo" className="object-contain w-11/12 h-full" />
                                    </div>
                                    <div className="w-full h-full flex justify-center md:justify-start items-center px-2">
                                        <div className={`flex md:grid ${data.redesSociales.length > 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                                            {
                                                data.redesSociales.map((red, index) => (
                                                    <a
                                                        key={index}
                                                        href={red.link}
                                                        target="_blank"
                                                        aria-label={red.name}
                                                        className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-white border-white border-2"
                                                    >
                                                        <i className={`fa-brands fa-${red.icon}`} />
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5 h-full flex flex-col justify-start items-start md:items-end relative z-20 ">
                                    <h2 className="text-lg md:text-2xl font-black text-white md:text-primary text-end px-2 py-2">
                                        {data.name}
                                    </h2>
                                    <p className="text-base font-semibold hidden md:block text-black">Owner: <span className="text-base font-semibold p-1.5 rounded-l-full bg-primary text-white">{data.nameCustomers}</span></p>
                                    <span className="text-base font-semibold p-1.5 rounded-r-full md:rounded-r-none rounded-l-full bg-primary border text-white block md:hidden">{data.nameCustomers}</span>

                                    <div className="py-6 px-2 md:px-5 flex flex-col justify-center items-end gap-1">
                                        <div className="flex flex-row-reverse md:flex-row justify-center items-center gap-2 text-white md:text-black">
                                            <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full bg-primary text-white border-white border-2">
                                                <i className="fa-light fa-map text-base md:text-lg"></i>
                                            </div>
                                            <div>
                                                <p
                                                    className=" hover:transform font-semibold hover:scale-110 transition-all duration-300 ease-in-out text-sm md:text-base text-end"
                                                >
                                                    {data.businessAddress}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row-reverse md:flex-row  justify-center items-center gap-2 text-white md:text-black">
                                            <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full bg-primary text-white border-white border-2">
                                                <i className="fa-light fa-globe text-base md:text-lg"></i>
                                            </div>
                                            <div>
                                                <a href="/" target="_blank" aria-label="website">
                                                    <p
                                                        className=" hover:transform font-semibold hover:scale-110 transition-all duration-300 ease-in-out text-sm md:text-base text-end"
                                                    >
                                                        {data.domain}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex flex-row-reverse md:flex-row  justify-center items-center gap-2 text-white md:text-black">
                                            <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full bg-primary text-white border-white border-2">
                                                <i className="fa-light fa-envelope text-lg"></i>
                                            </div>
                                            <div>
                                                {
                                                    data.dataGeneral.emails.slice(0, 2).map((phone, index) => (
                                                        <a key={index} href={`tel:+1${phone.email}`}>
                                                            <p
                                                                className=" hover:transform font-semibold hover:scale-110 transition-all duration-300 ease-in-out text-sm md:text-base text-end"
                                                            >
                                                                {phone.email}
                                                            </p>
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row-reverse md:flex-row  justify-center items-center gap-2 text-white md:text-black">
                                            <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full bg-primary text-white border-white border-2">
                                                <i className="fa-light fa-phone text-lg"></i>
                                            </div>
                                            <div>
                                                {
                                                    data.dataGeneral.phones.slice(0, 2).map((phone, index) => (
                                                        <a key={index} href={`tel:+1${phone.number}`}>
                                                            <p
                                                                className=" hover:transform font-semibold hover:scale-110 transition-all duration-300 ease-in-out text-sm md:text-base text-end"
                                                            >
                                                                {phone.number}
                                                            </p>
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                }
            </div>
        </section>
    );
}

export default BusinessCard;