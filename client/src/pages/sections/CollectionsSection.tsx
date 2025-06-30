import React from "react";
import { Button } from "@/components/ui/button";

export const CollectionsSection = (): JSX.Element => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Section */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  className="w-4/5 h-5/6 object-cover shadow-2xl rounded-lg"
                  alt="Premium woodwork sample"
                  src="/figmaAssets/rectangle-11.png"
                />
              </div>
              
              {/* Foreground Image */}
              <div className="absolute top-16 right-0 w-4/5 h-full">
                <img
                  className="w-full h-5/6 object-cover shadow-2xl rounded-lg"
                  alt="Elegant flooring showcase"
                  src="/figmaAssets/rectangle-12.png"
                />
              </div>
              
              {/* Award Badge */}
              <div className="absolute bottom-8 right-8 bg-app-primary text-white p-6 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center space-y-1">
                  <div className="text-lg font-bold">2024</div>
                  <div className="text-sm font-normal">Company Of The</div>
                  <div className="text-base font-bold">YEAR AWARD</div>
                  <div className="text-sm font-normal">Winner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              {/* Section Label */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-8 h-0.5 bg-app-primary"></span>
                <span className="text-app-primary text-sm font-medium uppercase tracking-wider">
                  About Us
                </span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-app-primary leading-tight">
                Trendy Woodwork for Trendy Homes
              </h2>
              
              {/* Description */}
              <p className="text-[#50646c] text-lg sm:text-xl leading-relaxed">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training and a working
                environment where excellence thrives. Our award-winning approach
                combines traditional craftsmanship with modern innovation.
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-app-primary rounded-full"></div>
                <span className="text-[#50646c]">Premium quality materials</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-app-primary rounded-full"></div>
                <span className="text-[#50646c]">Expert craftsmanship</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-app-primary rounded-full"></div>
                <span className="text-[#50646c]">Award-winning service</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button className="bg-app-primary hover:bg-app-primary/90 text-white h-12 px-8 text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
              <Button 
                variant="outline" 
                className="border-app-primary text-app-primary hover:bg-app-primary hover:text-white h-12 px-8 text-lg transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
