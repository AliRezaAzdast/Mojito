import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contactus';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
          <Navbar/>
          <Hero/>
          <Cocktails/>
          <About/>
          <Art/>
          <Menu/>
          <Contact/>
      </main>
    </>
  );
}

export default App;
