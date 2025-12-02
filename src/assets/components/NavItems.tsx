export interface NavItem {
  id: number;
  key: string;
  label: {
    fr: string;
    en: string;
  };
  path?: string;
  children?: NavItem[];
}

export const items: NavItem[] = [
   {id:1,
    key: "1",
    label: {fr:"Accueil", en:"Home"},
    path: "/"
  },
  {id:2,
    key: "2",
    label: {fr: "Vente", en: "Sale"},
    path:"/vente"
  },
   {id:3,
    key: "3",
    label: {fr: "Location", en: "Renting"},
    path:"/location"
  },
  {id:4,
    key: "4",
    label: {fr:"Nos Services", en:"Our Services"},
    children: [
      {id:5, key: "4-1", label: {fr: "Estimation gratuite", en: "Free Property Valuation"}, path: "/estimation" },
      {id:6, key: "4-2", label: {fr: "Gestion locative", en: "Property Management"}, path: "/gestion_locative" },
      {id:7, key: "4-3", label: {fr: "Accompagnement", en: "Assistance"}, path: "/accompagne" },
      {id:8, key: "4-4", label: {fr: "Conseils immobiliers", en: "Real Estate Advice"}, path: "/conseil" },
    ],
  },
  {id:9,
    key: "5",
    label: {fr:"Notre Agence", en:"Our Agence"},
    children: [
      {id:10, key: "5-1", label: {fr: "L'agence", en: "The Agency"} , path: "/agence" },
      {id:11, key: "5-2", label: {fr: "Notre équipe", en: "Our Team"}, path: "/equipe" },
      {id:12, key: "5-3", label: {fr: "Témoignages clients", en: "Client Testimonials"}, path: "/temoignage" },
    ],
  },
  {id:13,
    key: "6",
    label: {fr:"Contact", en:"Contact"},
    path: "/contact"
  },
];

