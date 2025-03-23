import React from "react";
import PackageCard from "./PackageCard";

interface FeaturedPackagesProps {
  platform?: "instagram" | "tiktok" | "youtube";
  service?: "followers" | "views" | "likes";
  packages?: Array<{
    title: string;
    description: string;
    price: number;
    followers: number;
    features: Array<{ text: string }>;
  }>;
}

const FeaturedPackages = ({
  platform = "instagram",
  service = "followers",
  packages = platform === "youtube"
    ? [
        {
          title: "Pack Débutant",
          description: "Parfait pour les petits comptes en croissance",
          price: 5000,
          followers: 1000,
          features: [
            { text: "Abonnés Réels et Actifs" },
            { text: "Livraison Progressive" },
            { text: "Support 24/7" },
            { text: "Aucun Mot de Passe Requis" },
          ],
        },
        {
          title: "Pack Croissance",
          description: "Idéal pour les comptes de taille moyenne",
          price: 12500,
          followers: 2500,
          features: [
            { text: "Abonnés Réels et Actifs" },
            { text: "Livraison Prioritaire" },
            { text: "Support 24/7" },
            { text: "Tableau de Bord Analytique" },
          ],
        },
        {
          title: "Pack Pro",
          description:
            "Meilleur rapport qualité-prix pour les créateurs sérieux",
          price: 25000,
          followers: 5000,
          features: [
            { text: "Abonnés Premium" },
            { text: "Livraison Instantanée" },
            { text: "Support VIP" },
            { text: "Consultation de Croissance" },
          ],
        },
        {
          title: "Pack Elite",
          description: "Solution de croissance ultime",
          price: 50000,
          followers: 10000,
          features: [
            { text: "Abonnés Premium" },
            { text: "Vitesse de Livraison Personnalisée" },
            { text: "Gestionnaire de Compte Dédié" },
            { text: "Appel Stratégique Mensuel" },
          ],
        },
      ]
    : [
        {
          title: "Pack Débutant",
          description: "Parfait pour les petits comptes en croissance",
          price: 2000,
          followers: 1000,
          features: [
            { text: "Abonnés Réels et Actifs" },
            { text: "Livraison Progressive" },
            { text: "Support 24/7" },
            { text: "Aucun Mot de Passe Requis" },
          ],
        },
        {
          title: "Pack Croissance",
          description: "Idéal pour les comptes de taille moyenne",
          price: 5000,
          followers: 2500,
          features: [
            { text: "Abonnés Réels et Actifs" },
            { text: "Livraison Prioritaire" },
            { text: "Support 24/7" },
            { text: "Tableau de Bord Analytique" },
          ],
        },
        {
          title: "Pack Pro",
          description:
            "Meilleur rapport qualité-prix pour les créateurs sérieux",
          price: 10000,
          followers: 5000,
          features: [
            { text: "Abonnés Premium" },
            { text: "Livraison Instantanée" },
            { text: "Support VIP" },
            { text: "Consultation de Croissance" },
          ],
        },
        {
          title: "Pack Elite",
          description: "Solution de croissance ultime",
          price: 20000,
          followers: 10000,
          features: [
            { text: "Abonnés Premium" },
            { text: "Vitesse de Livraison Personnalisée" },
            { text: "Gestionnaire de Compte Dédié" },
            { text: "Appel Stratégique Mensuel" },
          ],
        },
      ],
}: FeaturedPackagesProps) => {
  return (
    <div className="w-full min-h-[400px] bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Packs Populaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              followers={pkg.followers}
              features={pkg.features}
              platform={platform}
              service={service}
              onBuyNow={() => console.log(`Buy ${pkg.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackages;
