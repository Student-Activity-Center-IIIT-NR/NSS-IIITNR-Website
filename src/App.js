import { Blogs } from "./Components/Blogs/Blogs";
import { Events } from "./Components/Events/Events";

import { Footer } from "./Components/Footer";
import { NSS } from "./Components/HomePage/NSS";
import { Landing } from "./Components/HomePage/Landing";
import { Navbar } from "./Components/Navbar";
import { GoalsVision } from "./Components/HomePage/GoalsVision";
import Gallery from "./gallery/Gallery";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teams from "./teams/Teams";

function App() {
  return (



    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Landing />
            <GoalsVision />
            <NSS />
            <Blogs />

          </>} />
          <Route path="/gallery"
          element={
            <>
            <Gallery />
            </>
          }
          />
          <Route path="/events"
          element={
            <>
            <Events />
            
            </>
          }
          />
          <Route path="/team"
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
  );
}

export default App;
