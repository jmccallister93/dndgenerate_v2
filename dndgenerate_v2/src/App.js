import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomeContent from "./Components/HomeContent/HomeContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
