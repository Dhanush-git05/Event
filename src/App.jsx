import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Paris from "./pages/Paris";
import Bali from "./pages/Bali";
import Contact from "./pages/Contact";
import TravelBlog from "./pages/TravelBlog";
import TravelGuides from "./pages/TravelGuides";
import FAQ from "./pages/FAQ";
import Greece from "./pages/Greece";
import Peru from "./pages/Peru";
import Japan from "./pages/Japan";




function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paris" element={<Paris />} />   
                <Route path="/bali" element={<Bali />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/TravelBlog" element={<TravelBlog />} />
                <Route path="/TravelGuides" element={<TravelGuides />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Greece" element={<Greece />} />
                <Route path="/Peru" element={<Peru />} />
                <Route path="/Japan" element={<Japan />} />
                                       
              </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;