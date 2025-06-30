import React, { useState } from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { 
  StarIcon, 
  QuoteIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FilterIcon
} from "lucide-react";

export const Testimonials = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Reviews", count: 45 },
    { id: "residential", name: "Residential", count: 32 },
    { id: "commercial", name: "Commercial", count: 13 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      category: "residential",
      location: "Beverly Hills, CA",
      project: "Hardwood Installation",
      rating: 5,
      date: "March 2024",
      avatar: "/figmaAssets/ellipse-23-1.svg",
      quote: "Woodcove Flooring exceeded every expectation! The team was professional, punctual, and delivered absolutely stunning results. Our hardwood floors look incredible and the quality is outstanding.",
      details: "3,200 sq ft • Oak Hardwood • 4 days installation"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      category: "commercial",
      location: "Downtown LA",
      project: "Commercial Vinyl Installation",
      rating: 5,
      date: "February 2024",
      avatar: "/figmaAssets/ellipse-23.svg",
      quote: "For our restaurant renovation, we needed flooring that could handle heavy traffic while looking elegant. Woodcove delivered perfectly. The installation was completed during our closure window without any delays.",
      details: "8,500 sq ft • Luxury Vinyl • 3 days installation"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      category: "residential",
      location: "Manhattan Beach, CA",
      project: "Floor Refinishing",
      rating: 5,
      date: "January 2024",
      avatar: "/figmaAssets/ellipse-23-1.svg",
      quote: "As a designer, I work with many contractors, but Woodcove stands out. Their attention to detail and craftsmanship is exceptional. They brought my vision to life perfectly.",
      details: "2,800 sq ft • Refinishing & Staining • 5 days"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Property Manager",
      category: "commercial",
      location: "West Hollywood, CA",
      project: "Multi-Unit Renovation",
      rating: 5,
      date: "December 2023",
      avatar: "/figmaAssets/ellipse-23.svg",
      quote: "We hired Woodcove for a 12-unit apartment renovation. They managed the project flawlessly, coordinating with tenants and completing each unit on schedule. Outstanding service.",
      details: "15,000 sq ft • Laminate Flooring • 3 weeks"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Homeowner",
      category: "residential",
      location: "Pasadena, CA",
      project: "Luxury Vinyl Installation",
      rating: 5,
      date: "November 2023",
      avatar: "/figmaAssets/ellipse-23-1.svg",
      quote: "From consultation to completion, the experience was seamless. The team was knowledgeable, respectful of our home, and the final result is beautiful. Highly recommend!",
      details: "1,600 sq ft • Waterproof Vinyl • 2 days installation"
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Homeowner",
      category: "residential",
      location: "Santa Monica, CA",
      project: "Custom Hardwood Pattern",
      rating: 5,
      date: "October 2023",
      avatar: "/figmaAssets/ellipse-23.svg",
      quote: "We wanted a unique herringbone pattern for our living room. Woodcove's craftsmen executed it flawlessly. The precision and quality are evident in every detail.",
      details: "1,200 sq ft • Custom Pattern • 6 days installation"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      project: "Kitchen & Living Room Remodel",
      thumbnail: "/figmaAssets/rectangle-13.png",
      duration: "2:45"
    },
    {
      id: 2,
      name: "Tom Wilson",
      project: "Office Building Renovation",
      thumbnail: "/figmaAssets/rectangle-14.png",
      duration: "3:12"
    },
    {
      id: 3,
      name: "Amanda Foster",
      project: "Historic Home Restoration",
      thumbnail: "/figmaAssets/rectangle-15.png",
      duration: "4:08"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", description: "Satisfied clients nationwide" },
    { number: "4.9/5", label: "Average Rating", description: "Based on 200+ reviews" },
    { number: "98%", label: "Repeat Customers", description: "Would recommend us" },
    { number: "15+", label: "Years Experience", description: "Industry expertise" }
  ];

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Customer Testimonials
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Real stories from satisfied customers who transformed their spaces
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
              Our Track Record
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Numbers That Speak
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence reflected in customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-4xl font-bold text-app-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
                Customer Reviews
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-2">
                What Our Customers Say
              </h2>
              <p className="text-gray-600">
                {filteredTestimonials.length} verified reviews
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4" />
                Filter Reviews
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-app-primary" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-app-primary">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <QuoteIcon className="w-8 h-8 text-app-primary/20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic leading-relaxed pl-6">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{testimonial.details}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
              Video Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Hear Their Stories
            </h2>
            <p className="text-lg text-gray-600">
              Watch real customers share their experiences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Featured Video */}
            <Card className="mb-8 overflow-hidden">
              <div className="relative h-80 bg-gray-200">
                <img
                  src={videoTestimonials[currentVideoIndex].thumbnail}
                  alt={videoTestimonials[currentVideoIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="rounded-full bg-white/90 text-app-primary hover:bg-white">
                    <PlayIcon className="w-8 h-8" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {videoTestimonials[currentVideoIndex].name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {videoTestimonials[currentVideoIndex].project}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {videoTestimonials[currentVideoIndex].duration}
                    </Badge>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevVideo}
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextVideo}
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </Card>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {videoTestimonials.map((video, index) => (
                <Card 
                  key={video.id} 
                  className={`cursor-pointer transition-all ${
                    index === currentVideoIndex ? 'ring-2 ring-app-primary' : 'hover:shadow-md'
                  }`}
                  onClick={() => setCurrentVideoIndex(index)}
                >
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the same exceptional service and quality that our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
              Get Your Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};