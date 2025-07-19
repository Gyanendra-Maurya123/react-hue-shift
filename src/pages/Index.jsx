import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ProductForm from "@/components/ProductForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <ProductForm />
    </div>
  );
};

export default Index;