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
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] bg-cover bg-center relative"
        style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}
      >
        <div className="absolute w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] 2xl:px-[200px]">
          {/* Hero content */}
          <div className="flex flex-col w-full max-w-[792px] items-center gap-3 sm:gap-4 md:gap-5 mx-auto">
            <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[1.1] xl:leading-[66px] px-2">
              Premium Hardwood Floors by Woodcove Flooring
            </h1>
            <p className="w-full max-w-[621px] font-normal text-[#ffffffcc] text-sm sm:text-base md:text-lg text-center px-4">
              Discover the elegance and durability of our premium hardwood
              flooring. At Woodcove Flooring, we provide top-quality materials
              and expert craftsmanship to enhance your home or business.
            </p>
            <Button className="bg-white text-app-primary font-medium text-sm sm:text-base h-[40px] sm:h-[45px] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-0.5 mt-2">
              Contact us
              <ArrowUpRightIcon className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26.27px] md:h-[26.27px]" />
            </Button>
          </div>

          {/* Carousel navigation */}
          <div className="absolute w-full max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-4rem)] md:max-w-full flex justify-between items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Button
              variant="outline"
              size="icon"
              className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-[#08334380] border-[#ffffff33] rotate-180"
            >
              <img
                className="-rotate-180 w-[10px] h-[20px] sm:w-[12px] sm:h-[26px] md:w-[13px] md:h-[30px]"
                alt="Previous slide"
                src="/figmaAssets/formkit-right-1.svg"
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-[#08334380] border-[#ffffff33]"
            >
              <img
                className="w-[10px] h-[20px] sm:w-[12px] sm:h-[26px] md:w-[13px] md:h-[30px]"
                alt="Next slide"
                src="/figmaAssets/formkit-right.svg"
              />
            </Button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[37px] left-1/2 -translate-x-1/2 flex gap-[8px] sm:gap-[10px]">
          {indicators.map((indicator, index) => (
            <div
              key={`indicator-${index}`}
              className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[13px] md:h-[13px] rounded-full ${
                indicator.active ? "bg-white" : "border border-white"
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

      {/* Testimonials background section */}
      <section className="w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-[url(/figmaAssets/rectangle-17.png)] bg-cover bg-center relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-8 md:mt-12 lg:mt-[90px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center px-4">
              <span className="font-normal">What </span>
              <span className="font-bold">Our Customers</span>
              <span className="font-normal"> Say</span>
            </h2>

            <p className="max-w-[534px] w-full text-center text-white text-sm sm:text-base md:text-lg px-4">
              Don&apos;t just take our word for it. Hear from our satisfied
              customers who have transformed their spaces with Woodcove
              Flooring.
            </p>
          </div>

          {/* Services Section */}
          <ServicesSection />

          {/* Pagination dots */}
          <div className="flex justify-center gap-[8px] sm:gap-[10px] mt-auto mb-8 sm:mb-12 md:mb-16 lg:mb-[120px]">
            {indicators.map((dot, index) => (
              <div
                key={`testimonial-dot-${index}`}
                className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[13px] md:h-[13px] rounded-full ${
                  dot.active ? "bg-white" : "border border-white"
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
