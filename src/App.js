import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "./teams/Teams";
import Gallery from "./gallery/Gallery";
import Error from "./components/Error";
import Home from "./home/Home";
import { Events } from "./events/Events";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route exact path="/team" element={<Teams />} />
        <Route exact path="/events" element={<Events />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
