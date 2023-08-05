import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero />
        <SkillSet />
        <Projects />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
