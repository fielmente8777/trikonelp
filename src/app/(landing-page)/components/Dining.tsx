"use client";

import Image from "next/image";
import LinkButton from "@/src/components/buttons/LinkButton";
import {
  Section,
  SectionWithContainer,
} from "@/src/components/sectionComponants";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import { JSX } from "react/jsx-runtime";

interface DiningSectionProps {
  tagline: string;
  title: string;
  description: string;
  features: {
    icon: JSX.Element;
    title: string;
  }[];
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
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_1fr] md:gap-4">
          {/* LEFT - IMAGES */}
          <div className="md:grid w-full hidden grid-cols-[1.72fr_1fr] gap-2 aspect-[4/2.6]">
            {images.map((item, index) => (
              <div key={index} className="relative overflow-hidden">
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
            <p className="mb-3 text-xs uppercase text-p1 md:text-[16px]">
              {tagline}
            </p>

            {/* TITLE */}
            <h2 className="md:max-w-2xl text-3xl text-white text-round  md:text-[40px]">
              {title}
            </h2>

            {/* FEATURES */}
            <div className="mt-6 flex max-w-xl flex-wrap gap-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-2 item-center w-fit rounded-full
                    border border-white/20
                    bg-white/10
                    px-3
                    py-1.5"
                >
                  <span>{feature.icon}</span>
                  <p
                    className="
                    text-white/90
                    text-sm
                  "
                  >
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:hidden block ">
               <SwiperCarousel
              data={images}
              slidesPerView={1}
              spaceBetween={0}
              loop
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={900}
              className="h-[400px] w-full"
              swiperSlideClassName="h-full"
              renderSlide={(image) => (
                <div className="relative h-full w-full">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}
            />
              </div>

            {/* DESCRIPTION */}
            <p className="mt-7 md:max-w-[620px] text-sm text-white/80 md:text-lg">
              {description}
            </p>

            {/* BUTTONS */}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 max-w-[400px] gap-2">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`
                    w-full
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
