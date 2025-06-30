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
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Search bar */}
          <div className="relative w-[400px]">
            <div className="absolute left-3.5 top-3">
              <SearchIcon className="h-5 w-5 text-[#a2a2a2]" />
            </div>
            <Input
              className="pl-11 h-[46px] border-[#e2e2e2] text-[#a2a2a2] font-['Roboto',Helvetica] text-base"
              placeholder="Search for flooring, Hardwood, Vinyl ..."
            />
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img
              className="h-[78px] w-[84px]"
              alt="Logo"
              src="/figmaAssets/image-1-1.png"
            />
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                className="w-7 h-7"
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
        <div className="container mx-auto flex items-center justify-between px-4 h-[60px]">
          {/* Navigation links */}
          <ul className="flex items-center gap-[25px]">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center gap-[5px]">
                <span
                  className={`font-['Roboto',Helvetica] text-lg ${
                    item.active
                      ? "text-white font-medium"
                      : "text-[#ffffff80] font-normal"
                  }`}
                >
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronUpIcon className="h-2 w-[11px] text-[#ffffff80]" />
                )}
              </li>
            ))}
          </ul>

          {/* Contact us button */}
          <Button className="bg-white text-app-primary font-medium text-base rounded-none px-5 py-2.5 h-auto flex items-center gap-0.5">
            Contact us
            <img
              className="w-[26.27px] h-[26.27px]"
              alt="Arrow up"
              src="/figmaAssets/ph-arrow-up.svg"
            />
          </Button>
        </div>
      </nav>
    </footer>
  );
};
