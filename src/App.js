import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Teams from "./teams/Teams";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/team" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
