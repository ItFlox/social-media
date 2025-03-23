import React from "react";
import { Card, CardContent } from "./ui/card";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

interface CustomGrowthProps {
  platform?: "instagram" | "tiktok" | "youtube";
  service?: "followers" | "views" | "likes";
  minFollowers?: number;
  maxFollowers?: number;
  pricePerFollower?: number;
  onBuyNow?: (followers: number) => void;
}

const CustomGrowth = ({
  platform = "instagram",
  service = "followers",
  minFollowers = service === "views"
    ? 10000
    : service === "likes"
      ? 1000
      : 1000,
  maxFollowers = service === "views"
    ? 1000000
    : service === "likes"
      ? 50000
      : 100000,
  pricePerFollower = service === "views"
    ? 0.05
    : service === "likes"
      ? 0.5
      : platform === "youtube"
        ? 5
        : 2,

  onBuyNow = () => console.log("Buy now clicked"),
}: CustomGrowthProps) => {
  const [followers, setFollowers] = React.useState([minFollowers]);

  const calculatePrice = (followerCount: number) => {
    return (followerCount * pricePerFollower).toFixed(2);
  };

  const platformGradients = {
    instagram: "bg-gradient-to-r from-purple-600 to-pink-500",
    tiktok: "bg-gradient-to-r from-black to-gray-800",
    youtube: "bg-gradient-to-r from-red-600 to-red-700",
  };

  return (
    <Card className={`w-full max-w-[800px] ${platformGradients[platform]}`}>
      <CardContent className="p-6 text-white">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Pack Personnalisé</h3>
            <p className="text-gray-100">
              Choisissez exactement le nombre de{" "}
              {service === "followers"
                ? "abonnés"
                : service === "views"
                  ? "vues"
                  : "likes"}{" "}
              souhaité
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">
                {service === "followers"
                  ? "Abonnés"
                  : service === "views"
                    ? "Vues"
                    : "Likes"}
                :
              </span>
              <span className="text-2xl font-bold">
                {followers[0].toLocaleString()}
              </span>
            </div>

            <Slider
              value={followers}
              onValueChange={setFollowers}
              min={minFollowers}
              max={maxFollowers}
              step={100}
              className="w-full"
            />

            <div className="flex justify-between text-sm">
              <span>{minFollowers.toLocaleString()}</span>
              <span>{maxFollowers.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center pt-4">
              <div>
                <span className="text-sm">Prix Total:</span>
                <div className="text-3xl font-bold">
                  {calculatePrice(followers[0])} FCFA
                </div>
              </div>

              <Button
                onClick={() => {
                  const platformName =
                    platform.charAt(0).toUpperCase() + platform.slice(1);
                  const serviceType =
                    service === "followers"
                      ? "abonnés"
                      : service === "views"
                        ? "vues"
                        : "likes";
                  const whatsappLink = `https://api.whatsapp.com/send?phone=2250718226379&text=Je%20voudrais%20${followers[0]}%20${serviceType}%20${platformName}%20s'il%20vous%20plait.%20Vous%20pourrez%20me%20donner%20le%20prix%3F`;
                  window.open(whatsappLink, "_blank");
                }}
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Acheter
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomGrowth;
