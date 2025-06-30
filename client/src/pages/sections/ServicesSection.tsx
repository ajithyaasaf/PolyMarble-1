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
    <div className="w-full flex justify-center gap-[60px] py-6">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="w-[435px] bg-[#ffffff33] border border-white rounded-[10px]"
        >
          <CardContent className="p-[30px] flex flex-col items-center">
            <Avatar className="w-[60px] h-[60px] mb-6">
              <AvatarImage
                src={testimonial.image}
                alt={`${testimonial.name} avatar`}
              />
            </Avatar>

            <div className="flex flex-col items-center gap-[15px]">
              <h3 className="text-white font-bold text-xl text-center font-['Roboto',Helvetica] tracking-[0] leading-normal">
                {testimonial.name}
              </h3>

              <p className="text-white text-lg text-center font-['Roboto',Helvetica] font-normal tracking-[0] leading-normal">
                {testimonial.text}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
