import { Shield, Blocks } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-pink-400 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-12 h-12 text-yellow-300 mr-3 animate-pulse-glow" />
          <Blocks className="w-12 h-12 text-cyan-300 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
          <span className="typewriter">PRODUCT VERIFICATION SYSTEM</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cyan-200 font-light tracking-wider">
          THROUGH BLOCKCHAIN
        </p>
        
        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto mt-6 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;