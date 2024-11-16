import NavBar from "../../components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import SobreMim from "../Home/sections/SobreMim/SobreMim";
import Experiencias from "./sections/Experiencias/Experiencias";
import Projetos from "./sections/Projetos/Projetos";
import Habilidades from "./sections/Habilidades/Habilidades";
import Footer from "../../components/Footer/Footer";
import WhatsAppImg from "../assets/images/whatsapp-icone-1.png";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { useState } from "react";
import { SnackbarProvider } from "notistack";

const Home = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onAnimationEnd={handleSplashEnd} />
      ) : (
        <>
          <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
          <NavBar setMenuIsVisible={setMenuIsVisible} />

          <AnimatedSection direction="left">
            <Hero />
          </AnimatedSection>

          <AnimatedSection direction="left">
            <SobreMim />
          </AnimatedSection>

          <AnimatedSection direction="left">
            <Experiencias />
          </AnimatedSection>

          <AnimatedSection direction="left">
            <Projetos />
          </AnimatedSection>

          <AnimatedSection direction="left">
            <Habilidades />
          </AnimatedSection>

          <AnimatedSection direction="left">
            <SnackbarProvider maxSnack={3}>
              <Footer />
            </SnackbarProvider>
          </AnimatedSection>

          <a href="https://wa.me/5599988346472" target="_blank" rel="noopener noreferrer">
            <img id="WhatsApp" src={WhatsAppImg} alt="WhatsApp Icon" />
          </a>
        </>
      )}
    </>
  );
};

export default Home;
