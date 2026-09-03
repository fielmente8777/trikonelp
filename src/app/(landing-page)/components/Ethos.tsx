"use client";

import Image from "next/image";
import LinkButton from "@/src/components/buttons/LinkButton";
import { Section } from "@/src/components/sectionComponants";

interface EthosBannerProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  buttons: {
    label: string;
    link: string;
  }[];
}

const Ethos = ({
  tagline,
  title,
  description,
  image,
  buttons,
}: EthosBannerProps) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="relative aspect-[1.5/1] min-h-[400px] w-full md:aspect-[3/1] md:min-h-[651px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 max-md:px-4  flex items-center">
          <div className="mx-auto w-full">
            <div
              className="
                w-full
                max-w-[536px]
                rounded-xl
                border border-white/30
                bg-black/20
                px-5
                py-6
                text-center
                backdrop-blur-md
                sm:px-7
                sm:py-7
                md:ml-8
                lg:ml-12
              "
            >
              {/* TAGLINE */}
              <p className="mb-4 md:text-[16px] uppercase text-white text-sm">
                {tagline}
              </p>

              {/* TITLE */}
              <h2
                className="text-2xl text-white md:text-[40px] text-round"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              {/* DESCRIPTION */}
              <p className="mx-auto mt-5 text-sm md:text-lg text-white/90">
                {description}
              </p>

              {/* BUTTONS */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                {buttons.map((button, index) => (
                  <LinkButton
                    key={index}
                    href={button.link}
                    label={button.label}
                    whatsAppIcon={index === 0}
                    calendarIcon={index === 1}
                    className={`
                      w-full!
                      justify-center
                      rounded-sm
                      md:text-sm
                      text-xs
                      ${
                        index === 0
                          ? "border border-white bg-white text-primary"
                          : "border border-white/70 bg-primary text-white"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Ethos;