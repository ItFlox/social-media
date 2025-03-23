import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.svg" alt="Salix Socials Logo" className="h-8 w-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Salix Socials
            </span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection("hero")}>
              Accueil
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("packages")}>
              Packs
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("custom")}>
              Personnalisé
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              Pourquoi Nous
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
