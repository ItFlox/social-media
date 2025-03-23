import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Instagram, Youtube, Music2 } from "lucide-react";

interface PlatformSelectorProps {
  onPlatformChange?: (platform: string) => void;
  defaultPlatform?: string;
}

const PlatformSelector = ({
  onPlatformChange = () => {},
  defaultPlatform = "instagram",
}: PlatformSelectorProps) => {
  return (
    <div className="w-[600px] bg-white p-4 rounded-lg shadow-sm">
      <Tabs
        defaultValue={defaultPlatform}
        onValueChange={onPlatformChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 h-20">
          <TabsTrigger
            value="instagram"
            className="flex flex-col items-center gap-2"
          >
            <Instagram className="h-6 w-6 text-pink-600" />
            <span>Instagram</span>
          </TabsTrigger>
          <TabsTrigger
            value="tiktok"
            className="flex flex-col items-center gap-2"
          >
            <Music2 className="h-6 w-6 text-black" />
            <span>TikTok</span>
          </TabsTrigger>
          <TabsTrigger
            value="youtube"
            className="flex flex-col items-center gap-2"
          >
            <Youtube className="h-6 w-6 text-red-600" />
            <span>YouTube</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="instagram">
          <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-500" />
        </TabsContent>
        <TabsContent value="tiktok">
          <div className="h-1 bg-black" />
        </TabsContent>
        <TabsContent value="youtube">
          <div className="h-1 bg-red-600" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlatformSelector;
