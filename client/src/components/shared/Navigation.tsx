import {
  ArrowUpRightIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = (): JSX.Element => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: false },
    { name: "Team", href: "/team", hasDropdown: false },
    { name: "Gallery", href: "/gallery", hasDropdown: false },
    { name: "Testimonials", href: "/testimonials", hasDropdown: false },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
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
              <Link href="/">
                <img
                  className="w-[60px] h-[56px] sm:w-[70px] sm:h-[65px] md:w-[84px] md:h-[78px] cursor-pointer"
                  alt="Woodcove Flooring Logo"
                  src="/figmaAssets/image-1.png"
                />
              </Link>
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
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-[25px]">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <div
                    className={`flex items-center gap-[5px] ${
                      isActive(item.href)
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
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden w-full flex justify-between items-center">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-app-primary">
                  <SheetHeader>
                    <SheetTitle className="text-white">Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div
                          className={`flex items-center gap-2 p-3 rounded ${
                            isActive(item.href)
                              ? "bg-white text-app-primary font-medium"
                              : "text-white hover:bg-[#ffffff20]"
                          } transition-colors`}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                    {/* Contact option in mobile menu */}
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      <div
                        className={`flex items-center gap-2 p-3 rounded ${
                          isActive("/contact")
                            ? "bg-white text-app-primary font-medium"
                            : "text-white hover:bg-[#ffffff20]"
                        } transition-colors`}
                      >
                        Contact
                      </div>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
              
              {/* Brand name on mobile */}
              <span className="text-white font-medium text-sm">Woodcove Flooring</span>
            </div>

            {/* Contact button - Desktop only */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-white text-app-primary font-medium text-sm sm:text-base h-[40px] sm:h-[45px] px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-0.5 hover:bg-gray-100 transition-colors">
                  Contact us
                  <ArrowUpRightIcon className="w-[20px] h-[20px] sm:w-[26.27px] sm:h-[26.27px]" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};