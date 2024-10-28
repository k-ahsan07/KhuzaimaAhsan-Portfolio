import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Tech from "./Component/Tech";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-200 selection:text-slate-900">
      <div className="fixed inset-0 -z-10 h-screen w-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
