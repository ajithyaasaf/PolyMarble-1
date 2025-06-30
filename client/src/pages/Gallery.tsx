import React, { useState } from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FilterIcon, 
  SearchIcon, 
  ExternalLinkIcon,
  PlayIcon,
  ImageIcon,
  StarIcon
} from "lucide-react";

export const Gallery = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Projects", count: 24 },
    { id: "residential", name: "Residential", count: 16 },
    { id: "commercial", name: "Commercial", count: 8 },
    { id: "luxury", name: "Luxury", count: 6 },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Home",
      category: "luxury",
      type: "Hardwood Installation",
      location: "Beverly Hills, CA",
      area: "2,500 sq ft",
      year: "2024",
      image: "/figmaAssets/rectangle-8.png",
      description: "Premium oak hardwood flooring installation in a contemporary luxury home",
      features: ["Custom Staining", "Radiant Heating Compatible", "High Gloss Finish"],
      rating: 5.0,
      testimonial: "Absolutely stunning work! The attention to detail was exceptional."
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "commercial",
      type: "Luxury Vinyl",
      location: "Downtown LA",
      area: "10,000 sq ft",
      year: "2024",
      image: "/figmaAssets/rectangle-8-1.png",
      description: "Commercial-grade luxury vinyl flooring for high-traffic office space",
      features: ["Heavy Duty", "Sound Dampening", "Quick Installation"],
      rating: 4.9,
      testimonial: "Professional team, completed on time and within budget."
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      category: "residential",
      type: "Hardwood Refinishing",
      location: "Pasadena, CA",
      area: "1,800 sq ft",
      year: "2023",
      image: "/figmaAssets/rectangle-11.png",
      description: "Careful restoration of original 1920s hardwood floors",
      features: ["Historic Preservation", "Custom Matching", "Period Appropriate"],
      rating: 5.0,
      testimonial: "They brought our 100-year-old floors back to life beautifully."
    },
    {
      id: 4,
      title: "Contemporary Family Home",
      category: "residential",
      type: "Engineered Hardwood",
      location: "Manhattan Beach, CA",
      area: "3,200 sq ft",
      year: "2024",
      image: "/figmaAssets/rectangle-12.png",
      description: "Wide-plank engineered hardwood throughout open-concept home",
      features: ["Wide Plank", "Pet Friendly", "Moisture Resistant"],
      rating: 4.8,
      testimonial: "Perfect choice for our active family. Durable and beautiful."
    },
    {
      id: 5,
      title: "Boutique Hotel Lobby",
      category: "commercial",
      type: "Luxury Vinyl Plank",
      location: "West Hollywood, CA",
      area: "5,000 sq ft",
      year: "2023",
      image: "/figmaAssets/rectangle-13.png",
      description: "High-end luxury vinyl with custom patterns for hotel entrance",
      features: ["Custom Design", "High Traffic Rated", "Slip Resistant"],
      rating: 4.9,
      testimonial: "The design perfectly complements our hotel's aesthetic."
    },
    {
      id: 6,
      title: "Penthouse Apartment",
      category: "luxury",
      type: "Exotic Hardwood",
      location: "Century City, CA",
      area: "4,000 sq ft",
      year: "2024",
      image: "/figmaAssets/rectangle-14.png",
      description: "Premium Brazilian cherry hardwood with custom borders",
      features: ["Exotic Wood", "Custom Borders", "Hand-Scraped Finish"],
      rating: 5.0,
      testimonial: "Truly exceptional craftsmanship. Worth every penny."
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const beforeAfterProjects = [
    {
      title: "Victorian Home Restoration",
      before: "/figmaAssets/rectangle-15.png",
      after: "/figmaAssets/rectangle-16.png",
      description: "Complete refinishing of damaged 1890s hardwood floors"
    },
    {
      title: "Water Damage Repair",
      before: "/figmaAssets/rectangle-11.png",
      after: "/figmaAssets/rectangle-12.png",
      description: "Full restoration after water damage, better than original"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/figmaAssets/image-3.png)" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Explore our portfolio of beautiful flooring installations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
                Our Work
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-600">
                {filteredProjects.length} projects showcasing our expertise
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4" />
                Advanced Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <SearchIcon className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col gap-1 p-4"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </Button>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{project.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-app-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg text-sm">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <div className="font-medium">{project.location}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Area:</span>
                      <div className="font-medium">{project.area}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 italic mb-3">
                      "{project.testimonial}"
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-app-primary hover:bg-app-primary/90 text-sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
              Transformations
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Before & After
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic transformations we achieve
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {beforeAfterProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={project.before}
                        alt="Before"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="destructive">Before</Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={project.after}
                        alt="After"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2">
                        <Badge className="bg-green-500">After</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-app-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
            Video Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
            Hear From Our Customers
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((video, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={`/figmaAssets/rectangle-${13 + index}.png`}
                  alt={`Video testimonial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <Button size="lg" className="rounded-full bg-white/90 text-app-primary hover:bg-white">
                    <PlayIcon className="w-6 h-6" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    Customer Story
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Create Your Dream Floor?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your vision and create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Project detail"
              className="w-full h-full object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};