import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Select, InputNumber, Button, Pagination } from "antd";
import { useTranslation } from "react-i18next";
import HeroCarousel from "./HeroCarousel";
import { infos_immo, slideHero, Services } from "@components/NavItems";
import { FaBed, FaBath, FaHeart, FaRegHeart } from "react-icons/fa";
import { GiHotSurface } from "react-icons/gi";
import { BiSolidCarGarage } from "react-icons/bi";
import BienCarousel from "@components/BienCarousel";

export default function Home() {
  const { t } = useTranslation();
  const [typeBienLocation, setTypeBienLocation] =
    useState<string>("appartement");

  const OPTIONS_TYPE = [
    { value: "appartement", label: "Appartement" },
    { value: "maison", label: "Maison" },
    { value: "immeuble", label: "Immeuble" },
    { value: "locaux", label: "Locaux commerciaux" },
    { value: "terrain", label: "Terrain" },
  ];

  const OPTIONS_LOC = [
    { value: "mangily", label: "Mangily" },
    { value: "toliara", label: "Toliara" },
    { value: "morombe", label: "Morombe" },
    { value: "ankazoabo", label: "Ankazoabo" },
    { value: "sakaraha", label: "Sakaraha" },
  ];

  type SearchFormProps = {
    typeBien: string;
    setTypeBien: (v: string) => void;
    mode: "location" | "vente";
  };

  function SearchForm({ typeBien, setTypeBien, mode }: SearchFormProps) {
    const [price, setPrice] = useState<number>();
    const [rooms, setRooms] = useState<number>();
    const [area, setArea] = useState<number>();
    const [localisation, setLocalisation] = useState<string>("mangily");

    return (
      <form className=" border  border-[#d6d6d6] shadow p-6 bg-white flex gap-4 items-end">
        <FormSelect
          label="Localisation"
          options={OPTIONS_LOC}
          value={localisation}
          onChange={setLocalisation}
        />

        <FormSelect
          label="Type de bien"
          options={OPTIONS_TYPE}
          value={typeBien}
          onChange={setTypeBien}
        />

        <FormPrice value={price} onChange={setPrice} />

        {mode === "location" && typeBien !== "terrain" && (
          <FormRooms value={rooms} onChange={setRooms} />
        )}
        <FormArea value={area} onChange={setArea} />
        <ButtonSearch />
      </form>
    );
  }

  function FormSelect({ label, options, value, onChange }: any) {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold ">{label}</label>
        <Select
          className="w-40! border! border-white!"
          value={value}
          options={options}
          onChange={onChange}
        />
      </div>
    );
  }

  function FormPrice({ value, onChange }: any) {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">Prix</label>
        <InputNumber
          className="w-30! border! border-gray-400!"
          min={0}
          step={1000}
          value={value}
          onChange={onChange}
          formatter={(v) =>
            v !== undefined
              ? `€ ${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""
          }
          parser={(v) => (v ? Number(v.replace(/€\s?|(,*)/g, "")) : 0)}
        />
      </div>
    );
  }

  function FormRooms({ value, onChange }: any) {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">Nombre de pièces</label>
        <InputNumber
          className="w-40! border! border-gray-400!"
          min={0}
          max={20}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  function FormArea({ value, onChange }: any) {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">Surface</label>
        <InputNumber
          className="w-30! border! border-gray-400!"
          min={20}
          max={20000}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  function ButtonSearch() {
    return (
      <div className="flex ">
        <Button
          type="primary"
          className="w-40! font-semibold! bg-gray-600! text-white! rounded-2xl! hover:bg-[#ff793f]!"
        >
          Rechercher
        </Button>
      </div>
    );
  }

  useEffect(() => {
    document.title = `Premium Immobilier | ${t("accueil.title")}`;
  }, [t]);

  return (
    <>
      {/* Bloc Formulaire avec Tabs */}
      <div className="absolute bottom-5 w-full flex justify-center z-1000">
        <SearchForm
          mode="location"
          typeBien={typeBienLocation}
          setTypeBien={setTypeBienLocation}
        />
      </div>
      {/* slide de Vimmo */}
      <HeroCarousel slides={slideHero} />

      {/*  de Vimmo */}
      <div className="w-full overflow-x-hidden bg-transparent">
        <div className="container px-8 md:px-0 pb-6 pt-15 m-auto">
          <div className="my-4">
            <h1 className="text-[#515252] text-center font-medium text-[30px] md:px-0 py-5 px-8">
              Nouveaux biens
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {infos_immo.map((item) => (
              <Card
                className=" relative w-[95%] md: sm:w-[80%] md:w-[30%] shadow bg-white border border-[#d6d6d6]! transition-all duration-300"
                key={item.id}
              >
                <Link to={`detail/${item.id}`} className="flex flex-col h-full">
                  <BienCarousel
                    slides={item.images.map((img) => ({
                      image: img.src,
                      title: item.type,
                    }))}
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-800 text-white font-semibold px-2 py-1 rounded ">
                    A la une
                  </span>
                  <div className="absolute top-4 right-4 rounded-4xl bg-gray-600 hover:bg-gray-800 p-2 cursor-pointer group">
                    <FaRegHeart className="w-5 h-5 text-gray-300 group-hover:hidden" />
                    <FaHeart className="w-5 h-5 text-white hidden group-hover:block" />
                  </div>
                  <div className="p-6 text-left inline-grid">
                    <span className="capitalize text-[16px] text-[#1D1D1B] font-semibold">
                      {item.type}
                    </span>
                    <span className="text-[#1D1D1B] text-[18px] font-semibold ">
                      {item.infos_pratique.prix}
                    </span>
                    <span className="text-gray-600 text-[16px] font-semibold ">
                      {item.specific.description}
                    </span>
                    <div className="my-3 grid grid-cols-2 gap-4">
                      <div className="">
                        <div className="flex items-center">
                          <FaBed
                            className="w-5 h-5 text-[#444444] "
                            title="Chambres"
                          />
                          <span className="px-2 text-[16px] font-bold text-[#2D2B31]">
                            {item.specific.chambre}
                          </span>
                          <span className="text-[#2D2B31] text-[12px]">
                            chambres
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex items-center">
                          <FaBath
                            className="w-5 h-5 text-[#444444]"
                            title="Salle de bains"
                          />
                          <span className="px-2 text-[16px] font-bold text-[#2D2B31]">
                            {item.specific.bain}
                          </span>
                          <span className="text-[#2D2B31] text-[12px]">
                            salles de bain
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <GiHotSurface
                          className="w-5 h-5 text-[#444444]"
                          title="Surface"
                        />
                        <span className="px-2 text-[16px] font-bold text-[#2D2B31]">
                          {item.specific.surface_terrain}
                        </span>
                        <span className="text-[#2D2B31] text-[12px]">
                          m<sup>2</sup>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BiSolidCarGarage
                          className="w-5 h-5 text-[#444444]"
                          title="Surface"
                        />
                        <span className="px-2 text-[16px] font-bold text-[#2D2B31]">
                          {item.specific.garage}
                        </span>
                        <span className="text-[#2D2B31] text-[12px]">
                          garages
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
            <div className="mt-2">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
          <div className="my-4 ">
            <h1 className="relative text-center py-8 justify-center items-center">
              <small className="absolute md:top-4.5 top-8 left-1/2 transform -translate-x-1/2 text-[#212529] md:text-[30px] text-[20px] font-bold z-10 bg-white px-2">
                Votre guide immobilier
              </small>
              <span className="block border-b border-[#515252] w-80 md:w-200 m-auto mt-4"></span>
            </h1>
            <div className="flex flex-wrap justify-center py-6 gap-8">
              {Services.map((item) => (
                <Card
                  className=" relative w-[90%] sm:w-[80%] md:w-[22%] shadow bg-white border border-[#d6d6d6]! transition-all duration-300"
                  key={item.id}
                >
                  <img src={item.image} className="w-full object-cover" />
                  <div className="p-6 text-left inline-grid">
                    <div className="block">
                      <h1 className="pb-4 text-xl text-gray-600 font-bold">
                        {item.name}
                      </h1>
                      <p className="pb-4">{item.description}</p>
                    </div>
                    <Button
                      type="primary"
                      className="w-30! h-8! font-semibold! bg-gray-600! text-white! rounded-2xl! hover:bg-[#ff793f]!"
                    >
                      Découvrir
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
