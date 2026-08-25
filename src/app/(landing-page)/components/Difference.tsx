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
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="mb-6 md:text-[16px] text-sm uppercase text-p1">{tagline}</p>

          <h2 className="text-3xl text-primary md:text-[40px] ">
            {title}
          </h2>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
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
          <p className="md:text-[22px] text-grey text-lg">
            {description}
          </p>

          <p className="mt-6 font-golden text-sm text-primary md:text-lg">
            — {note}
          </p>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Difference;
