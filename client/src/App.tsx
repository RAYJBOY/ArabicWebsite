import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from "./pages/LandingPage";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
