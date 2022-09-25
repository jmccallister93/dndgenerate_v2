import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomeContent from "./Components/HomeContent/HomeContent";
import Create from "./Components/Create/Create";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
