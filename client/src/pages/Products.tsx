import React, { useState } from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, HeartIcon, ShoppingCartIcon, FilterIcon } from "lucide-react";

export const Products = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "hardwood", name: "Hardwood", count: 12 },
    { id: "laminate", name: "Laminate", count: 8 },
    { id: "vinyl", name: "Vinyl", count: 4 },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Oak Hardwood",
      category: "hardwood",
      price: 8.99,
      originalPrice: 12.99,
      rating: 4.8,
      reviews: 124,
      image: "/figmaAssets/rectangle-8.png",
      features: ["Water Resistant", "25 Year Warranty", "Easy Install"],
      description: "Beautiful oak hardwood flooring with rich grain patterns"
    },
    {
      id: 2,
      name: "Karndean Korlok Select Texas White Ash",
      category: "vinyl",
      price: 5.49,
      originalPrice: 7.99,
      rating: 4.6,
      reviews: 89,
      image: "/figmaAssets/rectangle-8-1.png",
      features: ["Waterproof", "Lifetime Warranty", "Click Lock"],
      description: "Luxury vinyl plank with authentic wood appearance"
    },
    {
      id: 3,
      name: "Mohawk RevWood Select Vintage",
      category: "laminate",
      price: 4.99,
      originalPrice: 6.99,
      rating: 4.7,
      reviews: 156,
      image: "/figmaAssets/rectangle-11.png",
      features: ["Scratch Resistant", "Pet Friendly", "Quick Install"],
      description: "High-quality laminate with advanced wear layer"
    },
    {
      id: 4,
      name: "Engineered Maple Flooring",
      category: "hardwood",
      price: 7.49,
      originalPrice: 9.99,
      rating: 4.9,
      reviews: 203,
      image: "/figmaAssets/rectangle-12.png",
      features: ["Natural Finish", "Eco-Friendly", "Refinishable"],
      description: "Sustainable engineered maple with stunning natural beauty"
    },
    {
      id: 5,
      name: "Luxury Vinyl Tile Collection",
      category: "vinyl",
      price: 3.99,
      originalPrice: 5.49,
      rating: 4.5,
      reviews: 98,
      image: "/figmaAssets/rectangle-13.png",
      features: ["Stone Look", "100% Waterproof", "Commercial Grade"],
      description: "Realistic stone appearance luxury vinyl tiles"
    },
    {
      id: 6,
      name: "Bamboo Strand Flooring",
      category: "hardwood",
      price: 6.99,
      originalPrice: 8.99,
      rating: 4.4,
      reviews: 76,
      image: "/figmaAssets/rectangle-14.png",
      features: ["Sustainable", "Harder than Oak", "Unique Grain"],
      description: "Eco-friendly bamboo strand woven flooring"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Product Collection
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Discover premium flooring solutions for every space and budget
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-2">
                Browse Our Collections
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} products available
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col gap-1 p-4"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {product.originalPrice > product.price && (
                      <Badge variant="destructive" className="bg-red-500">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <HeartIcon 
                      className={`w-5 h-5 ${
                        favorites.includes(product.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-gray-600"
                      }`}
                    />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs mb-2">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </Badge>
                    <h3 className="font-bold text-lg text-app-primary mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-app-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-sm text-gray-600">
                        /sq ft
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1 bg-app-primary hover:bg-app-primary/90">
                      <ShoppingCartIcon className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="px-4">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Why Choose Our Flooring?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every product in our collection meets our strict quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-app-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-app-primary mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest materials from trusted manufacturers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-app-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-app-primary mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional installation by certified craftsmen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-app-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-app-primary mb-2">Warranty Protection</h3>
              <p className="text-gray-600">Comprehensive warranties on all our products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our flooring experts are here to help you find the perfect solution for your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
              Request Samples
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};