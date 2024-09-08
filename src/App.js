import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil/Accueil";
import Header from "./pages/Component/header/Header";
import Contact from "./pages/Contact/Contact";
import Boutique from "./pages/Boutique/Boutique";
import Qui_somme_nous from "./pages/Qui_soume_nous/Qui_somme_nous"
import Suivre_mon_colis from "./pages/Suivre_mon_colis/Suivre_mon_colis";
import Connect from "./pages/Component/registre/login/Login";
import Signup from "./pages/Component/registre/signup/Signup";
import Footer from "./pages/Component/Footer/Footer";
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
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Connect/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
