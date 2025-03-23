import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PackageFeature {
  text: string;
}

interface PackageCardProps {
  title?: string;
  description?: string;
  price?: number;
  followers?: number;
  features?: PackageFeature[];
  platform?: "instagram" | "tiktok" | "youtube";
  service?: "followers" | "views" | "likes";
  onBuyNow?: () => void;
}

const PackageCard = ({
  title = "Starter Package",
  description = "Perfect for small accounts looking to grow",
  price = 29.99,
  followers = 1000,
  features = [
    { text: "Real, Active Followers" },
    { text: "Gradual Delivery" },
    { text: "24/7 Support" },
    { text: "No Password Required" },
  ],
  platform = "instagram",
  service = "followers",
  onBuyNow = () => console.log("Buy now clicked"),
}: PackageCardProps) => {
  const platformColors = {
    instagram: "bg-gradient-to-br from-purple-600 to-pink-500",
    tiktok: "bg-gradient-to-br from-black to-gray-800",
    youtube: "bg-gradient-to-br from-red-600 to-red-700",
  };

  return (
    <Card
      className={`w-[280px] h-[360px] overflow-hidden ${platformColors[platform]} text-white`}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-100">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <span className="text-4xl font-bold">{price} FCFA</span>
          <p className="text-sm text-gray-100 mt-1">
            {followers.toLocaleString()}{" "}
            {service === "followers"
              ? "Abonnés"
              : service === "views"
                ? "Vues"
                : "Likes"}
          </p>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
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
            const whatsappLink = `https://api.whatsapp.com/send?phone=2250718226379&text=Je%20voudrais%20${followers}%20${serviceType}%20${platformName}%20s'il%20vous%20plait.%20Vous%20pourrez%20me%20donner%20le%20prix%3F`;
            window.open(whatsappLink, "_blank");
          }}
          className="w-full bg-white text-black hover:bg-gray-100"
        >
          Acheter
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
