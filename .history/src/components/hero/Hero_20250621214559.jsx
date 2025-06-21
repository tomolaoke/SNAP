import './Hero.css';
import HeroText from '../../block/heroblock/HeroText';
import HeroImage from '../../block/heroblock/HeroImage';

const Hero = () => {
  return (
    <section className="hero">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default Hero;