import React from 'react';
import './sass/_index.scss';
import Menu from "./components/Menu";
import Heading from "./components/Heading";
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Objectives from "./components/Objectives";
import Banner from "./components/Banner";
import Oportunities from "./components/Oportunities";
import Providers from "./components/Providers";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import bannerAumentarProductividad1 from "./assets/banner-aumentar-productividad-1.jpg";
import bannerAumentarProductividad2 from "./assets/banner-aumentar-productividad-2.jpg";

function App() {
  return (
    <>
      <Menu />
      <Heading />
      <Slider />
      <section id="section-pinn" className="intro-section">
        <Intro />
        <Objectives />
      </section>
      <Banner
        image={bannerAumentarProductividad1}
        content={
          <>
            <b>Aumentar la productividad</b> del país mediante la formación de <b>capital humano</b>.
          </>
        }
        boxBackground="light-blue"
      />
      <Oportunities />
      <Banner
        image={bannerAumentarProductividad2}
        content={
          <>
            Apoyamos las <b>capacidades</b> de <b>empleabilidad de Costa Rica</b>.
          </>
        }
        boxBackground="light-green"
      />
      <Providers />
      <Faq />
      <Footer />
    </>
  );
}
export default App;
