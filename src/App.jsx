import AppRouter from "./Approuter";
import React from "react"; 
import Header from "./components/header/header.jsx";
import Footer from './components/footer/footer.jsx';

import "./App.css"


function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;