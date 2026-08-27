"use client";

import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import { usePathname } from "next/navigation";
import { BookingCalenderIcon, CalendarIcon } from "@/src/utils/formIcons";

const LandingNavbar = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <header className="max_screen_width w-full bg-secondary">
      <nav className="max_screen_width flex items-center justify-between px-6">
        {/* LOGO */}
        <div className="relative aspect-4/4 w-full max-w-25">
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* BOOK STAY */}
        <LinkButton
          href="/"
          label="Book Stay"
          calendarIcon
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-fit
            rounded-lg
            max-md:hidden
            uppercase
            bg-primary
            text-white
            border
            border-primary
          "
        />

      </nav>
    </header>
  );
};

export default LandingNavbar;