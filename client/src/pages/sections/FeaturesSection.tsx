import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto items-center gap-5 py-8">
      <h1 className="font-['Roboto',Helvetica] font-bold text-white text-[64px] text-center leading-[66px]">
        Premium Hardwood Floors by Woodcove Flooring
      </h1>

      <p className="font-['Roboto',Helvetica] font-normal text-[#ffffffcc] text-lg text-center max-w-[621px]">
        Discover the elegance and durability of our premium hardwood flooring.
        At Woodcove Flooring, we provide top-quality materials and expert
        craftsmanship to enhance your home or business.
      </p>

      <Button
        variant="default"
        className="bg-white text-app-primary hover:bg-white/90 flex items-center gap-0.5 pl-5 pr-[15px] py-2.5 rounded-none"
      >
        <span className="font-['Roboto',Helvetica] font-medium text-base">
          Contact us
        </span>
        <ArrowUpRightIcon className="w-[26.27px] h-[26.27px]" />
      </Button>
    </section>
  );
};
