import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="titre">Mon Application React</h1>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Connexion />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;