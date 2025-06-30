import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    {
      image: "/figmaAssets/image-4.png",
      number: "500+",
      label: "APARTMENTS",
    },
    {
      image: "/figmaAssets/image-4-1.png",
      number: "350+",
      label: "COMMERCIAL PROJECTS",
    },
    {
      image: "/figmaAssets/image-4-2.png",
      number: "25+",
      label: "SPORTS COMPLEX",
    },
    {
      image: "/figmaAssets/image-4-3.png",
      number: "20+",
      label: "RESORTS & ENCLOSURES",
    },
  ];

  return (
    <section className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center py-8 sm:py-16 md:py-24 bg-[linear-gradient(0deg,rgba(2,23,31,0.7)_0%,rgba(2,23,31,0.7)_100%),url(..//figmaAssets/frame-102.png)_50%_50%_/_cover]">
      <div className="container flex flex-col sm:flex-row justify-between items-center max-w-4xl px-4 sm:px-6 gap-8 sm:gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-transparent border-none shadow-none w-full sm:w-auto">
            <CardContent className="flex flex-col items-center gap-3 sm:gap-5 p-1">
              <div className="flex flex-col w-[50px] sm:w-[60px] items-center gap-4 sm:gap-[25px]">
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  alt="Statistic icon"
                  src={stat.image}
                />
                <img
                  className="w-[40px] sm:w-[52px] h-0.5"
                  alt="Divider line"
                  src="/figmaAssets/line-1.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 w-full">
                <div className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl text-center [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal]">
                  {stat.number}
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[normal] px-2">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
