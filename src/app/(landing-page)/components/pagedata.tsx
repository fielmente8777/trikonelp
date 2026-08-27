import { contact } from "@/src/utils/constent";
import {
  BellIcon,
  Breakfast,
  BuffeteIcon,
  CapIcon,
  CarIcon,
  EveningIcon,
  VegIcon,
  WIcon,
} from "@/src/utils/icons";

export const landingPageData = {
  offer: ["Direct Booking Offer: Save 15% + Free Breakfast"],

  hero: {
    tag: "A restored heritage stay in Nainital",
    title:
      "<strong> Come Home to </strong> <br/> the <em>quiet <em/> side of the hills",
    description: "",
    benefits:
      "Save 15% when you book direct · No prepayment · Free cancellation",
    images: [
      "/images/home.jpg",
      "/images/new/ban1.jpg",
      "/images/new/ban2.jpg",
      "/images/new/ban3.jpg",
      "/images/new/ban4.jpg",
    ],
  },

  step: [
    {
      title: "Opposite Nainital High Court",
      icon: <CarIcon />,
    },
    {
      title: "Ample On-Site Parking",
      icon: <CarIcon />,
    },
    {
      title: "Home-Style Kitchen",
      icon: <CapIcon />,
    },
    {
      title: "Reliable Wi-Fi For Workations",
      icon: <WIcon />,
    },
    {
      title: "Ayarpatta Forest Views",
      icon: <BellIcon />,
    },
  ],
  differenceData: {
    tagline: "THE TRIKONE DIFFERENCE",

    title:
      "Two Architects. One Childhood Home. A Hundred Years Of Stone And Timber.",

    description:
      "The deodars got here first — tall, unhurried, wrapping this hundred-year-old house in their shade. It was Shahena's childhood home, lovingly restored (not rebuilt) by two architect friends who wanted to keep its old-world charm exactly as it was the same stone, the same timber, the same quiet. Step through the gate and the hills hold you first, then the house does. This is a slow vacation, made for feeling everything.",

    note: "Mansi & Shahena, Co-founders",

    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },
  roomsSection: {
    tagline: "ONE HOME, TWO WAYS TO STAY",
    title: "The Deodar Bungalow <br/> & Cottage",
    description:
      "Opposite Nainital High Court, next to the forest. Close <br/> enough to explore, quiet enough to exhale.",

    cards: [
      {
        category: "The Bungalow",
        title: "Five Colonial Suites",

        images: ["/images/room/room1.jpg", "/images/room/room2.jpg","/images/room/room3.jpg","/images/room/room4.jpg","/images/room/room5.jpg","/images/room/room6.jpg","/images/room/room7.jpg","/images/room/room8.jpg"],

        description: "For those who want history under their feet.",

        tags: ["UP TO 3 GUESTS", "GARDEN FACING"],

        amenities: [
          {
            label: "Bay windows that flood the room with hill-station light",
          },
          {
            label:
              "Private garden access — step out for morning chai among the deodars",
          },
          {
            label:
              "High ceilings, timber floors, colonial proportions kept exactly as they were",
          },
          {
            label:
              "Shared buffet dining in the suite building — breakfast with fellow guests, if you feel like company",
          },
        ],

        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },

      {
        category: "The Cottage",
        title: "Eight Dreamy Rooms",

        images: ["/images/room/room10.jpg", "/images/room/room11.jpg","/images/room/room12.jpg","/images/room/room13.jpg","/images/room/room14.jpg","/images/room/room15.jpg"],

        description: "For those who want the forest at their doorstep.",

        tags: ["UP TO 2 GUESTS", "FOREST FACING"],

        amenities: [
          {
            label: "Handcrafted wooden interiors tucked into the treeline",
          },
          {
            label: "Private balconies looking straight into the woods",
          },
          {
            label:
              "Quieter, more secluded — built for guests who came here to disappear a little",
          },
          {
            label: "Own dining rhythm, separate from the Bungalow's",
          },
        ],

        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
    ],
  },

  experiencesData: {
    icon: "/images/exp.png",
    tagline: "HOSPITALITY & EXPERIENCE",
    title: "A Reason To Come, Beyond A Bed For The Night",

    cards: [
      {
        image: "/images/new/img1.jpg",
        title: "Bird Watching & Nature Retreat",
      },
      {
        image: "/images/new/img2.jpg",
        title: "Wellness & Fitness",
      },
      {
        image: "/images/new/img3.jpg",
        title: "Adventure & Trails",
      },
      {
        image: "/images/new/img4.jpg",
        title: "Art & Craft",
      },
      // {
      //   image: "/images/img2.jpg",
      //   title: "Bird Watching & Nature Retreat",
      // },
      // {
      //   image: "/images/img3.jpg",
      //   title: "Wellness & Fitness",
      // },
      // {
      //   image: "/images/img4.jpg",
      //   title: "Adventure & Trails",
      // },
      // {
      //   image: "/images/img5.jpg",
      //   title: "Art & Craft",
      // },
    ],

    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  diningData: {
    tagline: "FROM OUR KITCHEN",

    title: "Home Cooking, Not Restaurant Catering",

    description:
      "One home-style kitchen serves the whole estate, Kumaoni and North Indian plates, fresh mountain produce, chai whenever you want it. Two separate dining rooms mean the bungalow and the cottage each keep their own rhythm.",

    features: [
      { icon: <Breakfast />, title: "Breakfast included with every stay" },
      { icon: <BuffeteIcon />, title: "Buffet seating for retreat groups" },
      { icon: <EveningIcon />, title: "Evening chai under the deodars" },
      {
        icon: <VegIcon />,
        title: "Veg, Jain & regional preferences on request",
      },
    ],

    images: [
      {
        image: "/images/img6.jpg",
        alt: "Home style dining",
      },
      {
        image: "/images/img7.jpg",
        alt: "Dining at Trikone",
      },
            {
        image: "/images/new/img5.jpg",
        alt: "Home style dining",
      },
      {
        image: "/images/new/img6.jpg",
        alt: "Dining at Trikone",
      },
            {
        image: "/images/new/img7.jpg",
        alt: "Home style dining",
      },
      // {
      //   image: "/images/img7.jpg",
      //   alt: "Dining at Trikone",
      // },
    ],

    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  testimonialsData: {
    tagline: "RECOGNITION & GUEST REVIEWS",
    title: "Traveller's Choice: Best Homestay In The North",

    awardImage: "/images/img9.jpg",
    awardAlt: "MakeMyTrip India's Favourite Homestays Award",
    awardLogo: "/images/makemytrip.png",
    reviewDescription:
      "Awarded at the MakeMyTrip India's Favourite Homestays Awards, judged on what guests actually experienced.",

    reviews: [
      {
        review:
          "The most peaceful two nights we've had in Nainital. Parking on site alone made the trip worth it.",
        name: "Delhi NCR",
      },
      {
        review:
          "The most peaceful two nights we've had in Nainital. Parking on site alone made the trip worth it.",
        name: "Delhi NCR",
      },
      {
        review:
          "The most peaceful two nights we've had in Nainital. Parking on site alone made the trip worth it.",
        name: "Delhi NCR",
      },
      {
        review:
          "The most peaceful two nights we've had in Nainital. Parking on site alone made the trip worth it.",
        name: "Delhi NCR",
      },
    ],
  },
  faqData: {
    tagline: "BEFORE YOU BOOK",

    title: "Questions Guests Ask Us Most!",

    buttons: [
      {
        label: "Enquire Now",
        link: "#",
      },
      {
        label: "Book Now",
        link: "#",
      },
    ],

    faqs: [
      {
        question: "Where Exactly Is Deodar Bungalow & Cottage?",
        answer:
          "Located directly opposite the Nainital High Court, next to the erstwhile Manu Maharani Hotel (now Namah Nainital).",
      },
      {
        question: "Is Parking Available?",
        answer:
          "Yes. We offer ample on-site parking, making your drive to Nainital easy and hassle-free.",
      },
      {
        question: "What Are The Room Options?",
        answer:
          "Choose from thoughtfully designed Deluxe Cottage Rooms and British-Inspired Suites, each offering a comfortable and memorable stay.",
      },
      {
        question: "Can We Book The Whole Property?",
        answer:
          "Yes. With 13 rooms across two buildings, Deodar Bungalow & Cottage is well suited for private groups, retreats, corporate offsites and extended stays.",
      },
      {
        question: "What About Food?",
        answer:
          "Our home-style kitchen serves breakfast and meals, prepared with the warmth and comfort of home cooking rather than restaurant-style catering.",
      },
      {
        question: "How Do I Confirm A Booking?",
        answer:
          "Get in touch with our team to check availability, room options and rates, and we’ll guide you through the booking confirmation process.",
      },
    ],
  },
  ethosData: {
    tagline: "One Ethos",
    title: "We Didn't Build This. We Saved It.",
    description:
      "Every stone and beam in this house is a hundred years old — reused, not replaced. We work with local craftsmen, source from the valley, and try to leave Nainital a little better than we found it. Nothing complicated. Just a house, and a community, worth taking care of.",
    image: "/images/Rectangle 34624289_11zon.jpg",
    buttons: [
      {
        label: "Enquire Now",
        link: "#form",
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },
  escapeData: {
    title: "Inside the estate",
    description: "What your stay actually looks like ",

    images: {
      left: ["/images/gallery/gal1.jpg", "/images/gallery/gal2.jpg", "/images/gallery/gal3.jpg"],

      middleTop: ["/images/gallery/gal4.jpg", "/images/gallery/gal5.jpg", "/images/gallery/gal6.jpg"],

      right: ["/images/gallery/gal7.jpg", "/images/gallery/gal8.jpg", "/images/gallery/gal9.jpg"],
    },

    middleBottom: {
      tagline: "LIGHT, MATERIAL, MEMORY",
      title: "Some Places Ask You To Stay Awhile.",
    },

    buttons: [
      {
        label: "Enquire Now",
        link: "#",
      },
      {
        label: "Book Now",
        link: "#",
      },
    ],
  },
};
