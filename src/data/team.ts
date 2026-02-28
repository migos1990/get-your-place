import { TeamMember } from "@/lib/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mano",
    role: { en: "Co-Founder", fr: "Co-Fondateur" },
    bio: {
      en: "Mano co-founded GetYourPlace after his exchange experience at HEC Montreal. He experienced firsthand the challenges international students face finding accommodation.",
      fr: "Mano a cofondé GetYourPlace après son expérience d'échange à HEC Montréal. Il a vécu de première main les défis auxquels les étudiants internationaux font face pour trouver un logement.",
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "2",
    name: "Alex",
    role: { en: "Co-Founder", fr: "Co-Fondateur" },
    bio: {
      en: "Alex co-founded GetYourPlace in 2012 with Mano. Together they created the leading platform for furnished student housing in Montreal.",
      fr: "Alex a cofondé GetYourPlace en 2012 avec Mano. Ensemble, ils ont créé la plateforme leader pour le logement étudiant meublé à Montréal.",
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "3",
    name: "Sophie",
    role: { en: "Operations Manager", fr: "Directrice des opérations" },
    bio: {
      en: "Sophie manages the day-to-day operations and ensures every tenant has a smooth experience from booking to move-in.",
      fr: "Sophie gère les opérations quotidiennes et s'assure que chaque locataire vive une expérience fluide, de la réservation à l'emménagement.",
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
];
