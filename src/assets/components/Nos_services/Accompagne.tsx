

import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function Accompagne(){
    const { t } = useTranslation();
     useEffect(() => {
            document.title = `Premium immobilière | ${t("accompagne.title")}`;
          }, [t]);
  return (
    <>
      <div className="relative w-full h-[15vh] md:h-[50vh]"></div>


    </>
  )
}

