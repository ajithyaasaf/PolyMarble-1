import React from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, TrophyIcon, UsersIcon, ClockIcon } from "lucide-react";

export const About = (): JSX.Element => {
  const stats = [
    {
      icon: <UsersIcon className="w-8 h-8 text-app-primary" />,
      number: "500+",
      label: "Happy Customers",
      description: "Satisfied clients across the region"
    },
    {
      icon: <TrophyIcon className="w-8 h-8 text-app-primary" />,
      number: "15+",
      label: "Years Experience",
      description: "Decades of flooring expertise"
    },
    {
      icon: <CheckIcon className="w-8 h-8 text-app-primary" />,
      number: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered installations"
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-app-primary" />,
      number: "24/7",
      label: "Customer Support",
      description: "Always here when you need us"
    },
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We use only the finest materials and employ skilled craftsmen to ensure every installation meets our high standards.",
      icon: "🏆"
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen to your needs and work tirelessly to exceed your expectations.",
      icon: "❤️"
    },
    {
      title: "Innovation",
      description: "We stay ahead of industry trends and use the latest techniques and technologies in flooring installation.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and offer sustainable flooring options for environmentally conscious customers.",
      icon: "🌱"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Woodcove Flooring
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Transforming spaces with premium hardwood flooring solutions since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
              Our Story
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-app-primary mb-6">
              Crafting Beautiful Floors for Over a Decade
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2009, Woodcove Flooring began as a small family business with a simple mission: 
              to provide exceptional hardwood flooring solutions that transform ordinary spaces into extraordinary ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-app-primary mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that quality flooring is more than just a surface – it's the foundation of your home's comfort and style. 
                Our team of skilled craftsmen is dedicated to delivering exceptional results that stand the test of time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From residential homes to commercial spaces, we've built our reputation on reliability, 
                quality workmanship, and outstanding customer service.
              </p>
            </div>
            <div className="relative">
              <img
                src="/figmaAssets/rectangle-11.png"
                alt="Woodcove team at work"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-app-primary mb-4">
              Why Choose Woodcove?
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-app-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
            Our Values
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-app-primary mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values guide every decision we make and every project we undertake
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-app-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your flooring project and bring your vision to life with our expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};