
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-electric-blue to-neon-green p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-mono font-bold text-gradient">DS</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Deepak Sharma</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-electric-blue font-medium mb-6">
            Frontend Web Developer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I am a frontend Web Developer with a passion for building visually appealing 
            and user-friendly web interfaces. Currently pursuing BCA and constantly 
            expanding my skillset in modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-electric-blue hover:bg-electric-blue/80 text-background font-semibold px-8 py-3 text-lg group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background font-semibold px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
