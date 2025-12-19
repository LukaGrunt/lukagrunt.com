import BackgroundShader from './components/layout/BackgroundShader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import HireMeSection from './components/sections/HireMeSection';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-deep text-text overflow-x-hidden">
      {/* 3D Background Shader */}
      <BackgroundShader />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <HireMeSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
