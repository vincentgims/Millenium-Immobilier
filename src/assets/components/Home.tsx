import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img_slide1 from "@images/slide1.jpg";
import img_slide2 from "@images/slide2.jpg";
import img_slide3 from "@images/slide3.jpg";

import HeroCarousel from "./HeroCarousel";

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
              <small className="text-[#a4a29e]">Une sélection de propriétés, villas et appartements</small>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
