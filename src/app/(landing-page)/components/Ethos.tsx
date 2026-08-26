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
      <div className="relative aspect-[1.5/1] min-h-[500px] w-full md:aspect-[2.4/1] md:min-h-[440px]">
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
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="
                w-full
                max-w-[365px]
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
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white sm:text-xs">
                {tagline}
              </p>

              {/* TITLE */}
              <h2
                className="text-2xl leading-[1.15] text-white sm:text-3xl md:text-[32px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              {/* DESCRIPTION */}
              <p className="mx-auto mt-5 max-w-[310px] text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
                {description}
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex justify-center gap-2">
                {buttons.map((button, index) => (
                  <LinkButton
                    key={index}
                    href={button.link}
                    label={button.label}
                    whatsAppIcon={index === 0}
                    calendarIcon={index === 1}
                    className={`
                      !w-fit
                      justify-center
                      rounded-sm
                      px-4
                      py-2
                      text-[10px]!
                      sm:text-xs!
                      ${
                        index === 0
                          ? "border border-white bg-white text-primary"
                          : "border border-white/70 bg-transparent text-white"
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