
import { Code, Database, Network, FileSpreadsheet, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: Code, color: 'text-orange-500' },
    { name: 'CSS', icon: Code, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
    { name: 'CCNA', icon: Network, color: 'text-electric-blue' },
    { name: 'MS Excel', icon: FileSpreadsheet, color: 'text-green-500' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing a Bachelor of Computer Applications and have a 
                strong interest in frontend development. I'm focused on enhancing my 
                skills in modern technologies and networking fundamentals.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity about how 
                beautiful websites are created. Now, I'm dedicated to crafting 
                engaging user experiences through clean code and thoughtful design.
              </p>

              <div className="flex items-center gap-2 text-electric-blue">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Currently pursuing BCA</span>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-mono font-semibold text-center mb-8">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group p-6 bg-card rounded-lg border border-border hover:border-electric-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <skill.icon className={`h-8 w-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
