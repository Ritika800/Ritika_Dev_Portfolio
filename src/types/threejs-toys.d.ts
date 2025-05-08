declare module "threejs-toys" {
    export function particleCursor(options: {
      el: HTMLElement;
      gpgpuSize?: number;
      colors?: number[];
      coordScale?: number;
      noiseIntensity?: number;
      noiseTimeCoef?: number;
      pointSize?: number;
      pointDecay?: number;
      sleepRadiusX?: number;
      sleepRadiusY?: number;
      sleepTimeCoefX?: number;
      sleepTimeCoefY?: number;
    }): void;
  }
  
  

  