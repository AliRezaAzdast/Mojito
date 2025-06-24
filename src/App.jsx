import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
          <Navbar/>
          <Hero/>
          <div className='h-dvh'>

          </div>
      </main>
    </>
  );
}

export default App;
