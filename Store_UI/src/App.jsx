import Header from "./components/Header";
import ClassHeader from "./components/ClassHeader";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import React from "react";

function App() 
{
  return(
    <React.Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
