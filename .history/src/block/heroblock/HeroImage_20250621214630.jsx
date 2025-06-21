import './HeroBlock.css';
import heroImage from '../../../src/assets/SNAP.png';

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={heroImage} alt="Team collaborating remotely" />
    </div>
  );
};

export default HeroImage; // Fixed export