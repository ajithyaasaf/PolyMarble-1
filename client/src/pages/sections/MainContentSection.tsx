import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 sm:gap-5 py-8 sm:py-12 md:py-16 w-full px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[200px]">
      <h2 className="font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        <span className="font-normal text-[#083343]">MEET THE </span>
        <span className="font-bold text-app-primary">BUDDY TEAM</span>
      </h2>

      <p className="max-w-[534px] font-roboto font-normal text-[#50646c] text-base sm:text-lg text-center leading-relaxed">
        Our dedicated team offers expert craftsmanship and exceptional service,
        ensuring your flooring project is completed to the highest standards.
      </p>
    </section>
  );
};
