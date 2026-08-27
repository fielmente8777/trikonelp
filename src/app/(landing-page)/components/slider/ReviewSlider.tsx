"use client";

import { TestimonialsProps } from "@/src/@types/landingPageTypes";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { CommaIcon } from "@/src/utils/icons";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

const ReviewSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="w-full overflow-visible">
      <SwiperCarousel
        data={reviews}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={20}
        loop
        className="!overflow-visible !pb-2"
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.6,
          },
          1024: {
            slidesPerView: 1.8,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        renderSlide={(item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              className="
                flex
                min-h-[205px]
                flex-col
                rounded-lg
                bg-white
                p-5
                shadow-[0_8px_20px_rgba(0,0,0,0.06)]
              "
            >
              {/* QUOTE */}
              <span className="">
                <CommaIcon />
              </span>

              {/* REVIEW */}
              <p
                className={`
                  mt-3
                  text-sm
                  md:text-lg
                  text-grey
                  ${isExpanded ? "" : "line-clamp-3"}
                `}
              >
                {item.review}
              </p>

              {/* READ MORE */}
              {item.review && item.review.length > 150 && (
                <button
                  type="button"
                  onClick={() => toggleDescription(index!)}
                  className="
                    mt-1
                    w-fit
                    text-xs

                    font-medium
                    text-primary
                    underline
                    underline-offset-4
                  "
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              )}

              {/* BOTTOM */}
              <div className="mt-auto pt-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm tracking-[2px] text-p1">★★★★★</span>

                  <span className="text-xs text-grey">{item.name}</span>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ReviewSlider;
