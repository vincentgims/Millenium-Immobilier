import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {BiLogoFacebook, BiLogoLinkedin, BiLogoWhatsapp} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { BiEnvelope, BiSolidPhone, BiSolidMap } from "react-icons/bi";
import LogoFooter from "@images/logo_agence_footer.png"
export default function Footer() {
  const { t } = useTranslation();
  const anneeActuelle = new Date().getFullYear();
  const contactInfos = [
    {
      icon: (
        <BiSolidMap className="w-8 h-8 mr-4" />
      ),
      text: t("contact.address"),
    },
    {
      icon: (
        <BiEnvelope className="w-8 h-8 mr-4" />
      ),
      text: "contact.millenium@gmail.com",
    },
    {
      icon: (
        <BiSolidPhone className="w-8 h-8 mr-4 -rotate-90" />
      ),
      text: t("contact.phone"),
    },
  ];

  return (
    <div className="bg-transparent">
      <div className="container m-auto px-8 py-4 text-gray-600">
        {/* Bloc Infos */}
        <div className="md:w-2/4 w-full sticky top-0 self-start py-4 md:px-4">
          <img src={LogoFooter} alt="Logo footer de l'agence" className="w-55 object-cover pb-4" />
          {contactInfos.map((info, index) => ( 
            <div 
              key={index}
              className="flex py-2 items-center cursor-pointer"
            >
              {info.icon}
              <span className="font-semibold">
                {info.text}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-[#959299]" />
        <div
          className="flex flex-col-reverse items-center justify-center text-center 
          md:flex-row md:items-center md:justify-between md:text-left py-[15px]"
        >
          <h1 className="font-semibold text-[15px] mt-4 md:mt-0">
            Copyright © 2024 - {anneeActuelle} - Vimmo Immobilière
          </h1>

          <div className="inline-flex">
            <Link to="#" className="mr-[5px]" title="Facebook">
              <BiLogoFacebook className="w-8 h-8 text-[24px] rounded-4xl border border-gray-600 p-[3px]" />
            </Link>
            <Link to="#" className="mr-[5px]" title="Twitter">
              <BsTwitterX className="w-8 h-8 text-[24px] rounded-3xl border border-gray-600 p-[3px]" />
            </Link>
            <Link to="#" className="mr-[5px]" title="Linkedin">
              <BiLogoLinkedin className="w-8 h-8 text-[24px] rounded-3xl border border-gray-600 p-[3px]" />
            </Link>
            <Link to="#" className="mr-[5px]" title="Whatsapp">
              <BiLogoWhatsapp className="w-8 h-8 text-[24px] rounded-3xl border border-gray-600 p-[3px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
