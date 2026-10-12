import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

import { profile, skills } from "./data";

function App() {
  return (
    <>
      <Navbar profile={profile} />
      <Hero profile={profile} />
      <About skills={skills} />
      <Skills skills={skills} />
    </>
  );
}

export default App;