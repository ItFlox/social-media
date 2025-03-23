import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Users, Eye, Heart } from "lucide-react";

interface ServiceSelectorProps {
  onServiceChange?: (service: string) => void;
  defaultService?: string;
}

const ServiceSelector = ({
  onServiceChange = () => {},
  defaultService = "followers",
}: ServiceSelectorProps) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <Tabs
        defaultValue={defaultService}
        onValueChange={onServiceChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 h-16">
          <TabsTrigger value="followers" className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Abonnés</span>
          </TabsTrigger>
          <TabsTrigger value="views" className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            <span>Vues</span>
          </TabsTrigger>
          <TabsTrigger value="likes" className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span>Likes</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ServiceSelector;
