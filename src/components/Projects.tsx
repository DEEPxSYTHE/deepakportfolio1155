
import { ExternalLink, Github, Code, Palette, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const project = {
    title: "Amazon Webpage Clone",
    description: "A fully responsive clone of Amazon's homepage created using HTML, CSS, and JavaScript to replicate layout, styling, and interactive elements.",
    tools: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design for all devices",
      "Interactive navigation and search",
      "Product carousel functionality",
      "Clean, modern UI/UX"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16">
            Featured <span className="text-gradient">Project</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border hover:border-electric-blue/50 transition-colors duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-green/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-mono mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold text-electric-blue mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neon-green mb-3 flex items-center gap-2">
                        <Palette className="h-4 w-4" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-electric-blue mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
