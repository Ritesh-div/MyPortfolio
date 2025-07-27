import "@/App.css";
import ProjectContainer from "./mycomponents/projectContainer";
import About from "./mycomponents/about";
import Hero from "./mycomponents/hero";
import GetInTouch from "./mycomponents/contact";
import gsap from "gsap";

function App() {
const gasptime = gsap.timeline();
  return (
    <div className=" bg-background text-foreground relative">
      <Hero gsaptimeline={gasptime}/>
      <ProjectContainer/>
      <About />
      <GetInTouch/>
    </div>
  );
}

export default App;
