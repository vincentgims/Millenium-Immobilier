import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Home from "@components/Home";
import Contact from "@components/Contact";
import NoMatch from "@components/NoMatch";
import Footer from "@components/Footer";
import "./App.css";
import Vente from "@components/Vente";
import Location from "@components/Location";
import Estimation from "@components/Estimation";
import Agence from "@components/Agence/Agence";
import Equipe from "@components/Agence/Equipe";
import Service from "@components/Agence/Services";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vente" element={<Vente />} />
        <Route path="/location" element={<Location/>} />
        <Route path="/estimation" element={<Estimation/>} />
        <Route path="/agence" element={<Agence/>} />
        <Route path="/equipe" element={<Equipe/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}
