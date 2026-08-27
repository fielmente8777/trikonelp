"use client";

import LinkButton from "@/src/components/buttons/LinkButton";
import { SectionWithContainer } from "@/src/components/sectionComponants";

interface DifferenceProps {
  tagline: string;
  title: string;
  description: string;
  note: string;
  buttons: {
    label: string;
    link: string;
  }[];
}

const Difference = ({
  tagline,
  title,
  description,
  note,
  buttons,
}: DifferenceProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-secondary md:py-24">
      <div className="grid w-full grid-cols-1 items-center gap-6 md:gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="mb-4 lg:mb-6 md:text-[16px] text-sm uppercase text-p1">
            {tagline}
          </p>

          <h2 className="text-2xl text-primary font-round md:text-[40px] ">
            {title}
          </h2>

          {/* DESKTOP CTA BUTTONS */}
          <div className="mt-8 hidden  md:grid grid-cols-2 max-w-[400px] gap-3">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                  justify-center
                  rounded-md
                  w-full!
                  px-6
                  py-3
                  ${
                    index === 0
                      ? "border border-primary bg-white text-primary"
                      : "bg-primary text-white"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-sm text-grey sm:text-base md:text-[22px] leading-relaxed">
            {description}
          </p>

          <p className="mt-6 font-golden text-sm font-cormorant text-primary md:text-lg">
            — {note}
          </p>

          {/* MOBILE CTA BUTTONS */}
          <div className="mt-6  lg:hidden flex flex-col  gap-3">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                  uppercase
                  w-full
                  justify-center
                  rounded-md
                  px-3
                  py-2.5
                  text-xs
                  sm:text-sm
                  ${
                    index === 0
                      ? "border border-primary bg-white text-primary"
                      : "bg-primary text-secondary"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Difference;
