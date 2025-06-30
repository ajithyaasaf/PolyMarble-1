import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Testimonial data for easier mapping
  const testimonials = [
    {
      name: "Sarah M.",
      image: "/figmaAssets/ellipse-23-1.svg",
      text: "Woodcove Flooring exceeded my expectations! The quality of the hardwood and the professionalism of the team were outstanding. My home looks stunning.",
    },
    {
      name: "James L.",
      image: "/figmaAssets/ellipse-23.svg",
      text: "The installation process was smooth and hassle-free. The team was knowledgeable and friendly. I highly recommend Woodcove Flooring for their excellent service.",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-[60px] py-6 px-4 sm:px-6">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="w-full max-w-[435px] md:w-[435px] bg-[#ffffff33] border border-white rounded-[10px]"
        >
          <CardContent className="p-4 sm:p-6 md:p-[30px] flex flex-col items-center">
            <Avatar className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mb-4 sm:mb-6">
              <AvatarImage
                src={testimonial.image}
                alt={`${testimonial.name} avatar`}
              />
            </Avatar>

            <div className="flex flex-col items-center gap-3 sm:gap-[15px]">
              <h3 className="text-white font-bold text-lg sm:text-xl text-center font-['Roboto',Helvetica] tracking-[0] leading-normal">
                {testimonial.name}
              </h3>

              <p className="text-white text-base sm:text-lg text-center font-['Roboto',Helvetica] font-normal tracking-[0] leading-normal">
                {testimonial.text}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
