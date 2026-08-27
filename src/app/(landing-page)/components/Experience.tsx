"use client";

import Image from "next/image";
import LinkButton from "@/src/components/buttons/LinkButton";
import { Section } from "@/src/components/sectionComponants";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Navigation } from "swiper/modules";
import { BtnNextIcon, BtnPrevIcon } from "@/src/utils/icons";

interface ExperiencesSectionProps {
  tagline: string;
  title: string;
  icon: string;
  cards: {
    image: string;
    title: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const ExperiencesSection = ({
  tagline,
  title,
  icon,
  cards,
  buttons,
}: ExperiencesSectionProps) => {
  return (
    <Section className="bg-secondary">
      {/* HEADING */}
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 mb-8 md:mb-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="relative mb-3 ">
            <Image src={icon} alt="experience" width={67} height={56} />
          </div>
          <p className="mb-2 text-[16px] uppercase text-p1">{tagline}</p>

          <h2 className="text-2xl text-primary text-round md:text-[40px]">{title}</h2>
        </div>
      </div>

      {/* EXPERIENCE SLIDER - EDGE TO EDGE */}
      <div className="relative w-full overflow-hidden">
        <SwiperCarousel
          data={cards}
          modules={[Navigation]}
          navigation={{
            prevEl: ".experience-prev",
            nextEl: ".experience-next",
          }}
          slidesPerView={1}
          spaceBetween={1}
          loop
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
          }}
          className="w-full"
          swiperSlideClassName="!h-auto"
          renderSlide={(card) => (
            <div className="group relative aspect-[3/4] w-full overflow-hidden ">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />

              {/* TITLE */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-2 text-center">
                <p className="text-xs text-white md:text-base">{card.title}</p>
              </div>
            </div>
          )}
        />

        {/* LEFT ARROW */}
        {/* <button
          type="button"
          className="experience-prev absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-primary active:scale-95"
          aria-label="Previous experience"
        >
          <BtnPrevIcon />
        </button> */}

        {/* RIGHT ARROW */}
        {/* <button
          type="button"
          className="experience-next absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-primary active:scale-95"
          aria-label="Next experience"
        >
          <BtnNextIcon />
        </button> */}
      </div>

      {/* CTA */}
      <div className="grid grid-cols-2 mx-auto max-w-[400px] justify-center gap-2 px-4 pt-8">
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
              px-4
              py-2
              text-xs!
              sm:text-sm!
              ${
                index === 0
                  ? "border border-primary bg-white text-primary"
                  : "border border-primary bg-primary text-white"
              }
            `}
          />
        ))}
      </div>
    </Section>
  );
};

export default ExperiencesSection;
