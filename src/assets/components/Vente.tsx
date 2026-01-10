import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import RechercheForm from "@components/RechercheForm";


export default function Vente() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `Premium immobilière | ${t("vente.title")}`;
  }, [t]);
  return (
    <>
      <div className="relative  w-full max-h-[650px] aspect-video">
          <RechercheForm />
      </div>
    </>
  );
}

