import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Package, Shield, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productName: "",
    manufacturer: "",
    batchNumber: "",
    productionDate: "",
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate blockchain verification
    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% chance of being valid
      const result = {
        status: isValid ? "verified" : "invalid",
        blockHash: isValid ? "0x" + Math.random().toString(16).substring(2, 18) : null,
        timestamp: new Date().toISOString(),
        confidence: isValid ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 30) + 10,
      };
      
      setVerificationResult(result);
      setIsVerifying(false);
      
      toast({
        title: isValid ? "Product Verified!" : "Verification Failed",
        description: isValid 
          ? "Product authenticity confirmed on blockchain" 
          : "Product could not be verified",
        variant: isValid ? "default" : "destructive",
      });
    }, 2000);
  };

  const generateQRCode = () => {
    const qrData = `${formData.productName}-${formData.batchNumber}-${Date.now()}`;
    toast({
      title: "QR Code Generated",
      description: `QR Code data: ${qrData}`,
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Product Registration Form */}
        <Card className="bg-gradient-to-br from-slate-800 to-purple-800 border-purple-500/30 backdrop-blur-sm".
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-cyan-400 mr-2" />
              <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Product Registration
              </CardTitle>
            </div>
            <CardDescription className="text-gray-300">
              Enter product details for blockchain verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  name="productName"
                  placeholder="Enter product name"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-field">
                <Label htmlFor="manufacturer">Manufacturer</Label>
                <Input
                  id="manufacturer"
                  name="manufacturer"
                  placeholder="Enter manufacturer name"
                  value={formData.manufacturer}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-field">
                <Label htmlFor="batchNumber">Batch Number</Label>
                <Input
                  id="batchNumber"
                  name="batchNumber"
                  placeholder="Enter batch number"
                  value={formData.batchNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-field">
                <Label htmlFor="productionDate">Production Date</Label>
                <Input
                  id="productionDate"
                  name="productionDate"
                  type="date"
                  value={formData.productionDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <Button 
                  type="submit" 
                  variant="premium" 
                  className="flex-1"
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Verify Product
                    </>
                  )}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={generateQRCode}
                  className="hover-scale"
                >
                  <QrCode className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Verification Results */}
        <Card className="bg-gradient-to-br from-slate-800 to-blue-800 border-blue-500/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-400 mr-2" />
              <CardTitle className="text-2xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Verification Status
              </CardTitle>
            </div>
            <CardDescription className="text-gray-300">
              Real-time blockchain verification results
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!verificationResult && !isVerifying && (
              <div className="text-center py-12 text-muted-foreground">
                <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Submit product details to begin verification</p>
              </div>
            )}
            
            {isVerifying && (
              <div className="text-center py-12">
                <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-lg font-medium">Verifying on Blockchain...</p>
                <p className="text-sm text-muted-foreground">This may take a few moments</p>
              </div>
            )}
            
            {verificationResult && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  {verificationResult.status === "verified" ? (
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse-glow" />
                  ) : (
                    <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  )}
                  
                  <Badge 
                    variant={verificationResult.status === "verified" ? "default" : "destructive"}
                    className="text-lg px-4 py-2"
                  >
                    {verificationResult.status === "verified" ? "VERIFIED" : "INVALID"}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Confidence:</span>
                    <span className="font-medium">{verificationResult.confidence}%</span>
                  </div>
                  
                  {verificationResult.blockHash && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Block Hash:</span>
                      <span className="font-mono text-sm truncate ml-2">{verificationResult.blockHash}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timestamp:</span>
                    <span className="text-sm">{new Date(verificationResult.timestamp).toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setVerificationResult(null)}
                >
                  Reset Verification
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