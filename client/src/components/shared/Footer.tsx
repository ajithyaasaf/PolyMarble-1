import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export const Footer = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    { icon: <TwitterIcon className="w-5 h-5" />, alt: "Twitter" },
    { icon: <FacebookIcon className="w-5 h-5" />, alt: "Facebook" },
    { icon: <InstagramIcon className="w-5 h-5" />, alt: "Instagram" },
    { icon: <LinkedinIcon className="w-5 h-5" />, alt: "LinkedIn" },
  ];

  // Services data
  const services = ["HARDWOOD FLOORING", "HARDWOOD", "LAMINATE", "VINYL"];

  // Useful links data
  const usefulLinks = [
    { name: "About us", href: "/about" },
    { name: "Our team", href: "/team" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "Contact us", href: "/contact" },
    { name: "Terms of service", href: "/terms" },
  ];

  return (
    <footer className="w-full bg-neutral-900">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] py-8 sm:py-12 md:py-16 lg:py-[60px] relative">
        <img
          className="w-[60px] h-[56px] sm:w-[70px] sm:h-[65px] md:w-[84px] md:h-[78px] mb-8"
          alt="Company logo"
          src="/figmaAssets/image-1.png"
        />

        <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-[61px] w-full mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]">
          {/* About Company Column */}
          <div className="flex flex-col w-full md:w-[359px]">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-lg sm:text-xl md:text-[22px] text-center md:text-left tracking-[0] leading-normal mb-6 sm:mb-8 md:mb-11">
              ABOUT COMPANY
            </h3>

            <p className="w-full font-['Poppins',Helvetica] text-[#727272] text-sm sm:text-base tracking-[0.48px] font-normal leading-normal mb-6 sm:mb-8 text-center md:text-left">
              Woodcove Flooring offers premium hardwood flooring solutions with a
              focus on quality and craftsmanship. Our expert team is dedicated to
              transforming your spaces with beautiful, durable floors. Experience
              the difference with Woodcove Flooring.
            </p>

            <div className="flex gap-[10px] justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <Button
                  key={`social-${index}`}
                  variant="outline"
                  size="icon"
                  className="w-[39px] h-[39px] p-0 bg-[#2b2b2b] rounded-[19.5px] border-none hover:bg-[#444444] transition-colors"
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Our Services Column */}
          <div className="flex flex-col w-full md:w-[179px]">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-lg sm:text-xl md:text-[22px] text-center md:text-left tracking-[0] leading-normal mb-6 sm:mb-8 md:mb-[41px]">
              Our Services
            </h3>

            <ul className="space-y-4 sm:space-y-6 md:space-y-[34px]">
              {services.map((service, index) => (
                <li
                  key={`service-${index}`}
                  className="font-['Roboto',Helvetica] font-normal text-[#727272] text-sm sm:text-base tracking-[0.48px] leading-normal text-center md:text-left hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="flex flex-col w-full md:w-[131px]">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-lg sm:text-xl md:text-[22px] text-center md:text-left tracking-[0] leading-normal mb-6 sm:mb-8 md:mb-[41px]">
              Useful links
            </h3>

            <ul className="space-y-4 sm:space-y-6 md:space-y-[34px]">
              {usefulLinks.map((link, index) => (
                <li key={`link-${index}`}>
                  <Link href={link.href}>
                    <span className="font-['Roboto',Helvetica] font-normal text-[#727272] text-sm sm:text-base tracking-[0.48px] leading-normal text-center md:text-left hover:text-white transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col w-full md:w-[338px]">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-lg sm:text-xl md:text-[22px] text-center md:text-left tracking-[0] leading-normal mb-6 sm:mb-8 md:mb-[42px]">
              Newsletter
            </h3>

            <p className="w-full max-w-[334px] mx-auto md:mx-0 font-['Poppins',Helvetica] font-normal text-[#727272] text-sm sm:text-base tracking-[0.48px] leading-normal mb-6 sm:mb-8 md:mb-[41px] text-center md:text-left">
              Stay updated on flooring trends and exclusive offers. Subscribe to the
              Woodcove Flooring newsletter!
            </p>

            <div className="flex flex-col gap-2 sm:gap-[10px] w-full max-w-[335px] mx-auto md:mx-0">
              <Input
                placeholder="Your email"
                className="w-full h-10 bg-neutral-900 border border-solid border-[#346171] font-['Poppins',Helvetica] font-normal text-[#727272] text-sm tracking-[0.42px] leading-normal"
              />

              <Button className="w-full h-10 bg-app-primary hover:bg-app-primary/90 font-['Poppins',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0.42px] leading-normal">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <img
          className="w-full h-[2px] sm:h-[3px]"
          alt="Divider line"
          src="/figmaAssets/line-5.svg"
        />

        <div className="text-center mt-4 sm:mt-6 md:mt-[22px] font-normal text-[#727272] text-sm sm:text-base tracking-[0.08px] px-4">
          @copyright 2024 all right reserved by{" "}
          <a
            href="https://www.figma.com/@naimur1"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-white transition-colors"
          >
            Naimur Rahman Hira
          </a>
        </div>
      </div>
    </footer>
  );
};