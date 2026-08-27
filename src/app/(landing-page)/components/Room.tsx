"use client";

import LinkButton from "@/src/components/buttons/LinkButton";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/src/components/typography";
import { BtnNextIcon, BtnPrevIcon, SquareIcon } from "@/src/utils/icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";

interface RoomsSectionProps {
  tagline: string;
  title: string;
  description?: string;
  cards: {
    images: string[];
    tags: string[];
    category: string;
    imageOnly?: boolean;
    title?: string;
    description?: string;
    price?: string;
    amenities?: {
      label: string;
    }[];
    buttons?: {
      label: string;
      link: string;
    }[];
  }[];
}

const Room: React.FC<RoomsSectionProps> = ({
  tagline,
  title,
  description,
  cards,
}) => {
  const filteredCards = cards.filter((card) => card);

  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="mx-auto w-full max-w-7xl py-16 md:py-10">
        {/* HEADING */}
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-2 text-xs uppercase text-p1">{tagline}</p>

            <div className="max-w-3xl text-secondary text-round">
              <SectionHeading title={title} />
            </div>
          </div>

          {/* RIGHT DESCRIPTION */}
          {description && (
            <div className="flex mt-8">
              <p className="max-w-md text-sm text-secondary/80 md:text-lg">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* CARDS */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredCards.map((card, index) => (
            <RoomsCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Room;

export const RoomsCard: React.FC<
  RoomsSectionProps["cards"][0] & { index: number }
> = ({
  title,
  category,
  tags,
  description,
  amenities,
  buttons,
  images,
  index,
}) => {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden bg-secondary rounded-xl">
      {/* IMAGE SLIDER */}
      <div className="relative aspect-[3.5/2.2] w-full overflow-hidden">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation]}
          navigation={{
            nextEl: `.rooms-next-${index}`,
            prevEl: `.rooms-prev-${index}`,
          }}
          loop={true}
          speed={600}
          className="w-full h-full"
          swiperSlideClassName="h-full"
          renderSlide={(image) => (
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={title ?? "Room"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
        />

        {/* IMAGE ARROWS */}
        <button
          type="button"
          className={`rooms-prev-${index} absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-primary active:scale-95`}
          aria-label="Previous image"
        >
          <BtnPrevIcon />
        </button>

        <button
          type="button"
          className={`rooms-next-${index} absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-primary active:scale-95`}
          aria-label="Next image"
        >
          <BtnNextIcon />
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {/* CATEGORY */}
        <p className="mb-4 text-xs uppercase text-p1 md:text-[16px]">
          {category}
        </p>

        {/* TITLE */}
        <h3 className="text-2xl text-dark md:text-3xl">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-xs text-black md:text-lg">
          {description}
        </p>

        {/* TAGS */}
        {tags && tags.length > 0 && (
          <div className="py-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-p1/30 px-2.5 py-1 text-xs md:text-sm uppercase text-grey"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* AMENITIES */}
        <ul className="mt-4 space-y-2">
          {amenities?.map((amenity, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs text-grey md:text-lg"
            >
              <span className="mt-[2px] ">
                <SquareIcon/>
                </span>
              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="mt-auto flex gap-2 border-t border-grey/20 pt-4">
          {buttons?.map((button, index) => (
            <LinkButton
              key={index}
              href={button.link}
              label={button.label}
              whatsAppIcon={index === 0}
              calendarIcon={index === 1}
              className={`
                !w-full
                justify-center
                rounded-sm
                px-3
                py-2
                text-xs!
                sm:text-sm!
                ${
                  index === 0
                    ? "border border-primary bg-white text-primary"
                    : " bg-primary text-white"
                }
              `}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
