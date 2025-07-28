import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./contexts/Theme";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import About from "./pages/About";
import Merch from "./pages/merch";
import Upcoming from "./pages/upcoming";
import Cart from "./pages/cart";
import Event from "./pages/Events";
import BuyTicket from "./pages/BuyTicket";
import PageCCPCLKHN from "./pages/PageCCPCLKHN";
import TrienLam_GapGapHN from "./pages/TrienLam_GapGapHN";
import TrienLam_GapGapHCM from "./pages/TrienLam_GapGapHCM";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />

        {/* ScrollToTop đặt ngoài Routes */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/event" element={<Event />} />
          <Route path="/buyticket/:id" element={<BuyTicket />} />
          <Route path="/CCPCLKHN" element={<PageCCPCLKHN />} />
          <Route path="/GapGapHN" element={<TrienLam_GapGapHN />} />
          <Route path="/GapGapHCM" element={<TrienLam_GapGapHCM />} />
          <Route path="*" element={<h1>404 - Không tìm thấy trang</h1>} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
