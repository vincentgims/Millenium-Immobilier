import { Link } from "react-router-dom";
import {BiLogoFacebook, BiLogoLinkedin, BiLogoWhatsapp} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <div className="bg-[#374151]">
      <div className="container m-auto px-8 py-6 text-[#ffffff]  ">
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
              <BiLogoFacebook className="w-8 h-8 text-[24px] rounded-3xl border border-[#ffffff] p-[3px] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]" />
            </Link>
            <Link to="#" className="mr-[5px]" title="Twitter">
              <BsTwitterX className="w-8 h-8 text-[24px] rounded-3xl border border-[#ffffff] p-[3px] hover:text-neutral-950 hover:bg-white hover:border-white" />
            </Link>
            <Link to="#" className="mr-[5px]" title="Linkedin">
              <BiLogoLinkedin className="w-8 h-8 text-[24px] rounded-3xl border border-[#ffffff] p-[3px] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]" />
            </Link>
            <Link to="#" className="mr-[5px]" title="Whatsapp">
              <BiLogoWhatsapp className="w-8 h-8 text-[24px] rounded-3xl border border-[#ffffff] p-[3px] hover:text-white hover:bg-[#25D366] hover:border-[#25D366]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
