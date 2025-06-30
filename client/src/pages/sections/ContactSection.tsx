import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ContactSection = (): JSX.Element => {
  // Product data for the carousel
  const products = [
    {
      id: 1,
      title: "Karndean Korlok Select Texas White Ash Luxury Vinyl Plank",
      price: "$5.40",
      originalPrice: "$7.20",
      image: "/figmaAssets/rectangle-8.png",
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "Mohawk RevWood Select Rare Vintage CDL74 Laminate Plank",
      price: "$7.20",
      image: "/figmaAssets/rectangle-8-1.png",
      badge: "Premium"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#e5eef2] to-[#f0f7fa] w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-app-primary text-sm font-medium uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-app-primary"></span>
                Featured Products
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-app-primary leading-tight">
                Explore Our Hardwood Collections
              </h2>
              <p className="text-[#50646c] text-lg sm:text-xl leading-relaxed">
                Browse our wide selection of high-quality hardwood flooring options.
                From classic to contemporary, Woodcove Flooring offers a variety of
                styles, colors, and finishes to suit any décor.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-app-primary hover:bg-app-primary/90 text-white h-12 px-8 text-lg transition-all duration-300">
                View All Products
              </Button>
              <Button variant="outline" className="border-app-primary text-app-primary hover:bg-app-primary hover:text-white h-12 px-8 text-lg transition-all duration-300">
                Request Samples
              </Button>
            </div>
          </div>

          {/* Products Carousel Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative px-4 md:px-8 lg:px-12">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className="p-0 relative">
                          {/* Product Badge */}
                          {product.badge && (
                            <div className="absolute top-4 left-4 z-10 bg-app-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                              {product.badge}
                            </div>
                          )}
                          
                          {/* Product Image */}
                          <div className="relative overflow-hidden">
                            <img
                              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                              alt={product.title}
                              src={product.image}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                          </div>
                          
                          {/* Product Info */}
                          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                            <h3 className="font-bold text-app-primary text-base sm:text-lg leading-tight line-clamp-2">
                              {product.title}
                            </h3>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                              <div className="flex items-center gap-2">
                                <span className="text-xl sm:text-2xl font-bold text-app-primary">
                                  {product.price}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-base sm:text-lg text-gray-500 line-through">
                                    {product.originalPrice}
                                  </span>
                                )}
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-app-primary hover:bg-app-primary/90 text-white px-4 sm:px-6 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Modern Carousel Controls - Hidden on small screens, visible on larger */}
                <CarouselPrevious className="hidden md:flex left-2 bg-white/90 backdrop-blur-sm border-0 text-app-primary hover:bg-app-primary hover:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
                <CarouselNext className="hidden md:flex right-2 bg-white/90 backdrop-blur-sm border-0 text-app-primary hover:bg-app-primary hover:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
              </Carousel>
            </div>

            {/* Carousel Indicators - Always visible for mobile navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === 0
                      ? "bg-app-primary scale-125"
                      : "bg-app-primary/30 hover:bg-app-primary/60"
                  }`}
                />
              ))}
            </div>

            {/* Modern Mobile Navigation */}
            <div className="flex justify-center gap-3 mt-6 md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="bg-white/80 backdrop-blur-sm text-app-primary hover:bg-app-primary hover:text-white rounded-full w-12 h-12 p-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                ←
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="bg-white/80 backdrop-blur-sm text-app-primary hover:bg-app-primary hover:text-white rounded-full w-12 h-12 p-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
