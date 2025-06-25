import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
          <Navbar/>
          <Hero/>
          <Cocktails/>
      </main>
    </>
  );
}

export default App;
