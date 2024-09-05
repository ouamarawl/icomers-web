import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil/Accueil";
import Header from "./pages/Component/header/Header";
import Contact from "./pages/Contact/Contact";
import Boutique from "./pages/Boutique/Boutique";
import Qui_somme_nous from "C:/Users/L13 YOGA/OneDrive/Bureau/mes projets/projet React/icomers-web/src/pages/Qui_soume_nous/Qui_somme_nous.js";
import Suivre_mon_colis from "./pages/Suivre_mon_colis/Suivre_mon_colis";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/boutique" element={<Boutique/>} />
          <Route path="/qui_somm_nous" element={<Qui_somme_nous/>} />
          <Route path="/suivre_mon_colis" element={<Suivre_mon_colis/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
