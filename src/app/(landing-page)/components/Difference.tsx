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
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="grid w-full grid-cols-1 items-center gap-6 lg:gap-8 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="mb-4 lg:mb-6 md:text-[16px] text-sm uppercase text-p1">{tagline}</p>

          <h2 className="text-[22px] leading-snug text-primary md:text-[40px]">
            {title}
          </h2>

          {/* DESKTOP CTA BUTTONS */}
          <div className="mt-8 hidden lg:flex flex-wrap gap-3 lg:justify-start">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                  rounded-md
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

          <p className="mt-4 lg:mt-6 font-golden text-sm text-primary md:text-lg">
            — {note}
          </p>

          {/* MOBILE CTA BUTTONS */}
          <div className="mt-6 flex lg:hidden flex-row justify-center items-center gap-3">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                  flex-1
                  justify-center
                  rounded-md
                  px-3
                  py-2.5
                  text-xs
                  sm:text-sm
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
      </div>
    </SectionWithContainer>
  );
};

export default Difference;
