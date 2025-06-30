import { ChevronUpIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FooterSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true, hasDropdown: false },
    { label: "Hardwood", active: false, hasDropdown: true },
    { label: "Laminate", active: false, hasDropdown: true },
    { label: "Vinyl", active: false, hasDropdown: false },
    { label: "Testimonials", active: false, hasDropdown: false },
    { label: "Gallery", active: false, hasDropdown: false },
  ];

  return (
    <footer className="w-full">
      {/* Top section with logo and search */}
      <div className="w-full bg-white py-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] gap-4 md:gap-0">
          {/* Mobile: Logo first */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              className="h-[60px] w-[65px] sm:h-[70px] sm:w-[75px] md:h-[78px] md:w-[84px]"
              alt="Logo"
              src="/figmaAssets/image-1-1.png"
            />
          </div>

          {/* Search bar */}
          <div className="order-2 md:order-1 relative w-full max-w-[400px] md:w-[400px]">
            <div className="absolute left-3 sm:left-3.5 top-3">
              <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#a2a2a2]" />
            </div>
            <Input
              className="pl-10 sm:pl-11 h-[40px] sm:h-[46px] border-[#e2e2e2] text-[#a2a2a2] font-['Roboto',Helvetica] text-sm sm:text-base"
              placeholder="Search for flooring..."
            />
          </div>

          {/* Cart */}
          <div className="order-3 md:order-3 flex items-center gap-2">
            <div className="relative">
              <img
                className="w-6 h-6 sm:w-7 sm:h-7"
                alt="Cart icon"
                src="/figmaAssets/mdi-cart-outline.svg"
              />
              <img
                className="absolute w-4 h-4 top-[-13px] left-1.5"
                alt="Cart notification"
                src="/figmaAssets/vector.svg"
              />
            </div>
            <span className="font-['Roboto',Helvetica] text-app-primary text-base">
              Cart
            </span>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <nav className="w-full bg-app-primary border-b border-[#195c75]">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] py-3 md:py-0 md:h-[60px] gap-4 md:gap-0">
          {/* Navigation links */}
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-[25px]">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center gap-[5px]">
                <span
                  className={`font-['Roboto',Helvetica] text-sm sm:text-base md:text-lg ${
                    item.active
                      ? "text-white font-medium"
                      : "text-[#ffffff80] font-normal"
                  }`}
                >
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronUpIcon className="h-1.5 sm:h-2 w-[9px] sm:w-[11px] text-[#ffffff80]" />
                )}
              </li>
            ))}
          </ul>

          {/* Contact us button */}
          <Button className="bg-white text-app-primary font-medium text-sm sm:text-base rounded-none px-4 sm:px-5 py-2 sm:py-2.5 h-auto flex items-center gap-0.5">
            Contact us
            <img
              className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26.27px] md:h-[26.27px]"
              alt="Arrow up"
              src="/figmaAssets/ph-arrow-up.svg"
            />
          </Button>
        </div>
      </nav>
    </footer>
  );
};
