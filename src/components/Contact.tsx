
import { useState } from 'react';
import { Mail, Phone, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepanshusharma1156@gmail.com',
      href: 'mailto:deepanshusharma1156@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9671860239',
      href: 'tel:9671860239'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-mono font-semibold mb-6 text-electric-blue">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, 
                  or just having a chat about web development. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <Card key={item.label} className="border-border hover:border-electric-blue/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <a
                        href={item.href}
                        className="flex items-center gap-4 text-foreground hover:text-electric-blue transition-colors group"
                      >
                        <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                          <item.icon className="h-6 w-6 text-electric-blue" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-muted-foreground group-hover:text-electric-blue transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-mono flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-electric-blue" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-electric-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-electric-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-electric-blue resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-electric-blue/80 text-background font-semibold py-3 group"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
