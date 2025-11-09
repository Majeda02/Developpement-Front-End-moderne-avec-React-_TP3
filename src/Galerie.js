
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

function Galerie() {
  return (
    <div>
      <h3>Galerie d’images</h3>
      <img src={img1} alt="Image 1" width="150" />
      <img src={img2} alt="Image 2" width="150" />
      <img src={img3} alt="Image 3" width="150" />
    </div>
  );
}

export default Galerie;
