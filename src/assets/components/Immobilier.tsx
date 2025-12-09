export interface Photo {
  id: number;
  src: string;
}

export interface ImageGroup {
  id: number;
  photo: Photo[];
}

export interface Specific {
  chambre: number;
  bain: number;
  terrasse: number;
  parking: number;
  garage: number;
  description: string;
  surface_terrain: number;
  surface_sejour: number;
  etat_interieur: string;
  etat_exterieur: string;
  vue: string;
  chauffage: string;
  eau_chaude: string;
}

export interface Prestation {
  piscine: number;
  climatisation: number;
  chemine: number;
  vitre: string;
  buanderie: number;
}

export interface InfosPratique {
  prix: number;
}

export interface BienImmobilier {
  id: number;
  type: "Vente" | "Location";
  specific: Specific[];
  prestation: Prestation[];
  image: ImageGroup[];
  infos_pratique: InfosPratique[];
}
