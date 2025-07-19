import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "HOME", active: false },
    { label: "MANUFACTURER", active: true },
    { label: "SELLER", active: false },
    { label: "CONSUMER", active: false },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 backdrop-blur-sm border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 py-4">
          {navItems.map((item, index) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "nav"}
              size="sm"
              className={`
                ${item.active ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse-glow" : "bg-slate-700 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"}
                transition-smooth font-medium tracking-wide border border-purple-400/30
              `}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;