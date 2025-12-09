import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';
import { useTranslation } from "react-i18next";
import img_slide1 from "@images/slide1.jpg";
import img_slide2 from "@images/slide2.jpg";
import img_slide3 from "@images/slide3.jpg";
import HeroCarousel from "./HeroCarousel";
import { infos_immo } from "@components/NavItems"
import { FaBed, FaBath } from "react-icons/fa";
import { GiHotSurface } from "react-icons/gi";

type Slide = {
  image: string;
  title: string;
};
type HeroProps = {
  title?: string;
  slides?: Slide[];
};

export default function Home({ }: HeroProps) {
  const { t } = useTranslation();
  const slides = [
    { image: img_slide1, title: t("home.slide1") },
    { image: img_slide2, title: t("home.slide2") },
    { image: img_slide3, title: t("home.slide3") },

  ];

  useEffect(() => {
    document.title = `Premium Immobilier | ${t("accueil.title")}`;
  }, [t]);
  return (
    <>
      {/* slide de Vimmo */}
      <HeroCarousel slides={slides} />
      {/*  de Vimmo */}
      <div className="w-full overflow-x-hidden bg-transparent">
        <div className="container px-4 md:px-8 py-6 mx-auto">
          <div className="my-4">
            <h1 className="text-[#515252] text-center font-medium text-[30px] md:px-0 py-5 px-8">
              Nous vous proposons <br />
              <small className="text-[#a4a29e]">
                Une sélection de propriétés, villas et appartements
              </small>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {infos_immo.map((item) => (
              <Card
                className=" flex flex-col max-w-[450px] w-full md:basis-[30%] shadow bg-white border border-[#d6d6d6]! transition-all duration-300"
                key={item.id}
              >
                <Link
                  to={`detail/${item.id}`}
                  className="flex flex-col h-full gap-2 "
                >
                  <img
                    src={item.images[0].src}
                    alt="Bien immobilier"
                    className="w-full object-cover"
                  />
                  <div className="px-8 text-left inline-grid">
                    <span className="capitalize text-[16px] text-[#1D1D1B] font-semibold">
                      {item.type}
                    </span>
                    <span className="text-[#1D1D1B] text-[18px] font-semibold ">
                      {item.infos_pratique.prix}
                    </span>
                    <span className="text-gray-600 text-[16px] font-semibold ">
                      {item.specific.description}
                    </span>
                    <div className="flex my-3">
                      <div className="pr-8">
                        <div className="flex">
                          <FaBed className="w-5 h-5 text-[#444444] " title="Chambres" />
                          <span className="pl-2 text-[#1A1A1A]">{item.specific.chambre}</span>
                        </div>
                        <span className="text-[#1A1A1A]">Chambres</span>
                      </div>
                      <div className="pr-8">
                         <div className="flex">
                        <FaBath className="w-5 h-5 text-[#444444]" title="Salle de bains" />
                        <span className="pl-2 text-[#1A1A1A]">{item.specific.bain}</span>
                        </div>
                        <span className="text-[#1A1A1A]">Salle de bains</span>
                      </div>
                      <div className="">
                        <div className="flex">
                        <GiHotSurface className="w-5 h-5 text-[#444444]" title="Surface" />
                        <span className="pl-2 text-[#1A1A1A]">400 m<sup>2</sup></span> 
                        </div>
                        <span className="text-[#1A1A1A]">Surface</span> 
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
