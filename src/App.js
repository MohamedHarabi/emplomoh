import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Why, Features, Pricing } from './pages/index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/whychooseus' element={<Why />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
