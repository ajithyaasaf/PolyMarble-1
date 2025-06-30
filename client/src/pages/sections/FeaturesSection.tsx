import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto items-center gap-4 sm:gap-5 py-6 sm:py-8 px-4 sm:px-6">
      <h1 className="font-['Roboto',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-center leading-tight md:leading-[66px]">
        Premium Hardwood Floors by Woodcove Flooring
      </h1>

      <p className="font-['Roboto',Helvetica] font-normal text-[#ffffffcc] text-base sm:text-lg text-center max-w-[621px] leading-relaxed">
        Discover the elegance and durability of our premium hardwood flooring.
        At Woodcove Flooring, we provide top-quality materials and expert
        craftsmanship to enhance your home or business.
      </p>

      <Button
        variant="default"
        className="bg-white text-app-primary hover:bg-white/90 flex items-center gap-0.5 pl-4 sm:pl-5 pr-3 sm:pr-[15px] py-2 sm:py-2.5 rounded-none mt-2"
      >
        <span className="font-['Roboto',Helvetica] font-medium text-sm sm:text-base">
          Contact us
        </span>
        <ArrowUpRightIcon className="w-[20px] h-[20px] sm:w-[26.27px] sm:h-[26.27px]" />
      </Button>
    </section>
  );
};
