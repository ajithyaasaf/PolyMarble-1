import React from "react";
import { Button } from "@/components/ui/button";

export const CollectionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-[100px] bg-white gap-8 lg:gap-0">
      <div className="relative w-full max-w-[663px] order-2 lg:order-1">
        <div className="relative h-[300px] sm:h-[400px] md:h-[534px]">
          <img
            className="absolute w-[250px] sm:w-[320px] md:w-[392px] h-[230px] sm:h-[300px] md:h-[427px] top-[40px] sm:top-[54px] left-0 object-cover"
            alt="Woodwork sample"
            src="/figmaAssets/rectangle-11.png"
          />
          <img
            className="absolute w-[250px] sm:w-[320px] md:w-[392px] h-[300px] sm:h-[400px] md:h-[534px] top-0 left-[120px] sm:left-[160px] md:left-[218px] object-cover"
            alt="Woodwork showcase"
            src="/figmaAssets/rectangle-12.png"
          />
          <div className="inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-4 sm:py-6 md:py-[30px] absolute top-[150px] sm:top-[200px] md:top-60 left-[250px] sm:left-[320px] md:left-[466px] bg-app-primary shadow-[0px_5px_10px_#0000004c]">
            <p className="w-[120px] sm:w-[140px] md:w-[157px] font-['Roboto',Helvetica] text-white text-sm sm:text-lg md:text-xl text-center">
              <span className="font-normal">Company Of The </span>
              <span className="font-bold">Year Award</span>
              <span className="font-normal"> Winner</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[505px] items-start gap-4 sm:gap-5 order-1 lg:order-2 text-center lg:text-left">
        <h2 className="font-['Roboto',Helvetica] font-bold text-app-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal">
          A Trendy Woodwork <br />
          for Trendy Home
        </h2>
        <p className="font-['Roboto',Helvetica] font-normal text-[#50646c] text-base sm:text-lg leading-normal">
          We are committed to providing our customers with super exceptional
          service while offering our employees the best training and a working
          environment in which they can excel best of all places.
        </p>
        <Button className="bg-app-primary hover:bg-app-primary/90 text-white font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-none text-sm sm:text-base mx-auto lg:mx-0">
          Read more
        </Button>
      </div>
    </section>
  );
};
