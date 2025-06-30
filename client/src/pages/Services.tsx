import React from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HammerIcon, 
  PaintbrushIcon, 
  ShieldCheckIcon,
  ClockIcon,
  WrenchIcon,
  TrophyIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from "lucide-react";

export const Services = (): JSX.Element => {
  const mainServices = [
    {
      icon: <HammerIcon className="w-12 h-12 text-app-primary" />,
      title: "Hardwood Installation",
      description: "Professional installation of premium hardwood flooring with precision and care.",
      features: ["Site preparation", "Professional installation", "Quality finishing", "Clean-up service"],
      price: "Starting at $8/sq ft",
      duration: "2-5 days",
      warranty: "25 years"
    },
    {
      icon: <WrenchIcon className="w-12 h-12 text-app-primary" />,
      title: "Laminate Flooring",
      description: "High-quality laminate flooring installation for durability and style.",
      features: ["Moisture barrier", "Click-lock installation", "Trim and molding", "Furniture moving"],
      price: "Starting at $4/sq ft",
      duration: "1-3 days",
      warranty: "15 years"
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-app-primary" />,
      title: "Vinyl Flooring",
      description: "Waterproof luxury vinyl installation perfect for any room.",
      features: ["Waterproof installation", "Pattern matching", "Seamless finish", "Quick turnaround"],
      price: "Starting at $3/sq ft",
      duration: "1-2 days",
      warranty: "20 years"
    },
    {
      icon: <PaintbrushIcon className="w-12 h-12 text-app-primary" />,
      title: "Floor Refinishing",
      description: "Restore your existing hardwood floors to their original beauty.",
      features: ["Sanding & preparation", "Stain application", "Protective coating", "Dust containment"],
      price: "Starting at $3/sq ft",
      duration: "3-4 days",
      warranty: "10 years"
    }
  ];

  const additionalServices = [
    {
      title: "Floor Repair",
      description: "Expert repair of damaged flooring sections",
      icon: "🔧"
    },
    {
      title: "Subfloor Preparation",
      description: "Complete subfloor assessment and preparation",
      icon: "📐"
    },
    {
      title: "Custom Patterns",
      description: "Unique design patterns and inlays",
      icon: "🎨"
    },
    {
      title: "Commercial Projects",
      description: "Large-scale commercial flooring solutions",
      icon: "🏢"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency flooring repair services",
      icon: "🚨"
    },
    {
      title: "Maintenance Plans",
      description: "Ongoing maintenance and care programs",
      icon: "📅"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free Consultation",
      description: "We visit your space to assess needs and provide detailed estimates"
    },
    {
      step: 2,
      title: "Design & Planning",
      description: "Choose materials, finalize design, and schedule installation"
    },
    {
      step: 3,
      title: "Site Preparation",
      description: "Prepare the space with proper protection and equipment setup"
    },
    {
      step: 4,
      title: "Professional Installation",
      description: "Expert installation by certified craftsmen with quality checkpoints"
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Thorough quality check and walkthrough with satisfaction guarantee"
    }
  ];

  const whyChooseUs = [
    {
      icon: <TrophyIcon className="w-8 h-8 text-app-primary" />,
      title: "15+ Years Experience",
      description: "Decades of expertise in residential and commercial flooring"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-app-primary" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage"
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-app-primary" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all installation work"
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-app-primary" />,
      title: "On-Time Delivery",
      description: "Reliable scheduling with projects completed on time"
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
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive flooring solutions from consultation to installation
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
            Core Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-6">
            Complete Flooring Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final installation, we provide comprehensive flooring services 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-app-primary/10 rounded-lg group-hover:bg-app-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-app-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Price</div>
                    <div className="font-semibold text-app-primary">{service.price}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-semibold text-app-primary">{service.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Warranty</div>
                    <div className="font-semibold text-app-primary">{service.warranty}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-app-primary hover:bg-app-primary/90">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized services to meet all your flooring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-app-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach ensuring quality results and customer satisfaction
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-app-primary/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-app-primary rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRightIcon className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 text-app-primary/60" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-app-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Why Choose Woodcove Flooring?
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart in the flooring industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-app-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed estimate for your flooring project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
              Call Now: (+521) 112 123 123
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};