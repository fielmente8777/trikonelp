"use client";

import Image from "next/image";
import LinkButton from "@/src/components/buttons/LinkButton";
import {
  Section,
  SectionWithContainer,
} from "@/src/components/sectionComponants";

interface DiningSectionProps {
  tagline: string;
  title: string;
  description: string;
  features: string[];
  images: {
    image: string;
    alt: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const DiningSection = ({
  tagline,
  title,
  description,
  features,
  images,
  buttons,
}: DiningSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="w-full">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
          {/* LEFT - IMAGES */}
          <div className="grid w-full grid-cols-[1.72fr_1fr] gap-2 aspect-[1.5/0.94]">
            {images.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT - CONTENT */}
          <div className="flex flex-col justify-center text-white ">
            {/* TAGLINE */}
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-p1 md:text-sm">
              {tagline}
            </p>

            {/* TITLE */}
            <h2 className="md:max-w-2xl text-[22px] leading-snug text-white md:text-[42px] lg:text-[48px]">
              {title}
            </h2>

            {/* FEATURES */}
            <div className="mt-6 flex max-w-xl flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-3
                    py-1.5
                    text-[10px]
                    leading-4
                    text-white/90
                    sm:text-xs
                  "
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* DESCRIPTION */}
            <p className="mt-7 md:max-w-[620px] text-sm text-white/80 md:text-lg">
              {description}
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-2">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`
                    w-fit
                    justify-center
                    rounded-sm
                    md:text-sm
                    text-xs
                    ${
                      index === 0
                        ? "border border-white bg-white text-primary"
                        : "border border-p1 bg-p1 text-white"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DiningSection;
