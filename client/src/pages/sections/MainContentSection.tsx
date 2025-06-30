import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 py-16 w-full">
      <h2 className="font-roboto text-5xl text-center">
        <span className="font-normal text-[#083343]">MEET THE </span>
        <span className="font-bold text-app-primary">BUDDY TEAM</span>
      </h2>

      <p className="max-w-[534px] font-roboto font-normal text-[#50646c] text-lg text-center">
        Our dedicated team offers expert craftsmanship and exceptional service,
        ensuring your flooring project is completed to the highest standards.
      </p>
    </section>
  );
};
