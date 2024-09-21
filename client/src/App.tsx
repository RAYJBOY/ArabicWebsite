import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from "./pages/LandingPage";
import { QuranCourse } from "./pages/courses/QuranCourse"; 
import { ArabicCourse } from "./pages/courses/ArabicCourse";
import { IslamicCourse } from "./pages/courses/IslamicCourse";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/arabic" element={<ArabicCourse/>}/>
          <Route path="/islamicstudies" element={<IslamicCourse/>}/>
          <Route path="/quran" element={<QuranCourse/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
