import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import SobreMim from "../Home/sections/SobreMim/SobreMim"
import Experiencias from "./sections/Experiencias/Experiencias"
import Projetos from "./sections/Projetos/Projetos"
import Habilidades from "./sections/Habilidades/Habilidades"
import Footer from "../../components/Footer/Footer"
import WhatsAppImg from "../assets/images/whatsapp-icone-1.png"
import { useState } from "react";
import MenuMobile from "../../components/MenuMobile/MenuMobile"



const Home = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>

      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />



      <NavBar setMenuIsVisible={setMenuIsVisible} />
      <Hero />
      <SobreMim />
      <Experiencias />
      <Projetos />
      <Habilidades />
      <Footer />

      <a href="https://wa.me/5599988346472" target="_blank" rel="noopener noreferrer">
        <img id="WhatsApp" src={WhatsAppImg} alt="WhatsApp Icon" />
      </a>

    </>
  )
}

export default Home
