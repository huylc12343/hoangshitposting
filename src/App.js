import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection'; // Import HeroSection component
import HeroSection2 from './components/HeroSection2'; // Import HeroSection2 component
import HeroSection3 from './components/HeroSection3'; // Import HeroSection3 component
import Merch from './components/Merch'; // Import Merch component
import Footer from './components/footer';
import { ThemeProvider } from './contexts/Theme'; // Đường dẫn đến file Theme.js của bạn
import AutoScrollBanner from './components/AutoScroll'; // Import AutoScrollBanner component
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <HeroSection />
        <HeroSection2 />
        <AutoScrollBanner />
        <HeroSection3 />      
        <Merch />
        <Footer />
      </ThemeProvider>  
    </div>
    
  );
}

export default App;
