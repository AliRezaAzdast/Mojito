import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <div className='flex-center h-[100vh]'>
          <h1 className='text-indigo-300'>hellow</h1>
      </div>
    </>
  );
}

export default App;
