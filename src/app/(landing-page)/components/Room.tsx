"use client";

import LinkButton from "@/src/components/buttons/LinkButton";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { SectionHeading } from "@/src/components/typography";
import Image from "next/image";

interface RoomsSectionProps {
  tagline: string;
  title: string;
  description?: string;
  cards: {
    images: string[];
    category?: string;
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
            <p className="mb-2 text-xs uppercase text-p1">
              {tagline}
            </p>

            <div className="max-w-3xl text-secondary">
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
            <RoomsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Room;

export const RoomsCard: React.FC<RoomsSectionProps["cards"][0]> = ({
  title,
  description,
  amenities,
  buttons,
  images,
}) => {
  return (
    <article className="flex w-full flex-col overflow-hidden bg-secondary rounded-xl">
      {/* IMAGE */}
      <div className="relative aspect-[3.5/2.2] w-full overflow-hidden">
        <Image
          src={images[0]}
          alt={title ?? "Room"}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        {/* IMAGE ARROWS */}
        <button
          type="button"
          className="
            absolute
            left-2
            top-1/2
            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-primary
          "
        >
          ←
        </button>

        <button
          type="button"
          className="
            absolute
            right-2
            top-1/2
            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-primary
          "
        >
          →
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {/* CATEGORY */}
        <p className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-p1 sm:text-xs">
          {title === "Arch House" ? "Heritage · Families" : "Nature · Couples"}
        </p>

        {/* TITLE */}
        <h3 className="text-2xl leading-tight text-dark sm:text-3xl">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-xs leading-5 text-grey sm:text-sm">
          {description}
        </p>

        {/* AMENITIES */}
        <ul className="mt-4 space-y-2">
          {amenities?.map((amenity, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs leading-5 text-grey sm:text-sm"
            >
              <span className="mt-[2px] shrink-0 text-p1">◇</span>

              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-2 border-t border-grey/20 pt-4">
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
                    ? "border border-primary bg-transparent text-primary"
                    : "border border-primary bg-primary text-white"
                }
              `}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
