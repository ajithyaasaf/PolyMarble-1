import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Testimonial data for easier mapping
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      image: "/figmaAssets/ellipse-23-1.svg",
      text: "Woodcove Flooring exceeded my expectations! The quality of the hardwood and the professionalism of the team were outstanding. My home looks absolutely stunning.",
      rating: 5
    },
    {
      name: "James Richardson",
      role: "Business Owner",
      image: "/figmaAssets/ellipse-23.svg", 
      text: "The installation process was smooth and hassle-free. The team was knowledgeable and friendly. I highly recommend Woodcove Flooring for their excellent service.",
      rating: 5
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-white/30'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="flex-1 max-w-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
            {/* Avatar */}
            <Avatar className="w-16 h-16 border-2 border-white/30">
              <AvatarImage
                src={testimonial.image}
                alt={`${testimonial.name} avatar`}
                className="object-cover"
              />
            </Avatar>

            {/* Rating */}
            <div className="flex gap-1">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-white text-lg leading-relaxed italic">
              "{testimonial.text}"
            </blockquote>

            {/* Author Info */}
            <div className="space-y-1">
              <h3 className="text-white font-bold text-xl">
                {testimonial.name}
              </h3>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                {testimonial.role}
              </p>
            </div>

            {/* Quote Icon */}
            <div className="mt-4 text-white/20 text-4xl">
              "
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
