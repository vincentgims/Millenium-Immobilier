
import { useState } from "react";
import { Select, InputNumber, Button} from "antd";

export default function RechercheForm () {
  const [typeBienLocation, setTypeBienLocation] = useState<string>("appartement");
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
      <div className="px-4">
        <form
        className="container border border-[#d6d6d6]  shadow bg-white rounded-xl
        grid lg:grid-cols-6 grid-cols-3 gap-4 p-8! items-end justify-center text-[14px] "
      >
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
      </div>
    );
  }

  function FormSelect({ label, options, value, onChange }: any) {
    return (
      <div className="flex flex-col gap-2 ">
        <label className="font-bold ">{label}</label>
        <Select
          className="w-full!"
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
        <label className="font-bold">Prix maximal</label>
        <InputNumber
          className="w-full! border! border-gray-400!"
          min={0}
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
        <label className="font-bold">Nombre pièces</label>
        <InputNumber
          className="w-full! border! border-gray-400!"
          min={0}
          max={10}
          value={value}
          onChange={onChange}
          formatter={(v) =>
            v !== undefined
              ? `${v} Pièces `.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""
          }
          parser={(v) => (v ? Number(v.replace(/Pièces\s?|(,*)/g, "")) : 0)}
        />
      </div>
    );
  }
 function FormArea({ value, onChange }: any) {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="font-bold">Surface</label>
      <InputNumber
        className="w-full! border! border-gray-400!"
        min={10}
        max={20000}
        value={value}
        onChange={onChange}
        formatter={(v) =>
          v !== undefined
            ? `${v} m²`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            : ""
        }
        parser={(v) =>
          v ? Number(v.replace(/\s?m²/g, "").replace(/\s/g, "")) : 0
        }
      />
    </div>
  );
}

  function ButtonSearch() {
    return (
      <div className="flex">
        <Button
          type="primary"
          className="w-full font-semibold! bg-gray-600! text-white! rounded-2xl! hover:bg-[#ff793f]!"
        >
          Rechercher
        </Button>
      </div>
    );
  }

  return (
    <>
        {/* Bloc Formulaire avec Tabs */}
        <div className="w-full flex absolute lg:bottom-40! bottom-2 justify-center z-1 gap-8">
          <SearchForm
            mode="location"
            typeBien={typeBienLocation}
            setTypeBien={setTypeBienLocation}
          />
        </div>
    </>
  )
}



  