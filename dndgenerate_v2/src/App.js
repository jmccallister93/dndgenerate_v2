import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomeContent from "./Components/HomeContent/HomeContent";
import Tools from "./Components/Tools/Tools";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
