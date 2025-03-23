import React from "react";
import PlatformSelector from "./PlatformSelector";
import CountUp from "./CountUp";
import Loader from "./ui/loader";
import ServiceSelector from "./ServiceSelector";
import FeaturedPackages from "./FeaturedPackages";
import CustomGrowth from "./CustomGrowth";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";

interface HomeProps {
  defaultPlatform?: "instagram" | "tiktok" | "youtube";
}

const Home = ({ defaultPlatform = "instagram" }: HomeProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedPlatform, setSelectedPlatform] = React.useState<
    "instagram" | "tiktok" | "youtube"
  >(defaultPlatform);
  const [selectedService, setSelectedService] = React.useState("followers");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />
      <section
        id="hero"
        className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 overflow-hidden"
      >
        <ParticlesBackground platform={selectedPlatform} />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Développez Votre Présence sur les Réseaux Sociaux
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Obtenez des abonnés réels et actifs pour vos comptes de réseaux
            sociaux avec nos packs de croissance fiables
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <PlatformSelector
              defaultPlatform={selectedPlatform}
              onPlatformChange={(platform) =>
                setSelectedPlatform(
                  platform as "instagram" | "tiktok" | "youtube",
                )
              }
            />
            <ServiceSelector
              defaultService={selectedService}
              onServiceChange={setSelectedService}
            />
          </div>
        </div>
      </section>

      <section id="packages" className="py-16">
        {selectedService === "followers" && (
          <FeaturedPackages
            platform={selectedPlatform}
            service={selectedService}
          />
        )}
      </section>

      <section id="custom" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Créez Votre Pack Personnalisé
          </h2>
          <div className="flex justify-center">
            <CustomGrowth
              platform={selectedPlatform}
              service={selectedService}
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pourquoi Nous Choisir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-2xl font-bold mb-2">100%</div>
              <p className="text-gray-600">Sûr et Sécurisé</p>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <p className="text-gray-600">Support Client</p>
            </div>
            <div className="p-6">
              <CountUp end={10000} suffix="+" />
              <p className="text-gray-600">Clients Satisfaits</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
