import { Route, Routes, Navigate } from 'react-router-dom';

import './style.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
