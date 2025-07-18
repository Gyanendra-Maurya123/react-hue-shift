import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Package, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    manufacturerId: "",
    productName: "",
    productSN: "",
    productBrand: "",
    productPrice: "",
  });

  const [showQR, setShowQR] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = Object.entries(formData);
    const emptyFields = requiredFields.filter(([_, value]) => !value.trim());
    
    if (emptyFields.length > 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate successful submission
    toast({
      title: "Product Added Successfully! ✨",
      description: "Your product has been registered on the blockchain.",
    });

    // Show QR code
    setShowQR(true);
  };

  const generateNewQR = () => {
    setShowQR(false);
    setTimeout(() => setShowQR(true), 100);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border/30 shadow-glow-primary hover-lift">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-primary mr-3" />
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <CardTitle className="text-3xl font-bold text-gradient">
              Add Product
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Register your product on the blockchain for authenticity verification
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 field-focus">
                  <Label htmlFor="manufacturerId" className="text-sm font-medium text-foreground">
                    Manufacturer ID
                  </Label>
                  <Input
                    id="manufacturerId"
                    value={formData.manufacturerId}
                    onChange={(e) => handleInputChange("manufacturerId", e.target.value)}
                    placeholder="Enter manufacturer ID"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2 field-focus">
                  <Label htmlFor="productName" className="text-sm font-medium text-foreground">
                    Product Name
                  </Label>
                  <Input
                    id="productName"
                    value={formData.productName}
                    onChange={(e) => handleInputChange("productName", e.target.value)}
                    placeholder="Enter product name"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2 field-focus">
                  <Label htmlFor="productSN" className="text-sm font-medium text-foreground">
                    Product Serial Number
                  </Label>
                  <Input
                    id="productSN"
                    value={formData.productSN}
                    onChange={(e) => handleInputChange("productSN", e.target.value)}
                    placeholder="Enter serial number"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2 field-focus">
                  <Label htmlFor="productBrand" className="text-sm font-medium text-foreground">
                    Product Brand
                  </Label>
                  <Input
                    id="productBrand"
                    value={formData.productBrand}
                    onChange={(e) => handleInputChange("productBrand", e.target.value)}
                    placeholder="Enter brand name"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2 field-focus md:col-span-2">
                  <Label htmlFor="productPrice" className="text-sm font-medium text-foreground">
                    Product Price
                  </Label>
                  <Input
                    id="productPrice"
                    type="number"
                    value={formData.productPrice}
                    onChange={(e) => handleInputChange("productPrice", e.target.value)}
                    placeholder="Enter price"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg"
                  className="min-w-48 font-bold text-lg"
                >
                  <Package className="mr-2" />
                  Add the Product
                </Button>
              </div>
            </form>

            {showQR && (
              <div className="mt-12 text-center animate-fade-in">
                <div className="flex items-center justify-center mb-4">
                  <QrCode className="w-6 h-6 text-primary mr-2" />
                  <span className="text-lg font-semibold text-gradient">Product QR Code</span>
                </div>
                
                <div className="inline-block p-6 bg-white rounded-xl shadow-glow-secondary hover-lift">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-primary" />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 mb-4">
                  Scan this QR code to verify product authenticity
                </p>
                
                <Button 
                  onClick={generateNewQR}
                  variant="secondary"
                  size="sm"
                >
                  Generate New QR
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductForm;