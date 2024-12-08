import './tee.css';
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner"
import Services from "./components/Services"
import About from "./components/About"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#FEFAF1] dark:bg-dark-blanco">
      <Header />
      <main>
      <Banner/>
      <Services/>
      <About/>
      <Reviews/>
      <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
