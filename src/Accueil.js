import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function Accueil() {
    const Livres = ['Apprendre à réagir', 'Pro Réagir 16', 'React.js avec Redux'];
  return (
    <div>
      <h2>Page d’accueil</h2>
      <Logo />
      <LecteurAudio />
      <h3>Notifications</h3>
      <Notifications />
      <h3> Liste des taches </h3>
      <ListeTaches />
      <h3> Liste de courses pour les Livres </h3>
      <ListeCourses elements={Livres} />
    
      <Galerie />
    </div>
  );
}

export default Accueil;