import StarBackground from '@/components/StarBackground';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
}

export default Home;
