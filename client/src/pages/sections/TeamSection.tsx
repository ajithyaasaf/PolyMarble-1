import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/figmaAssets/rectangle-13.png",
      bio: "15+ years experience in flooring industry"
    },
    {
      name: "Jane Doe",
      role: "Lead Designer",
      image: "/figmaAssets/rectangle-14.png",
      bio: "Expert in interior design and space planning"
    },
    {
      name: "Mike Johnson",
      role: "Installation Manager",
      image: "/figmaAssets/rectangle-15.png",
      bio: "Certified installer with precision craftsmanship"
    },
    {
      name: "Emily Brown",
      role: "Customer Relations Specialist",
      image: "/figmaAssets/rectangle-16.png",
      bio: "Dedicated to excellent customer service"
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt={`${member.name} photo`}
                  src={member.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-app-primary font-bold text-xl leading-tight">
                  {member.name}
                </h3>
                <p className="text-app-primary/70 font-medium text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-[#50646c] text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Optional: Social links or contact info could go here */}
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-app-primary/10 rounded-full flex items-center justify-center hover:bg-app-primary hover:text-white transition-colors duration-200 cursor-pointer">
                      <span className="text-xs">@</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
