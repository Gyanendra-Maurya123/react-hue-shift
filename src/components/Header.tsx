import { Shield, Blocks } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden py-16 bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-12 h-12 text-white mr-3 animate-pulse-glow" />
          <Blocks className="w-12 h-12 text-white animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
          PRODUCT VERIFICATION SYSTEM
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wider">
          THROUGH BLOCKCHAIN
        </p>
        
        {/* Decorative line */}
        <div className="w-24 h-1 bg-white/60 mx-auto mt-6 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;