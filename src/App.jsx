import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all";
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main>
          <Navbar/>
      </main>
    </>
  );
}

export default App;
