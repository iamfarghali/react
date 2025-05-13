import { ArrowDown } from 'lucide-react';

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative px-4 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {' '}
              John
            </span>
            <span className="opacity-0 animate-fade-in-delay-3"> Doe</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="opacity-0 pt-4 text-center animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-20 md:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 font-bold ">
          Scroll
        </span>
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
