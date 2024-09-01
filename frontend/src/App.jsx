import "./App.css"
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import MedEd from "./pages/MedEd";




export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/team" element={<Team />} />
      <Route path="projects/insured_gpt" element={<div>InsuredGPT</div>} />
      <Route path="projects/med_ed" element={<MedEd />} />
      <Route path="projects/ai_interpret" element={<div>AI-Modulated Interpretation</div>} />
    </Routes>
  </BrowserRouter>
  );
}
