"use client";

import Image from "next/image";
import LinkButton from "@/src/components/buttons/LinkButton";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { SectionHeading } from "@/src/components/typography";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { BtnNextIcon, BtnPrevIcon } from "@/src/utils/icons";

interface EscapeProps {
  title: string;
  description?: string;

  images: {
    left: string[];
    middleTop: string[];
    right: string[];
  };

  middleBottom: {
    tagline: string;
    title: string;
  };

  buttons: {
    label: string;
    link: string;
  }[];
}

const Escape: React.FC<EscapeProps> = ({
  title,
  description,
  images,
  middleBottom,
  buttons,
}) => {
  const leftSwiper = useRef<SwiperType | null>(null);
  const middleSwiper = useRef<SwiperType | null>(null);
  const rightSwiper = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    leftSwiper.current?.slidePrev();
    middleSwiper.current?.slidePrev();
    rightSwiper.current?.slidePrev();
  };

  const handleNext = () => {
    leftSwiper.current?.slideNext();
    middleSwiper.current?.slideNext();
    rightSwiper.current?.slideNext();
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-secondary"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-20">

        {/* HEADING */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <div className="text-p1 text-xs md:text-[16px] uppercase">
            {title}
          </div>

          {description && (
            <p className="mt-2 text-sm text-primary md:text-[40px] capitalize">
              {description}
            </p>
          )}
        </div>

        {/* ================= FIXED FRAME ================= */}
        <div className="relative w-full">

          {/* ================= GRID ================= */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-1
              overflow-hidden
              md:h-[470px]
              md:grid-cols-[2fr_1fr_1fr]
            "
          >

            {/* ================= LEFT IMAGE ================= */}
            <div className="relative min-h-[350px] overflow-hidden md:h-[600px]">
              <SwiperCarousel
                data={images.left}
                slidesPerView={1}
                spaceBetween={0}
                loop
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={900}
                className="h-full w-full"
                swiperSlideClassName="h-full"
                onSwiper={(swiper) => {
                  leftSwiper.current = swiper;
                }}
                renderSlide={(image) => (
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              />
            </div>

            {/* ================= MIDDLE ================= */}
            <div className="grid min-h-[470px] grid-rows-[1fr_1fr] gap-1">

              {/* MIDDLE IMAGE */}
              <div className="relative min-h-[220px] overflow-hidden">
                <SwiperCarousel
                  data={images.middleTop}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  speed={900}
                  className="h-full w-full"
                  swiperSlideClassName="h-full"
                  onSwiper={(swiper) => {
                    middleSwiper.current = swiper;
                  }}
                  renderSlide={(image) => (
                    <div className="relative h-full w-full">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                />
              </div>

              {/* STATIC CONTENT */}
              <div className="flex flex-col md:aspect-[8/5] md:h-[200px] justify-center bg-primary px-6 py-8">
                <p className="mb-3 text-[9px] uppercase text-p1">
                  {middleBottom.tagline}
                </p>

                <h3 className="text-2xl leading-[1.15] text-white md:text-[25px]">
                  {middleBottom.title}
                </h3>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative min-h-[350px] overflow-hidden md:h-[600px]">
              <SwiperCarousel
                data={images.right}
                slidesPerView={1}
                spaceBetween={0}
                loop
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={900}
                className="h-full w-full"
                swiperSlideClassName="h-full"
                onSwiper={(swiper) => {
                  rightSwiper.current = swiper;
                }}
                renderSlide={(image) => (
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                )}
              />
            </div>
          </div>

          {/* ================= LEFT FIGMA BUTTON ================= */}
          <button
            type="button"
            onClick={handlePrev}
            className="
              absolute
              left-2
              top-1/2
              z-30
              flex
              h-8
              w-8
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              text-primary
              shadow-sm
              transition
              active:scale-95
              md:left-3
            "
            aria-label="Previous images"
          >
            <BtnPrevIcon />
          </button>

          {/* ================= RIGHT FIGMA BUTTON ================= */}
          <button
            type="button"
            onClick={handleNext}
            className="
              absolute
              right-2
              top-1/2
              z-30
              flex
              h-8
              w-8
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              text-primary
              shadow-sm
              transition
              active:scale-95
              md:right-3
            "
            aria-label="Next images"
          >
            <BtnNextIcon />
          </button>
        </div>

        {/* ================= CTA BUTTONS ================= */}
        <div className="flex justify-center gap-2 pt-7">
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
      </div>
    </SectionWithContainer>
  );
};

export default Escape;