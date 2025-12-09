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

import photo1 from "@images/imagesCard/6908c2255ea89-photo-moyenne.webp";
import photo2 from "@images/imagesCard/6908c2256b8ed-photo-hd.webp";

export const infos_immo = [
  {
    id: 1,
    type: "A louer, Appartement",

    specific: {
      chambre: 6,
      bain: 4,
      terrasse: 2,
      parking: 5,
      garage: 2,
      description: "Appartement de 3645m² a louer à Barcelone",
      surface_terrain: 3645,
      surface_sejour: 50,
      etat_interieur: "A rafraichir",
      etat_exterieur: "Bon",
      vue: "Panoramique",
      chauffage: "fuel",
      eau_chaude: "Electrique",
    },

    prestation: {
      piscine: 2,
      climatisation: 2,
      chemine: 1,
      vitre: "double vitrage",
      buanderie: 1,
    },

    images: [
      { src: photo1 },
      { src: photo2 }
    ],

    infos_pratique: {
      prix: "50 000 €",
    },
  },
  {
    id: 2,
    type: "Vente",

    specific: {
      chambre: 3,
      bain: 3,
      terrasse: 2,
      parking: 5,
      garage: 2,
      description: "description",
      surface_terrain: 3645,
      surface_sejour: 50,
      etat_interieur: "A rafraichir",
      etat_exterieur: "Bon",
      vue: "Panoramique",
      chauffage: "fuel",
      eau_chaude: "Electrique",
    },

    prestation: {
      piscine: 2,
      climatisation: 2,
      chemine: 1,
      vitre: "double vitrage",
      buanderie: 1,
    },

    images: [
      { src: photo1 },
      { src: photo2 }
    ],

    infos_pratique: {
      prix: "50 000 €",
    },
  },
  {
    id: 3,
    type: "Vente",

    specific: {
      chambre: 2,
      bain: 2,
      terrasse: 2,
      parking: 5,
      garage: 2,
      description: "description",
      surface_terrain: 3645,
      surface_sejour: 50,
      etat_interieur: "A rafraichir",
      etat_exterieur: "Bon",
      vue: "Panoramique",
      chauffage: "fuel",
      eau_chaude: "Electrique",
    },

    prestation: {
      piscine: 2,
      climatisation: 2,
      chemine: 1,
      vitre: "double vitrage",
      buanderie: 1,
    },

    images: [
      { src: photo1 },
      { src: photo2 }
    ],

    infos_pratique: {
      prix: "50 000 €",
    },
  },
  {
    id: 4,
    type: "Vente",

    specific: {
      chambre: 5,
      bain: 4,
      terrasse: 2,
      parking: 5,
      garage: 2,
      description: "description",
      surface_terrain: 3645,
      surface_sejour: 50,
      etat_interieur: "A rafraichir",
      etat_exterieur: "Bon",
      vue: "Panoramique",
      chauffage: "fuel",
      eau_chaude: "Electrique",
    },

    prestation: {
      piscine: 2,
      climatisation: 2,
      chemine: 1,
      vitre: "double vitrage",
      buanderie: 1,
    },

    images: [
      { src: photo1 },
      { src: photo2 }
    ],

    infos_pratique: {
      prix: "50 000 €",
    },
  },
  {
    id: 5,
    type: "Vente",

    specific: {
      chambre: 4,
      bain: 5,
      terrasse: 2,
      parking: 5,
      garage: 2,
      description: "description",
      surface_terrain: 3645,
      surface_sejour: 50,
      etat_interieur: "A rafraichir",
      etat_exterieur: "Bon",
      vue: "Panoramique",
      chauffage: "fuel",
      eau_chaude: "Electrique",
    },

    prestation: {
      piscine: 2,
      climatisation: 2,
      chemine: 1,
      vitre: "double vitrage",
      buanderie: 1,
    },

    images: [
      { src: photo1 },
      { src: photo2 }
    ],

    infos_pratique: {
      prix: "50 000 €",
    },
  },
  {
    id: 6,
    type: "Vente",

    specific: {
      chambre: 6,
      bain: 2,
      terrasse: 2,
      parking: 5,
      garage: 2,
      description: "description",
      surface_terrain: 3645,
      surface_sejour: 50,
      etat_interieur: "A rafraichir",
      etat_exterieur: "Bon",
      vue: "Panoramique",
      chauffage: "fuel",
      eau_chaude: "Electrique",
    },

    prestation: {
      piscine: 2,
      climatisation: 2,
      chemine: 1,
      vitre: "double vitrage",
      buanderie: 1,
    },

    images: [
      { src: photo1 },
      { src: photo2 }
    ],

    infos_pratique: {
      prix: "50 000 €",
    },
  },
];





