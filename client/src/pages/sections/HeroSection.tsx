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
    <section className="w-full h-[400px] flex items-center justify-center py-24 bg-[linear-gradient(0deg,rgba(2,23,31,0.7)_0%,rgba(2,23,31,0.7)_100%),url(..//figmaAssets/frame-102.png)_50%_50%_/_cover]">
      <div className="container flex justify-between max-w-4xl">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center gap-5 p-1">
              <div className="flex flex-col w-[60px] items-center gap-[25px]">
                <img
                  className="w-20 h-20 object-cover"
                  alt="Statistic icon"
                  src={stat.image}
                />
                <img
                  className="w-[52px] h-0.5"
                  alt="Divider line"
                  src="/figmaAssets/line-1.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2.5 w-full">
                <div className="font-extrabold text-white text-4xl text-center [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal]">
                  {stat.number}
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
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
