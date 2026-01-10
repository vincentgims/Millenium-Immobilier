import { useState, useEffect } from "react";
import Select from "react-select";
import Drapeau from "@images/Flag_of_France.svg";
import Flag from "@images/Flag_of_USA.png";
import { useTranslation } from "react-i18next";
import { BiEnvelope, BiPlus, BiSolidPhone, BiUser } from "react-icons/bi";
import Logo from "@images/logo_agence.png";
import Logo1 from "@images/logo_agence_bis.png";
import { Link, useLocation } from "react-router-dom";
import { items } from "@components/NavItems";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import { LuEyeClosed,LuMenu} from "react-icons/lu";
import { Drawer, Button, Collapse } from "antd";


interface MenuLabel {
  fr: string;
  en: string;
}

interface MenuItem {
  id: number;
  key: string;
  label: MenuLabel;
  path?: string;
  children?: MenuItem[];
}

export default function Header() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const activeItem = items.find(
  item =>
    item.path &&
    location.pathname.replace(/\/+$/, "").startsWith(item.path)
);

const isHome = activeItem?.id === 1;

const theme = {
  logo: isHome ? Logo1 : Logo,
  textColor: isHome ? "text-black" : "text-white",
  bgColor: isHome ? "bg-gray-600" : "bg-gray-600",
  drawerColor: isHome ? "#000000" : "#ffffff",
};

