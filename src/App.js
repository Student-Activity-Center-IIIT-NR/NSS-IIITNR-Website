import { Blogs } from "./Components/Blogs/Blogs";
import { Events } from "./Components/Events/Events";

import { Footer } from "./Components/Footer";
import { NSS } from "./Components/HomePage/NSS";
import { Landing } from "./Components/HomePage/Landing";
import { Navbar } from "./Components/Navbar";
import { GoalsVision } from "./Components/HomePage/GoalsVision";
import Gallery from "./gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./gallery/Gallery";
import Teams from "./teams/Teams";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
                <GoalsVision />
                <NSS />
                <Blogs />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Events />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Teams />
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/team" element={<Teams />} />
    //     <Route path="/gallery" element={<Gallery />} />
    //     <Route path="/*" element={<Error />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
};

export default App;
