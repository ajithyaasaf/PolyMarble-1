import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ContactSection = (): JSX.Element => {
  // Product data for the carousel
  const products = [
    {
      id: 1,
      title: "Karndean Korlok Select Texas White Ash Luxury Vinyl Plank",
      price: "$5.4",
      image: "/figmaAssets/rectangle-8.png",
    },
    {
      id: 2,
      title: "Mohawk RevWood Select Rare Vintage CDL74 Laminate Plank",
      price: "$7.2",
      image: "/figmaAssets/rectangle-8-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-between p-12 bg-[#e5eef2]">
      <div className="flex flex-col lg:flex-row w-full max-w-[1240px] gap-8 items-center justify-between">
        <div className="flex flex-col w-full lg:w-[505px] items-start justify-center gap-5">
          <h2 className="font-bold text-app-primary text-5xl font-['Roboto',Helvetica]">
            Explore Our Hardwood Collections
          </h2>

          <p className="text-[#50646c] text-lg font-['Roboto',Helvetica]">
            Browse our wide selection of high-quality hardwood flooring options.
            From classic to contemporary, Woodcove Flooring offers a variety of
            styles, colors, and finishes to suit any décor. Find the perfect
            floor for your space today
          </p>
        </div>

        <div className="w-full lg:w-[702px]">
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2">
                  <Card className="w-[296px] h-[342px] border border-solid border-[#e4e4e4] bg-white">
                    <CardContent className="p-0 relative h-full">
                      <img
                        className="w-[276px] h-[200px] mx-auto mt-[9px] object-cover"
                        alt={product.title}
                        src={product.image}
                      />
                      <div className="px-3.5 mt-4">
                        <h3 className="font-bold text-app-primary text-base font-['Roboto',Helvetica]">
                          {product.title}
                        </h3>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-3.5 pb-[9px]">
                        <Button className="bg-app-primary text-white font-medium text-base font-['Roboto',Helvetica] px-5 py-2.5">
                          Add to cart
                        </Button>
                        <span className="font-normal text-[#727272] text-lg font-['Roboto',Helvetica]">
                          {product.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ffffffcc] border-2 border-solid border-white rounded-[5px] w-10 h-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ffffffcc] border-2 border-solid border-white rounded-[5px] w-10 h-10" />
          </Carousel>

          <div className="flex justify-center mt-4 gap-[23px]">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className={`w-[13px] h-[13px] rounded-[6.5px] ${
                  index === 1
                    ? "bg-app-primary"
                    : "border border-solid border-[#083343]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
