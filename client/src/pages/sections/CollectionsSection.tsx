import React from "react";
import { Button } from "@/components/ui/button";

export const CollectionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-row items-center justify-between w-full py-20 px-[100px] bg-white">
      <div className="relative w-full max-w-[663px]">
        <div className="relative h-[534px]">
          <img
            className="absolute w-[392px] h-[427px] top-[54px] left-0 object-cover"
            alt="Woodwork sample"
            src="/figmaAssets/rectangle-11.png"
          />
          <img
            className="absolute w-[392px] h-[534px] top-0 left-[218px] object-cover"
            alt="Woodwork showcase"
            src="/figmaAssets/rectangle-12.png"
          />
          <div className="inline-flex items-center justify-center px-5 py-[30px] absolute top-60 left-[466px] bg-app-primary shadow-[0px_5px_10px_#0000004c]">
            <p className="w-[157px] font-['Roboto',Helvetica] text-white text-xl text-center">
              <span className="font-normal">Company Of The </span>
              <span className="font-bold">Year Award</span>
              <span className="font-normal"> Winner</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[505px] items-start gap-5">
        <h2 className="font-['Roboto',Helvetica] font-bold text-app-primary text-5xl leading-normal">
          A Trendy Woodwork <br />
          for Trendy Home
        </h2>
        <p className="font-['Roboto',Helvetica] font-normal text-[#50646c] text-lg leading-normal">
          We are committed to providing our customers with super exceptional
          service while offering our employees the best training and a working
          environment in which they can excel best of all places.
        </p>
        <Button className="bg-app-primary hover:bg-app-primary/90 text-white font-medium px-5 py-2.5 rounded-none">
          Read more
        </Button>
      </div>
    </section>
  );
};
