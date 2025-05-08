import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { config } from "./constants/config";
import NeonCursor from "./components/NeonCursor";

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <BrowserRouter>
      {/* ✅ NeonCursor added at top-level */}
      <NeonCursor />

      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
