import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "HOME", active: false },
    { label: "MANUFACTURER", active: true },
    { label: "SELLER", active: false },
    { label: "CONSUMER", active: false },
  ];

  return (
    <nav className="bg-muted/20 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 py-4">
          {navItems.map((item, index) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "nav"}
              size="sm"
              className={`
                ${item.active ? "animate-pulse-glow" : ""}
                transition-smooth font-medium tracking-wide
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