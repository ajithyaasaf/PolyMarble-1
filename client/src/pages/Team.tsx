import React from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  MailIcon,
  AwardIcon,
  CalendarIcon,
  MapPinIcon
} from "lucide-react";

export const Team = (): JSX.Element => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "Founder & CEO",
      image: "/figmaAssets/rectangle-13.png",
      bio: "With over 20 years in the flooring industry, John founded Woodcove Flooring with a vision to provide exceptional quality and service to every customer.",
      experience: "20+ years",
      specialties: ["Business Strategy", "Customer Relations", "Quality Control"],
      certifications: ["Certified Flooring Inspector", "Business Management"],
      email: "john@woodcoveflooring.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Lead Designer & Project Manager",
      image: "/figmaAssets/rectangle-14.png",
      bio: "Jane brings creative vision and technical expertise to every project, ensuring both aesthetic appeal and functional excellence in all installations.",
      experience: "15+ years",
      specialties: ["Interior Design", "Project Management", "Custom Patterns"],
      certifications: ["Interior Design Certification", "PMP Certified"],
      email: "jane@woodcoveflooring.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Installation Manager",
      image: "/figmaAssets/rectangle-15.png",
      bio: "Mike oversees all installation projects with meticulous attention to detail, ensuring every floor meets our highest standards of craftsmanship.",
      experience: "18+ years",
      specialties: ["Hardwood Installation", "Team Leadership", "Quality Assurance"],
      certifications: ["Master Installer Certified", "Safety Management"],
      email: "mike@woodcoveflooring.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "Customer Relations Specialist",
      image: "/figmaAssets/rectangle-16.png",
      bio: "Emily ensures every customer receives personalized attention and support throughout their flooring journey, from consultation to completion.",
      experience: "8+ years",
      specialties: ["Customer Service", "Project Coordination", "Product Knowledge"],
      certifications: ["Customer Service Excellence", "Product Specialist"],
      email: "emily@woodcoveflooring.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Senior Installation Technician",
      image: "/figmaAssets/rectangle-11.png",
      bio: "David is our master craftsman with expertise in complex installations and custom work, bringing precision to every project.",
      experience: "12+ years",
      specialties: ["Complex Installations", "Refinishing", "Repair Work"],
      certifications: ["Advanced Installation Certified", "Refinishing Specialist"],
      email: "david@woodcoveflooring.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Sarah Martinez",
      role: "Sales & Consultation Expert",
      image: "/figmaAssets/rectangle-12.png",
      bio: "Sarah helps customers choose the perfect flooring solutions, combining product knowledge with design expertise to meet every need.",
      experience: "10+ years",
      specialties: ["Sales Consultation", "Product Education", "Design Advice"],
      certifications: ["Sales Professional", "Flooring Product Specialist"],
      email: "sarah@woodcoveflooring.com",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const companyStats = [
    {
      icon: <AwardIcon className="w-8 h-8 text-app-primary" />,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered installations"
    },
    {
      icon: <CalendarIcon className="w-8 h-8 text-app-primary" />,
      number: "15+",
      label: "Years Experience",
      description: "Combined team expertise"
    },
    {
      icon: <MapPinIcon className="w-8 h-8 text-app-primary" />,
      number: "3",
      label: "Service Areas",
      description: "Covering multiple regions"
    }
  ];

  const teamValues = [
    {
      title: "Excellence",
      description: "We strive for perfection in every installation and interaction.",
      icon: "🏆"
    },
    {
      title: "Integrity",
      description: "Honest communication and transparent business practices.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Staying current with latest techniques and technologies.",
      icon: "💡"
    },
    {
      title: "Teamwork",
      description: "Collaborative approach to deliver exceptional results.",
      icon: "👥"
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
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              The experts behind every beautiful floor installation
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
            Our Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-6">
            Experienced Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team brings together decades of experience, passion for quality, 
            and commitment to customer satisfaction. Each member is carefully selected for 
            their expertise and dedication to excellence.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {companyStats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg">
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
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} photo`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {member.experience} Experience
                    </Badge>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-app-primary mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-app-primary mb-2">Certifications:</h4>
                    <ul className="text-sm text-gray-600">
                      {member.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-app-primary rounded-full" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <LinkedinIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <TwitterIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MailIcon className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
            Our Values
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-6">
            What Drives Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The core principles that guide our work and define our culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamValues.map((value, index) => (
            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-app-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented professionals who share our passion for quality 
              and customer service. Explore career opportunities with Woodcove Flooring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
                Submit Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};