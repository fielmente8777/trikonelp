"use client";

import Image from "next/image";
import LinkButton from "@/src/components/buttons/LinkButton";
import { SectionWithContainer } from "@/src/components/sectionComponants";

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
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative overflow-hidden bg-primary"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_1fr] md:gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          
          {/* LEFT - IMAGES */}
          <div className="grid h-full min-h-[360px] grid-cols-2 gap-0">
            {images.map((item, index) => (
              <div
                key={index}
                className="relative h-full min-h-[360px] overflow-hidden"
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
          <div className="flex flex-col justify-center text-white">
            {/* TAGLINE */}
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-p1 md:text-sm">
              {tagline}
            </p>

            {/* TITLE */}
            <h2 className="max-w-2xl text-3xl leading-[1.15] text-white sm:text-4xl md:text-[42px] lg:text-[48px]">
              {title}
            </h2>

            {/* FEATURES */}
            <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
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
            <p className="mt-7 max-w-2xl text-sm leading-6 text-white/80 md:text-[15px] md:leading-7">
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
                    px-5
                    py-2.5
                    text-xs!
                    sm:text-sm!
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