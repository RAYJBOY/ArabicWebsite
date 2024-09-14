import React from "react";
import { SideBar } from "./components/sidebar/SideBar";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";

function App() {

  const handleClose = () => {

  }

  return (
    <div>
      <Header />
      <SideBar />
      <Login open={false} handleClose={handleClose}/>
    </div>
  );
}

export default App;
