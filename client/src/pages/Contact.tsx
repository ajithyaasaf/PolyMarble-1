import React, { useState } from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  ClockIcon,
  MessageSquareIcon,
  CalendarIcon,
  CheckCircleIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = (): JSX.Element => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-app-primary" />,
      title: "Visit Our Showroom",
      details: [
        "123 Flooring Avenue",
        "Woodcove, WC 12345",
        "United States"
      ]
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-app-primary" />,
      title: "Call Us",
      details: [
        "(+521) 112 123 123",
        "Mon-Fri: 8AM-6PM",
        "Sat: 9AM-4PM"
      ]
    },
    {
      icon: <MailIcon className="w-6 h-6 text-app-primary" />,
      title: "Email Us",
      details: [
        "naimurhera@gmail.com",
        "info@woodcoveflooring.com",
        "24/7 Support"
      ]
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-app-primary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8AM - 6PM",
        "Saturday: 9AM - 4PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    "Hardwood Installation",
    "Laminate Flooring",
    "Vinyl Flooring",
    "Floor Refinishing",
    "Commercial Projects",
    "Consultation"
  ];

  const faqs = [
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We offer complimentary in-home consultations and estimates for all projects."
    },
    {
      question: "How long does installation typically take?",
      answer: "Most residential projects are completed within 2-5 days, depending on the size and complexity."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with several financing companies to offer flexible payment plans."
    },
    {
      question: "What's included in your warranty?",
      answer: "We provide comprehensive warranties covering both materials and installation workmanship."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: ""
      });
      setIsSubmitting(false);
    }, 2000);
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
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform your space? Let's discuss your flooring project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
                Send Message
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
                Let's Start Your Project
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select 
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your flooring project, room size, timeline, and any specific requirements..."
                      required
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-app-primary hover:bg-app-primary/90 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <MessageSquareIcon className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
                Contact Info
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
                Get In Touch Today
              </h2>
              <p className="text-gray-600">
                Multiple ways to reach us. We're here to help with your flooring needs.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-l-4 border-l-app-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-app-primary mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full h-12 bg-app-primary hover:bg-app-primary/90">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="w-full h-12">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now: (+521) 112 123 123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-app-primary border-app-primary">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-app-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <CheckCircleIcon className="w-6 h-6 text-app-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-app-primary text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            For urgent flooring issues or emergency repairs, our team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-app-primary hover:bg-gray-100">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Emergency Hotline
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-app-primary">
              <MessageSquareIcon className="w-5 h-5 mr-2" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};