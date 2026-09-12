import { HashRouter, Route, Routes } from 'react-router-dom';
import CRTScreen from './components/layout/CRTScreen.jsx';
import Footer from './components/layout/Footer.jsx';
import NavTerminal from './components/layout/NavTerminal.jsx';
import About from './pages/About.jsx';
import Ethos from './pages/Ethos.jsx';
import Home from './pages/Home.jsx';
import Photos from './pages/Photos.jsx';
import RefineMacrodata from './pages/RefineMacrodata.jsx';
import Resume from './pages/Resume.jsx';
import Skills from './pages/Skills.jsx';
import Videos from './pages/Videos.jsx';

export default function App() {
  return (
    <HashRouter>
      <CRTScreen>
        <div className="app-shell">
          <NavTerminal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/ethos" element={<Ethos />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/refine-macrodata" element={<RefineMacrodata />} />
          </Routes>
          <Footer />
        </div>
      </CRTScreen>
    </HashRouter>
  );
}
