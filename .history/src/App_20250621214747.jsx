import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;