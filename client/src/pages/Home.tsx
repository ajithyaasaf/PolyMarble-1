import {
  ArrowUpRightIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/shared/Layout";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CollectionsSection } from "./sections/CollectionsSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Home = (): JSX.Element => {
  // Carousel indicators
  const indicators = [
    { active: false },
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <Layout>
      {/* Hero section */}
      <section
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] 2xl:px-[200px]">
          {/* Hero content */}
          <div className="flex flex-col w-full max-w-4xl items-center gap-4 sm:gap-6 md:gap-8 text-center z-10">
            <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight max-w-5xl">
              Premium Hardwood Floors by Woodcove Flooring
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
              Discover the elegance and durability of our premium hardwood
              flooring. At Woodcove Flooring, we provide top-quality materials
              and expert craftsmanship to enhance your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-white text-app-primary hover:bg-gray-100 font-medium text-base h-12 px-8 flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                Get Quote
                <ArrowUpRightIcon className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary font-medium text-base h-12 px-8 transition-all duration-300">
                View Gallery
              </Button>
            </div>
          </div>

          {/* Carousel navigation - improved positioning */}
          <div className="absolute inset-y-0 left-4 right-4 flex justify-between items-center pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 pointer-events-auto transition-all duration-300"
            >
              <img
                className="w-3 h-5 sm:w-4 sm:h-6 rotate-180"
                alt="Previous slide"
                src="/figmaAssets/formkit-right-1.svg"
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 pointer-events-auto transition-all duration-300"
            >
              <img
                className="w-3 h-5 sm:w-4 sm:h-6"
                alt="Next slide"
                src="/figmaAssets/formkit-right.svg"
              />
            </Button>
          </div>
        </div>

        {/* Carousel indicators - improved positioning */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {indicators.map((indicator, index) => (
            <button
              key={`indicator-${index}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                indicator.active 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Collections Section */}
      <CollectionsSection />

      {/* Main Content Section */}
      <MainContentSection />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials Section */}
      <section 
        className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/figmaAssets/rectangle-17.png)" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center space-y-8 mb-16">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 h-0.5 bg-white"></span>
              <span className="text-white text-sm font-medium uppercase tracking-wider">
                Testimonials
              </span>
              <span className="w-12 h-0.5 bg-white"></span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              <span className="font-normal">What </span>
              <span className="font-bold">Our Customers</span>
              <span className="font-normal"> Say</span>
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-white/90 text-lg sm:text-xl leading-relaxed">
              Don't just take our word for it. Hear from our satisfied
              customers who have transformed their spaces with Woodcove
              Flooring's premium hardwood solutions.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <ServicesSection />
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3">
            {indicators.map((dot, index) => (
              <button
                key={`testimonial-dot-${index}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  dot.active 
                    ? "bg-white scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with dark blue background */}
      <section className="w-full bg-app-primary">
        <AboutUsSection />
      </section>

      {/* Footer with Testimonials */}
      <footer className="w-full bg-neutral-900">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-[60px] relative">
          <img
            className="w-[60px] h-[56px] sm:w-[70px] sm:h-[65px] md:w-[84px] md:h-[78px]"
            alt="Company logo"
            src="/figmaAssets/image-1.png"
          />

          <TestimonialsSection />

          <img
            className="w-full h-[2px] sm:h-[3px] mt-8 sm:mt-12 md:mt-16 lg:mt-[60px]"
            alt="Divider line"
            src="/figmaAssets/line-5.svg"
          />

          <div className="text-center mt-4 sm:mt-6 md:mt-[22px] font-normal text-[#727272] text-sm sm:text-base tracking-[0.08px] px-4">
            @copyright 2024 all right reserved by{" "}
            <a
              href="https://www.figma.com/@naimur1"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Naimur Rahman Hira
            </a>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
