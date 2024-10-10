import { useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Dashboard from './components/Dashboard';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${checked ? 'text-black' : 'text-neutral-300'}`}>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className={`absolute top-0 z-[-2] h-screen w-screen transition-colors duration-300 ${checked ? "bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" : "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"}`}>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar checked={checked} setChecked={setChecked} />
        <Hero checked={checked} />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
