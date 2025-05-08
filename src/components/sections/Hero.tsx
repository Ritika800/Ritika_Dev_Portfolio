import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#008B8B]" />
          <div className="relative h-40 w-1 sm:h-80">
            <div className="absolute top-0 h-full w-full bg-gradient-to-b from-[#008B8B] to-transparent" />
            <div className="absolute bottom-0 h-10 w-full bg-[#008B8B] blur-md opacity-50" />
          </div>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm{" "}
        <span className="text-[#00FFFF]">
          <Typewriter
            words={[config.hero.name, "Full Stack Developer", "Web3 Developer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
      <p className={`${styles.heroSubText} text-white-100 mt-2`}>
        {config.hero.p[0]} <br className="hidden sm:block" />
        {config.hero.p[1]}
      </p>
    </div>
  </div>
      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
