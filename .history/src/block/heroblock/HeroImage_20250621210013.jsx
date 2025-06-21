import './HeroBlock.css';
import heroImage from '../../../assets/hero-image.png';

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={heroImage} alt="Team collaborating remotely" />
    </div>
  );
};

export default HeroImage;