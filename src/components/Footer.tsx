
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="font-mono font-bold text-xl text-gradient">
            Deepak Sharma
          </div>
          
          <p className="text-muted-foreground">
            Frontend Web Developer • BCA Student
          </p>
          
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deepak Sharma. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