const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activePanelKey, setActivePanelKey] = useState<string | undefined>(
    undefined
  );

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const closeDrawer = () => setDrawerVisible(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile  = window.innerWidth < 780;
      setIsMobile(mobile);
      if (!mobile) {
        setDrawerVisible(false);
      }
    };
  handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  }, []);

  const lang = i18n.language as "fr" | "en";
  const changeLang = (newLang: "fr" | "en") => {
    i18n.changeLanguage(newLang);
  };


  const languages = [
    { code: "fr", label: "FR", flag: Drapeau },
    { code: "en", label: "EN", flag: Flag },
  ];

  const options = languages.map((lang) => ({
    value: lang.code,
    label: lang.label,
    flag: lang.flag,
  }));

  const formatOptionLabel = ({ label, flag }: any) => (
    <div className="flex items-center gap-1">
      <img src={flag} alt={label} className="w-5 h-4 " />
      {label}
    </div>
  );

  const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    boxShadow: "none",
    borderColor: state.isFocused ? "gray" : "#ccc",
    "&:hover": { borderColor: "gray" },
  }),
};

  
  return (
    <div className={`absolute w-full top-0 left-0 z-50 ${theme.textColor}`}>
      {/* Header top */}
      <div className="h-[65px] flex items-center pt-4">
        <nav className="relative container h-[60px] flex px-8 m-auto items-center justify-between">
          {/* left header */}
          <div className="flex gap-2">
            <a
              href="tel:+26134357816"
              target="_blank"
              rel="Numéro téléphone"
              className="flex items-center mr-2"
            >
              <BiSolidPhone
                className={`w-8 h-8 mr-2 text-[#1289A7] -rotate-90 ${theme.textColor}`}
              />
              <span className="hover:text-[#f0932b] text-[14px] hover:font-semibold">
                +261 34 35 781 61
              </span>
            </a>
            <a href="" className="md:flex hidden items-center mr-2">
              <BiEnvelope
                className={`w-8 h-8 mr-2 text-[#1289A7] ${theme.textColor}`}
              />
              <span className="hover:text-[#f0932b] text-[14px] hover:font-semibold">
                {t("contact.labelEmail")}
              </span>
            </a>
          </div>

          {/* right header */}
          <div className="flex ">
            <a
              href=""
              className={`mr-4 chercher flex justify-center rounded-2xl items-center ${theme.textColor}`}
            >
              <BiPlus className="w-8 h-8 " />
              <span className="text-[14px] font-semibold">
                {t("search.title")}
              </span>
            </a>
            <Select
              value={options.find((o) => o.value === lang)}
              options={options}
              onChange={(selectedOption: any) => {
                if (selectedOption) {
                  changeLang(selectedOption.value);
                }
              }}
              formatOptionLabel={formatOptionLabel}
              className="absolute md:flex hidden mr-2 text-[12px]"
              styles={selectStyles}
            />
            <a href="" className="md:flex hidden items-center">
              <BiUser className={`w-8 h-8 mr-2 ${theme.textColor}`} />
              <span className="hover:text-[#f0932b] text-[14px] hover:font-semibold">
                {t("compte.title")}
              </span>
            </a>
          </div>
          {/* Bouton drawer mobile */}
          <div className="md:hidden">
            <Button 
              type="text"
              onClick={toggleDrawer}
              icon={
                drawerVisible ? (
                  <LuEyeClosed
                    style={{ fontSize: 22, color: theme.drawerColor }}
                    className="w-8 h-8 justify-center"
                  />
                ) : (
                  <LuMenu
                    style={{ fontSize: 22, color: theme.drawerColor }}
                    className="w-8 h-8"
                  />
                )
              }
            />
          </div>
        </nav>
      </div>
      {/* Logo */}
      <div className="container px-8 mx-auto justify-center flex">
        <a href="/">
          <img
            src={theme.logo}
            alt="Agence immobilière Vimmo"
            className="h-auto w-[300px] sm:w-full my-6 cursor-pointer object-contain"
          />
        </a>
      </div>
      {/* Menu desktop */}
      <div className="relative hidden md:flex justify-center">
        {items.map((item, index) => {
          const hasChildren = item.children && item.children.length > 0;
          const isParentActive = (item: MenuItem): boolean => {
            if (item.path && location.pathname.startsWith(item.path))
              return true;

            if (item.children) {
              return item.children.some(
                (child: MenuItem) =>
                  child.path && location.pathname.startsWith(child.path)
              );
            }

            return false;
          };
          const isChildActive = (child: MenuItem): boolean => {
            return child.path
              ? location.pathname.startsWith(child.path)
              : false;
          };

          const submenuTextColor = (child: MenuItem) => {
            if (activeItem?.id != 1) return "text-black! hover:text-[#ff793f]!";
            return isChildActive(child)
              ? "text-[#ff793f]" // actif
              : "text-black hover:text-[#ff793f]";
          };

          return (
            <div key={item.key} className="flex items-center relative group">
              {hasChildren ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="relative"
                >
                  <div className="flex items-center text-sm uppercase py-1 font-semibold cursor-pointer">
                    <Link
                      className={`${
                        isParentActive(item)
                          ? "text-[#ff793f]"
                          : "hover:text-[#ff793f]"
                      }`}
                      to={item.path ?? "#"}
                    >
                      {item.label[lang]}
                    </Link>
                    <motion.div
                      className="ml-2 mb-0.5"
                      animate={{
                        rotate: openDropdown === item.key ? -180 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <AiFillCaretDown className="w-2 h-2" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openDropdown === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute w-max min-w-40 -right-4 z-50 p-4"
                      >
                        <div className="pl-4 border! border-gray-400! space-y-1 bg-white rounded-xl py-3 z-1000">
                          {item.children?.map((child) => (
                            <Link
                              key={child.key}
                              to={child.path || "#"}
                              onClick={() => setOpenDropdown(null)}
                              className={`block text-sm py-0.5 ${submenuTextColor(
                                child
                              )}`}
                            >
                              {child.label[lang]}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={item.path || "#"}
                  className={`flex items-center uppercase py-8 text-sm font-bold cursor-pointer ${
                    location.pathname === item.path
                      ? "text-[#ff793f]"
                      : "hover:text-[#ff793f]"
                  }`}
                >
                  {item.label[lang]}
                </Link>
              )}

              {index < items.length - 1 && <div className="w-px h-6 mx-4" />}
            </div>
          );
        })}
      </div>
      {/* Drawer mobile */}
      {isMobile && (
        <Drawer
          placement="top"
          onClose={closeDrawer}
          open={drawerVisible}
          mask={true}
          maskClosable={true}
          zIndex={1000}
          styles={{ header: { display: "none" } }}
          height="100%"
          className="md:hidden bg-white"
        >
          <div className="space-y-4">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              return hasChildren ? (
                <Collapse
                  key={item.key}
                  bordered={false}
                  ghost
                  expandIconPosition="end"
                  activeKey={activePanelKey}
                  onChange={(key) => {
                    const newKey = Array.isArray(key) ? key[0] : key;
                    setActivePanelKey(
                      activePanelKey === newKey ? undefined : newKey
                    );
                  }}
                  expandIcon={({ isActive }) => (
                    <motion.div
                      className="ml-2 mb-0.5"
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <AiFillCaretDown className="w-3 h-3 text-black" />
                    </motion.div>
                  )}
                  items={[
                    {
                      key: item.key,
                      label: (
                        <span className="text-black! hover:text-[#f0932b]! text-sm uppercase font-semibold transition-colors duration-200">
                          {item.label[lang]}
                        </span>
                      ),
                      children: (
                        <>
                          {item.children?.map((child) => (
                            <Link
                              key={child.key}
                              to={child.path || "#"}
                              onClick={closeDrawer}
                              className="block ml-4 text-gray-500! font-semibold uppercase hover:text-[#f0932b]!"
                            >
                              {child.label[lang]}
                            </Link>
                          ))}
                        </>
                      ),
                    },
                  ]}
                />
              ) : (
                <Link
                  key={item.key}
                  to={item.path || "#"}
                  onClick={closeDrawer}
                  className="block px-4 py-2 mb-1 rounded-md text-black! text-sm uppercase font-semibold hover:text-[#f0932b]! hover:bg-gray-100!"
                >
                  {item.label[lang]}
                </Link>
              );
            })}
          </div>
        </Drawer>
      )}
      <div className="w-50! m-auto px-8 "></div>
    </div>
  );
}
