
import { BiEnvelope, BiSolidPhone, BiSolidMap } from "react-icons/bi";
import { Input, Button } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const { TextArea } = Input;
export default function Contact () {
const { t } = useTranslation();

  useEffect(() => {
    document.title = `Premium immobilière | ${t("contact.title")}`;
  }, [t]);

  const contactInfos = [
    {
      icon: (
        <BiSolidMap className="w-8 h-8 mr-6 text-[#1289A7] hover:text-[#f0932b]" />
      ),
      text: t("contact.address"),
    },
    {
      icon: (
        <BiEnvelope className="w-8 h-8 mr-6 text-[#1289A7] hover:text-[#f0932b]" />
      ),
      text: "contact.millenium@gmail.com",
    },
    {
      icon: (
        <BiSolidPhone className="w-8 h-8 mr-6 text-[#1289A7] hover:text-[#f0932b] -rotate-90" />
      ),
      text: t("contact.phone"),
    },
  ];
  return (
    <>
      <div className="relative w-full h-[15vh] md:h-[50vh]"></div>
      <div className="w-full overflow-hidden bg-[#374151]">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="">
      
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* Bloc Infos */}
            <div className="md:w-2/4 w-full sticky top-0 self-start">
              {contactInfos.map((info, index) => (
                <div
                  key={index}
                  className="flex p-[15px] items-center cursor-pointer"
                >
                  {info.icon}
                  <span className="font-semibold text-[#ffffff] hover:text-[#f0932b]">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Bloc Formulaire */}
            <div className="md:w-2/4 w-full space-y-6">
              <form action="">
                <div className="flex flex-col lg:flex-row gap-[25px] py-[25px] px-6 md:px-0">
                  <Input
                    placeholder={t("contact.form.name")}
                    name="nom"
                    className="h-10 focus:ring-1! focus:ring-white! border! border-white!"
                  />
                  <Input
                    placeholder={t("contact.form.email")}
                    name="email"
                    className="h-10 focus:ring-1! focus:ring-white! border! border-white!"
                  />
                </div>
                <div className="pb-[25px] px-6 md:px-0">
                  <Input
                    placeholder={t("contact.form.subject")}
                    name="objet"
                    className="h-10 focus:ring-1! focus:ring-white! border! border-white!"
                  />
                </div>
                <div className="pb-[25px] px-6 md:px-0">
                  <TextArea
                    placeholder={t("contact.form.message")}
                    name="message"
                    className="h-16! focus:ring-1! focus:ring-white! border! border-white!"
                  />
                </div>
                <div className="px-6 md:px-0">
                  <Button
                    type="primary"
                    className="w-full h-10! font-semibold! bg-[#1289A7]! text-white! border-none! hover:bg-[#ff793f]!"
                  >
                    {t("contact.form.send")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}