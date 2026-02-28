import { FAQItem } from "@/lib/types";

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: {
      en: "What is GetYourPlace?",
      fr: "Qu'est-ce que GetYourPlace?",
    },
    answer: {
      en: "GetYourPlace is an organization which makes easier the arrival of foreign students and young workers in a new city by offering affordable, comfortable and furnished apartments, for a medium to a long period of time (2 to 12 months). GetYourPlace was created in 2012 by 2 students from HEC Montréal: Mano and Alex.",
      fr: "GetYourPlace est une organisation qui facilite l'arrivée des étudiants étrangers et des jeunes travailleurs dans une nouvelle ville en offrant des appartements abordables, confortables et meublés, pour une période moyenne à longue (2 à 12 mois). GetYourPlace a été créé en 2012 par 2 étudiants de HEC Montréal: Mano et Alex.",
    },
    category: "general",
  },
  {
    id: "2",
    question: {
      en: "What is included in the rent?",
      fr: "Qu'est-ce qui est inclus dans le loyer?",
    },
    answer: {
      en: "The monthly rent includes all necessary furniture, heating, hot water, electricity, and internet. Some apartments also include a cleaning service and bed sheets. The only extra is mandatory housing insurance ($25/month taxes included).",
      fr: "Le loyer mensuel comprend tout le mobilier nécessaire, le chauffage, l'eau chaude, l'électricité et Internet. Certains appartements incluent également un service de ménage et des draps. Le seul extra est l'assurance habitation obligatoire (25$/mois taxes incluses).",
    },
    category: "rent",
  },
  {
    id: "3",
    question: {
      en: "Who are the tenants?",
      fr: "Qui sont les locataires?",
    },
    answer: {
      en: "Our tenants are students or young professionals, aged 18 to 27. Once a room is booked, the gender and nationality of the roommate is displayed on the apartment's ad.",
      fr: "Nos locataires sont des étudiants ou de jeunes professionnels, âgés de 18 à 27 ans. Une fois une chambre réservée, le genre et la nationalité du colocataire sont affichés sur l'annonce de l'appartement.",
    },
    category: "general",
  },
  {
    id: "4",
    question: {
      en: "Can I share my room with someone?",
      fr: "Puis-je partager ma chambre avec quelqu'un?",
    },
    answer: {
      en: "No. It is strictly forbidden to share a room or a studio with someone (friend, boyfriend, girlfriend, etc.).",
      fr: "Non. Il est strictement interdit de partager une chambre ou un studio avec quelqu'un (ami, petit ami, petite amie, etc.).",
    },
    category: "rules",
  },
  {
    id: "5",
    question: {
      en: "What about housing insurance?",
      fr: "Qu'en est-il de l'assurance habitation?",
    },
    answer: {
      en: "GetYourPlace provides housing insurance for $25/month (tax included), and it's mandatory when booking a room. The insurer is Lloyd's, based in London, UK. It protects every roommate for up to $2,000,000 for premises liability coverage (except water damage), and $25,000 for Personal Property Coverage ($1,000 deductible).",
      fr: "GetYourPlace fournit une assurance habitation pour 25$/mois (taxes incluses), obligatoire lors de la réservation d'une chambre. L'assureur est Lloyd's, basé à Londres, Royaume-Uni. Elle protège chaque colocataire jusqu'à 2 000 000$ pour la couverture de responsabilité civile (sauf dégâts d'eau) et 25 000$ pour la couverture des biens personnels (franchise de 1 000$).",
    },
    category: "insurance",
  },
  {
    id: "6",
    question: {
      en: "How do I book a room?",
      fr: "Comment réserver une chambre?",
    },
    answer: {
      en: "Booking a room takes just a few minutes! Browse our apartments, select a room, add it to your cart, and follow the checkout steps. Your contract is signed online before your arrival.",
      fr: "Réserver une chambre ne prend que quelques minutes! Parcours nos appartements, sélectionne une chambre, ajoute-la à ton panier et suis les étapes de paiement. Ton contrat est signé en ligne avant ton arrivée.",
    },
    category: "booking",
  },
  {
    id: "7",
    question: {
      en: "What are the lease durations available?",
      fr: "Quelles sont les durées de bail disponibles?",
    },
    answer: {
      en: "Leases are available from 2 to 12 months, depending on the selected room and availability.",
      fr: "Les baux sont disponibles de 2 à 12 mois, selon la chambre choisie et la disponibilité.",
    },
    category: "rent",
  },
  {
    id: "8",
    question: {
      en: "How do I access my apartment?",
      fr: "Comment accéder à mon appartement?",
    },
    answer: {
      en: "Upon confirming your booking, you will receive a unique access code that allows you to enter your apartment. No physical keys needed!",
      fr: "Après confirmation de ta réservation, tu recevras un code d'accès unique qui te permettra d'entrer dans ton appartement. Pas besoin de clés physiques!",
    },
    category: "access",
  },
];
