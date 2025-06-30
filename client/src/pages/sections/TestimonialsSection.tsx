import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TestimonialsSection = (): JSX.Element => {
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
    "About us",
    "Our team",
    "Privacy policy",
    "Contact us",
    "Terms of service",
  ];

  return (
    <footer className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-[61px] w-full py-6 sm:py-8 px-4 sm:px-6">
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
              className="w-[39px] h-[39px] p-0 bg-[#2b2b2b] rounded-[19.5px] border-none"
            >
              {social.icon}
            </Button>
          ))}
        </div>
      </div>

      {/* Our Services Column */}
      <div className="flex flex-col w-[179px]">
        <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-[22px] text-center tracking-[0] leading-normal mb-[41px]">
          Our Services
        </h3>

        <ul className="space-y-[34px]">
          {services.map((service, index) => (
            <li
              key={`service-${index}`}
              className="font-['Roboto',Helvetica] font-normal text-[#727272] text-base tracking-[0.48px] leading-normal whitespace-nowrap"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Useful Links Column */}
      <div className="flex flex-col w-[131px]">
        <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-[22px] text-center tracking-[0] leading-normal mb-[41px]">
          Useful links
        </h3>

        <ul className="space-y-[34px]">
          {usefulLinks.map((link, index) => (
            <li
              key={`link-${index}`}
              className={`font-['Roboto',Helvetica] font-normal text-[#727272] text-base tracking-[0.48px] leading-normal whitespace-nowrap ${
                index === usefulLinks.length - 1 ? "mt-[30px]" : ""
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Column */}
      <div className="flex flex-col w-[338px]">
        <h3 className="font-['Poppins',Helvetica] font-bold text-[#ffffff] text-[22px] text-center tracking-[0] leading-normal mb-[42px]">
          Newsletter
        </h3>

        <p className="w-[334px] font-['Poppins',Helvetica] font-normal text-[#727272] text-base tracking-[0.48px] leading-normal mb-[41px]">
          Stay updated on flooring trends and exclusive offers. Subscribe to the
          Woodcove Flooring newsletter!
        </p>

        <div className="flex flex-col gap-[10px]">
          <Input
            placeholder="Your email"
            className="w-[335px] h-10 bg-neutral-900 border border-solid border-[#346171] font-['Poppins',Helvetica] font-normal text-[#727272] text-sm tracking-[0.42px] leading-normal"
          />

          <Button className="w-[335px] h-10 bg-app-primary font-['Poppins',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0.42px] leading-normal">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};
