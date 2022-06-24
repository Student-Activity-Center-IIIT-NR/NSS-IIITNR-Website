import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./gallery/Gallery";
import Teams from "./teams/Teams";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/team" element={<Teams />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
