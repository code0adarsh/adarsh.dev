
import React from 'react';
import { SplashCursor } from '@/components/ui/splash-cursor';

const ThreeScene = () => {
  return (
    <SplashCursor 
      SIM_RESOLUTION={128}
      DYE_RESOLUTION={1024}
      DENSITY_DISSIPATION={4}
      VELOCITY_DISSIPATION={2.2}
      PRESSURE={0.8}
      PRESSURE_ITERATIONS={20}
      CURL={30}
      SPLAT_RADIUS={0.3}
      SPLAT_FORCE={6000}
      SHADING={true}
      COLOR_UPDATE_SPEED={10}
      BACK_COLOR={{ r: 0.05, g: 0.1, b: 0.2 }}  // Dark navy blue
      TRANSPARENT={true}
    />
  );
};

export default ThreeScene;
