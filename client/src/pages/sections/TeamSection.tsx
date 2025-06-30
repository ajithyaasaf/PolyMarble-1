import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/figmaAssets/rectangle-13.png",
    },
    {
      name: "Jane Doe",
      role: "Lead Designer",
      image: "/figmaAssets/rectangle-14.png",
    },
    {
      name: "Mike Johnson",
      role: "Installation Manager",
      image: "/figmaAssets/rectangle-15.png",
    },
    {
      name: "Emily Brown",
      role: "Customer Relations Specialist",
      image: "/figmaAssets/rectangle-16.png",
    },
  ];

  return (
    <section className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-5 w-full py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
      {teamMembers.map((member, index) => (
        <Card
          key={index}
          className="w-full max-w-[280px] sm:w-[280px] md:w-[295px] h-auto border-none rounded-none shadow-none"
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
            <img
              className="w-full h-full object-cover"
              alt={`${member.name} photo`}
              src={member.image}
            />
          </div>

          <CardContent className="flex flex-col items-center justify-center h-auto min-h-[100px] sm:min-h-[129px] p-0 bg-neutral-50 border border-solid border-[#e7e7e7]">
            <div className="flex flex-col items-center gap-2 sm:gap-2.5 py-4 sm:py-[25px] px-4 sm:px-8 md:px-[69px] w-full">
              <h3 className="text-app-primary font-bold text-lg sm:text-xl text-center tracking-[0] leading-normal [font-family:'Roboto',Helvetica] w-full">
                {member.name}
              </h3>
              <p className="font-normal text-[#50646c] text-base sm:text-lg text-center tracking-[0] leading-normal [font-family:'Roboto',Helvetica] w-full whitespace-normal">
                {member.role}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
