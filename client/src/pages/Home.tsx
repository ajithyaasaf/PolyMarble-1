import {
  ArrowUpRightIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CollectionsSection } from "./sections/CollectionsSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Home = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: true },
    { name: "Hardwood", hasDropdown: true },
    { name: "Laminate", hasDropdown: true },
    { name: "Vinyl", hasDropdown: false },
    { name: "Testimonials", hasDropdown: false },
    { name: "Gallery", hasDropdown: false },
  ];

  // Carousel indicators
  const indicators = [
    { active: false },
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full relative">
        {/* Top info bar */}
        <header className="w-full h-auto min-h-[60px] bg-neutral-100">
          <div className="w-full h-full px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] flex flex-col sm:flex-row justify-between items-center py-2 sm:py-0 gap-2 sm:gap-0">
            <div className="font-normal text-app-primary text-sm sm:text-base text-center sm:text-left">
              Up to 50% Off Waterproof Floors
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[30px]">
              <div className="flex items-center gap-[5px]">
                <PhoneIcon className="w-[19px] h-[19px] text-app-primary" />
                <span className="font-medium text-app-primary text-xs sm:text-sm">
                  (+521) 112 123 123
                </span>
              </div>
              <div className="flex items-center gap-[7px]">
                <MailIcon className="w-[23px] h-[18px] text-app-primary" />
                <span className="font-medium text-app-primary text-xs sm:text-sm">
                  naimurhera@gmail.com
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main navigation */}
        <nav className="w-full h-auto min-h-[168px]">
          {/* Upper nav with logo and search */}
          <div className="w-full h-auto min-h-[108px] bg-white py-4 md:py-0">
            <div className="w-full h-full px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              {/* Mobile: Logo first */}
              <div className="order-1 md:order-2">
                <img
                  className="w-[60px] h-[56px] sm:w-[70px] sm:h-[65px] md:w-[84px] md:h-[78px]"
                  alt="Woodcove Flooring Logo"
                  src="/figmaAssets/image-1.png"
                />
              </div>

              {/* Search bar */}
              <div className="order-2 md:order-1 w-full max-w-[402px] md:w-[402px]">
                <div className="relative w-full max-w-[400px]">
                  <SearchIcon className="absolute w-4 h-4 sm:w-5 sm:h-5 top-3 sm:top-3.5 left-3 sm:left-3.5 text-[#a2a2a2]" />
                  <Input
                    className="pl-10 sm:pl-11 h-[40px] sm:h-[46px] border-[#e2e2e2] text-[#a2a2a2] text-sm sm:text-base"
                    placeholder="Search for flooring..."
                  />
                </div>
              </div>

              {/* Cart */}
              <div className="order-3 md:order-3 flex items-center gap-2">
                <div className="relative">
                  <ShoppingCartIcon className="w-6 h-6 sm:w-7 sm:h-7 text-app-primary" />
                  <span className="absolute w-3 h-3 sm:w-4 sm:h-4 top-0 left-1 sm:left-1.5 flex items-center justify-center">
                    <img
                      alt="Cart notification"
                      src="/figmaAssets/vector.svg"
                      className="w-full h-full"
                    />
                  </span>
                </div>
                <span className="font-normal text-app-primary text-sm sm:text-base">
                  Cart
                </span>
              </div>
            </div>
          </div>

          {/* Lower nav with menu items */}
          <div className="w-full h-auto min-h-[60px] bg-app-primary border-b border-[#195c75]">
            <div className="w-full h-full px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] flex flex-col md:flex-row justify-between items-center py-3 md:py-0 gap-4 md:gap-0">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-[25px]">
                {navItems.map((item, index) => (
                  <div
                    key={`nav-item-${index}`}
                    className={`flex items-center gap-[5px] ${
                      item.active
                        ? "font-medium text-white"
                        : "font-normal text-[#ffffff80]"
                    } text-sm sm:text-base md:text-lg cursor-pointer hover:text-white transition-colors`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <img
                        className="w-[9px] h-1.5 sm:w-[11px] sm:h-2"
                        alt="Dropdown indicator"
                        src="/figmaAssets/tabler-chevron-up.svg"
                      />
                    )}
                  </div>
                ))}
              </div>

              <Button className="bg-white text-app-primary font-medium text-sm sm:text-base h-[40px] sm:h-[45px] px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-0.5 hover:bg-gray-100 transition-colors">
                Contact us
                <ArrowUpRightIcon className="w-[20px] h-[20px] sm:w-[26.27px] sm:h-[26.27px]" />
              </Button>
            </div>
          </div>
        </nav>

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
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-[60px] relative">
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

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
