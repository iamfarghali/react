import StarBackground from '@/components/StarBackground';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
  return (
    <div className="min-h-screen relative bg-background text-foreground">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      {/* Footer */}
    </div>
  );
}

export default Home;
