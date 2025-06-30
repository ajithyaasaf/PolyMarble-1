import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-app-primary"></span>
            <span className="text-app-primary text-sm font-medium uppercase tracking-wider">
              Our Team
            </span>
            <span className="w-12 h-0.5 bg-app-primary"></span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="font-normal text-[#083343]">MEET THE </span>
            <span className="font-bold text-app-primary">EXPERT TEAM</span>
          </h2>

          {/* Description */}
          <p className="text-[#50646c] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Our dedicated team of flooring professionals brings years of expertise, 
            exceptional craftsmanship, and personalized service to every project. 
            From design consultation to final installation, we ensure your flooring 
            project exceeds expectations.
          </p>

          {/* Stats or highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-app-primary">15+</div>
              <div className="text-[#50646c] text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-app-primary">500+</div>
              <div className="text-[#50646c] text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-app-primary">100%</div>
              <div className="text-[#50646c] text-sm uppercase tracking-wider">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
