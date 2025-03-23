import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
  platform?: "instagram" | "tiktok" | "youtube";
}

const ParticlesBackground = ({
  platform = "instagram",
}: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getConfig = (platform: string) => {
    const configs = {
      instagram: {
        colors: ["#833AB4", "#FD1D1D", "#F77737"],
        shape: "circle",
      },
      tiktok: {
        colors: ["#00f2ea", "#ff0050", "#ffffff"],
        shape: "square",
      },
      youtube: {
        colors: ["#FF0000", "#282828", "#ffffff"],
        shape: "triangle",
      },
    };

    const config = configs[platform as keyof typeof configs];

    return {
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: config.colors,
        },
        shape: {
          type: config.shape,
        },
        opacity: {
          value: 0.3,
        },
        size: {
          value: { min: 2, max: 6 },
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
        links: {
          enable: true,
          distance: 150,
          color: config.colors[0],
          opacity: 0.2,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
    };
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getConfig(platform)}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
