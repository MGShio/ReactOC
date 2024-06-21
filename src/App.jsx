import AppRouter from "./Approuter";
import Header from "./components/header/header.jsx";
import Footer from './components/footer/footer.jsx';

import "./App.sass"


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