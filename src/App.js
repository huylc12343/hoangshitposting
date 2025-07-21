import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider } from './contexts/Theme';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/About';
import Merch from './pages/merch';
import Upcoming from './pages/upcoming';
import Cart from './pages/cart';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/hoangshitposting" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/upcoming" element={<Upcoming/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<h1>404 - Không tìm thấy trang</h1>} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
  
}

export default App;
