import React from "react";
import { Button } from "@/components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CollectionsSection } from "./sections/CollectionsSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Home = (): JSX.Element => {
  // Pagination dots data
  const paginationDots = [
    { active: false },
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        {/* Top notification bar */}
        <header className="w-full h-[60px] bg-neutral-100">
          <div className="container mx-auto px-6 h-full flex justify-between items-center">
            <div className="font-normal text-app-primary text-base">
              Up to 50% Off Waterproof Floors
            </div>

            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-[5px]">
                <img
                  className="w-[19px] h-[19px]"
                  alt="Phone icon"
                  src="/figmaAssets/fluent-call-24-filled.svg"
                />
                <span className="font-medium text-app-primary text-sm">
                  (+521) 112 123 123
                </span>
              </div>

              <div className="flex items-center gap-[7px]">
                <img
                  className="w-[23px] h-[18px]"
                  alt="Email icon"
                  src="/figmaAssets/clarity-envelope-line.svg"
                />
                <span className="font-medium text-app-primary text-sm">
                  naimurhera@gmail.com
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <HeroSection />

        {/* Main banner section with slider */}
        <section className="w-full h-[650px] bg-[url(/figmaAssets/image-3.png)] bg-cover bg-center relative">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="relative w-full">
              {/* Slider navigation buttons */}
              <div className="flex justify-between w-full">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-[46px] h-[46px] rounded-full bg-[#08334380] border-[#ffffff33] rotate-180"
                >
                  <img
                    className="w-[13px] h-[30px] -rotate-180"
                    alt="Previous slide"
                    src="/figmaAssets/formkit-right-1.svg"
                  />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-[46px] h-[46px] rounded-full bg-[#08334380] border-[#ffffff33]"
                >
                  <img
                    className="w-[13px] h-[30px]"
                    alt="Next slide"
                    src="/figmaAssets/formkit-right-2.svg"
                  />
                </Button>
              </div>

              {/* Features section */}
              <FeaturesSection />
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-[10px] mt-auto mb-[37px]">
              {paginationDots.map((dot, index) => (
                <div
                  key={`dot-${index}`}
                  className={`w-[13px] h-[13px] rounded-full ${
                    dot.active ? "bg-white" : "border border-white"
                  }`}
                />
              ))}
            </div>
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
        <section className="w-full h-[700px] bg-[url(/figmaAssets/rectangle-17.png)] bg-cover bg-center relative">
          <div className="container mx-auto px-6 h-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-5 mt-[90px]">
              <h2 className="text-5xl text-white">
                <span className="font-normal">What </span>
                <span className="font-bold">Our Customers</span>
                <span className="font-normal"> Say</span>
              </h2>

              <p className="max-w-[534px] text-center text-white text-lg">
                Don&apos;t just take our word for it. Hear from our satisfied
                customers who have transformed their spaces with Woodcove
                Flooring.
              </p>
            </div>

            {/* Services Section */}
            <ServicesSection />

            {/* Pagination dots */}
            <div className="flex justify-center gap-[10px] mt-auto mb-[120px]">
              {paginationDots.map((dot, index) => (
                <div
                  key={`testimonial-dot-${index}`}
                  className={`w-[13px] h-[13px] rounded-full ${
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
          <div className="container mx-auto px-6 py-[60px] relative">
            <img
              className="w-[84px] h-[78px]"
              alt="Company logo"
              src="/figmaAssets/image-1.png"
            />

            <TestimonialsSection />

            <img
              className="w-full h-[3px] mt-[60px]"
              alt="Divider line"
              src="/figmaAssets/line-5.svg"
            />

            <div className="text-center mt-[22px] font-normal text-[#727272] text-base tracking-[0.08px]">
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

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
