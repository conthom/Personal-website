import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Importing slim package

const TechyBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Initializing the tsParticles engine
      await loadSlim(engine); // Slim package for smaller size
    }).then(() => {
      setInit(true); // Set init state to true once engine is initialized
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container); // For debugging: log the container
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#fffff", // Background color (should be "#ffffff" instead of "#fffff")
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ADD8E6", // Light blue color for particles
        },
        links: {
          color: "#ADD8E6", // Color of links between particles
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", // Particle shape
        },
        size: {
          value: { min: 1, max: 5 }, // Particle size range
        },
      },
      detectRetina: true, // Enable retina display support
    }),
    [],
  );

  // Render the particles background once initialized
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  // Return nothing while loading
  return <></>;
};

// Export the component so it can be imported elsewhere
export default TechyBackground;
