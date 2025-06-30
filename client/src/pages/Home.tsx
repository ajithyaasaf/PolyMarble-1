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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Top info bar */}
        <header className="w-full h-[60px] bg-neutral-100">
          <div className="max-w-[1440px] h-full mx-auto px-[100px] flex justify-between items-center">
            <div className="font-normal text-app-primary text-base">
              Up to 50% Off Waterproof Floors
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-[5px]">
                <PhoneIcon className="w-[19px] h-[19px] text-app-primary" />
                <span className="font-medium text-app-primary text-sm">
                  (+521) 112 123 123
                </span>
              </div>
              <div className="flex items-center gap-[7px]">
                <MailIcon className="w-[23px] h-[18px] text-app-primary" />
                <span className="font-medium text-app-primary text-sm">
                  naimurhera@gmail.com
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main navigation */}
        <nav className="w-full h-[168px]">
          {/* Upper nav with logo and search */}
          <div className="w-full h-[108px] bg-white">
            <div className="max-w-[1440px] h-full mx-auto px-[100px] flex justify-between items-center">
              <div className="w-[402px]">
                <div className="relative w-[400px]">
                  <SearchIcon className="absolute w-5 h-5 top-3.5 left-3.5 text-[#a2a2a2]" />
                  <Input
                    className="pl-11 h-[46px] border-[#e2e2e2] text-[#a2a2a2]"
                    placeholder="SearchIcon for flooring, Hardwood, Vinyl ..."
                  />
                </div>
              </div>

              <img
                className="w-[84px] h-[78px]"
                alt="Woodcove Flooring Logo"
                src="/figmaAssets/image-1.png"
              />

              <div className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingCartIcon className="w-7 h-7 text-app-primary" />
                  <span className="absolute w-4 h-4 top-0 left-1.5 flex items-center justify-center">
                    <img
                      alt="Cart notification"
                      src="/figmaAssets/vector.svg"
                    />
                  </span>
                </div>
                <span className="font-normal text-app-primary text-base">
                  Cart
                </span>
              </div>
            </div>
          </div>

          {/* Lower nav with menu items */}
          <div className="w-full h-[60px] bg-app-primary border-b border-[#195c75]">
            <div className="max-w-[1440px] h-full mx-auto px-[100px] flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                {navItems.map((item, index) => (
                  <div
                    key={`nav-item-${index}`}
                    className={`flex items-center gap-[5px] ${
                      item.active
                        ? "font-medium text-white"
                        : "font-normal text-[#ffffff80]"
                    } text-lg`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <img
                        className="w-[11px] h-2"
                        alt="Dropdown indicator"
                        src="/figmaAssets/tabler-chevron-up.svg"
                      />
                    )}
                  </div>
                ))}
              </div>

              <Button className="bg-white text-app-primary font-medium text-base h-[45px] px-5 py-2.5 flex items-center gap-0.5">
                Contact us
                <ArrowUpRightIcon className="w-[26.27px] h-[26.27px]" />
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <section
          className="w-full h-[650px] bg-cover bg-center relative"
          style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}
        >
          <div className="absolute w-full max-w-[1240px] h-[281px] top-[184px] left-1/2 -translate-x-1/2">
            {/* Hero content */}
            <div className="flex flex-col w-[792px] items-center gap-5 mx-auto">
              <h1 className="font-bold text-white text-[64px] text-center leading-[66px]">
                Premium Hardwood Floors by Woodcove Flooring
              </h1>
              <p className="w-[621px] font-normal text-[#ffffffcc] text-lg text-center">
                Discover the elegance and durability of our premium hardwood
                flooring. At Woodcove Flooring, we provide top-quality materials
                and expert craftsmanship to enhance your home or business.
              </p>
              <Button className="bg-white text-app-primary font-medium text-base h-[45px] px-5 py-2.5 flex items-center gap-0.5">
                Contact us
                <ArrowUpRightIcon className="w-[26.27px] h-[26.27px]" />
              </Button>
            </div>

            {/* Carousel navigation */}
            <div className="absolute w-full flex justify-between items-center top-[118px]">
              <Button
                variant="outline"
                size="icon"
                className="w-[46px] h-[46px] rounded-full bg-[#08334380] border-[#ffffff33] rotate-180"
              >
                <img
                  className="-rotate-180 w-[13px] h-[30px]"
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
                  src="/figmaAssets/formkit-right.svg"
                />
              </Button>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-[37px] left-1/2 -translate-x-1/2 flex gap-[10px]">
            {indicators.map((indicator, index) => (
              <div
                key={`indicator-${index}`}
                className={`w-[13px] h-[13px] rounded-full ${
                  indicator.active ? "bg-white" : "border border-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Testimonials section */}
        <section className="absolute top-[3475px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5">
          <h2 className="text-white text-5xl text-center">
            <span className="font-normal">What </span>
            <span className="font-bold">Our Customers</span>
            <span className="font-normal"> Say</span>
          </h2>
          <p className="w-[534px] font-normal text-white text-lg text-center">
            Don&apos;t just take our word for it. Hear from our satisfied
            customers who have transformed their spaces with Woodcove Flooring.
          </p>
        </section>

        {/* Testimonial carousel indicators */}
        <div className="absolute top-[3965px] left-1/2 -translate-x-1/2 flex gap-[10px]">
          {indicators.map((indicator, index) => (
            <div
              key={`testimonial-indicator-${index}`}
              className={`w-[13px] h-[13px] rounded-full ${
                indicator.active ? "bg-white" : "border border-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
