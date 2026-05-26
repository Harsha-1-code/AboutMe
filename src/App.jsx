import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Certificates />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
