"use client";

import Image from "next/image";

import ReviewSlider from "./slider/ReviewSlider";
import { Section, SectionWithContainer } from "@/src/components/sectionComponants";
import { TestimonialsProps } from "@/src/@types/landingPageTypes";

interface ReviewProps extends TestimonialsProps {
  awardImage: string;
  awardAlt?: string;
  awardLogo?: string;
  reviewDescription?: string;
}

const Review: React.FC<ReviewProps> = ({
  tagline,
  title,
  reviews,
  awardImage,
  awardAlt = "Award",
  awardLogo,
  reviewDescription,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="bg-secondary "
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-2 border-y border-primary">

        {/* ================= LEFT ================= */}
        <div
          className="
            relative
            flex
            min-h-[500px]
            items-center
            justify-center
            bg-primary
            px-6
            py-12
            sm:px-10
            md:min-h-[560px]
            lg:px-14
          "
        >
          {/* AWARD IMAGE CARD */}
          <div
            className="
              relative
              w-full
              max-w-[280px]
              overflow-hidden
              rounded-xl
              border-2
              border-white
              sm:max-w-[300px]
              lg:max-w-[365px]
            "
          >
            <Image
              src={awardImage}
              alt={awardAlt}
              width={500}
              height={650}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          className="
            min-w-0
            overflow-hidden
            bg-secondary
            px-6
            py-12
            sm:px-10
            md:px-8
            md:py-14
            lg:px-12
            xl:px-16
          "
        >
          {/* HEADING */}
          <div className="mb-8">
            <p className="mb-3 text-xs md:text-[16px] uppercase text-p1">
              {tagline}
            </p>

            <h2
              className="
              text-round
                max-w-2xl
                text-3xl
                text-primary
                md:text-[40px]
              "
            >
              {title}
            </h2>

            {/* AWARD LOGO */}
            {awardLogo && (
              <div className="relative mt-6 h-9 w-28">
                <Image
                  src={awardLogo}
                  alt="Award logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            )}

            {/* DESCRIPTION */}
            {reviewDescription && (
              <p className="mt-6 max-w-2xl text-sm text-grey md:text-[18px]">
                {reviewDescription}
              </p>
            )}
          </div>

          {/* TESTIMONIAL SLIDER */}
          <ReviewSlider reviews={reviews} />
        </div>
      </div>
    </Section>
  );
};

export default Review;