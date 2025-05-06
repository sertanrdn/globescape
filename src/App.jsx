import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Wishlist } from './pages/Wishlist';
import { CountryProvider } from './context/CountryContext.jsx';

function App() {

  return (
      <CountryProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </Router>
      </CountryProvider>
  );
}

export default App;
