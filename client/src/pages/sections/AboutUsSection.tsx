import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const AboutUsSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: "name", placeholder: "Your name", type: "text", className: "w-full" },
    {
      id: "email",
      placeholder: "Your email",
      type: "email",
      className: "w-full",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-6 sm:gap-8 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          <p className="text-white font-normal mb-2 text-sm sm:text-base">GET IN TOUCH</p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-wider leading-tight">
            Needs Help? Let&apos;s Get in Touch
          </h2>
        </div>

        <Card className="bg-[#07232d] border-[#346171] rounded-md">
          <CardContent className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {formFields.map((field) => (
                <div key={field.id} className="w-full">
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    className={`bg-[#03181f] border-[#346171] h-[60px] px-5 text-[#727272] font-normal placeholder:text-[#727272] ${field.className}`}
                  />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <Input
                id="subject"
                placeholder="Subject"
                className="bg-[#03181f] border-[#346171] h-[60px] px-5 text-[#727272] font-normal placeholder:text-[#727272] w-full"
              />
            </div>

            <div className="mb-8">
              <Textarea
                id="message"
                placeholder="Message"
                className="bg-[#03181f] border-[#346171] h-52 px-5 py-4 text-[#727272] font-normal placeholder:text-[#727272] resize-none w-full"
              />
            </div>

            <Button className="bg-white text-app-primary hover:bg-white/90 font-medium text-sm tracking-wide px-8 py-2 h-auto">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          className="w-full max-w-[543px] h-auto object-contain"
          alt="Interior spaces showcase"
          src="/figmaAssets/group-89.png"
        />
      </div>
    </section>
  );
};
