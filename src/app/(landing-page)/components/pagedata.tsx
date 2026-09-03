import { contact } from "@/src/utils/constent";
import {
  BellIcon,
  Breakfast,
  BuffeteIcon,
  CapIcon,
  CarIcon,
  CourtIcon,
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
      icon: <CourtIcon />,
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
      "Opposite Nainital High Court, next to the forest. Close enough to explore, quiet enough to exhale.",

    cards: [
      {
        category: "The Bungalow",
        title: "Five Colonial Suites",

        images: [
          "/images/room/room1.jpg",
          "/images/room/room2.jpg",
          "/images/room/room3.jpg",
          "/images/room/room4.jpg",
          "/images/room/room5.jpg",
          "/images/room/room6.jpg",
          "/images/room/room7.jpg",
          "/images/room/room8.jpg",
        ],

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

        images: [
          "/images/room/room10.jpg",
          "/images/room/room11.jpg",
          "/images/room/room12.jpg",
          "/images/room/room13.jpg",
          "/images/room/room14.jpg",
          "/images/room/room15.jpg",
        ],

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
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],

    faqs: [
      {
        question: "Where exactly is Deodar Bungalow & Cottages?",
        answer:
          "Deodar Bungalow & Cottages is located in Sukhatal, Nainital, nestled within the tranquil Kumaon region of Uttarakhand. Our heritage property is in the heart of the town surrounded by deodar trees. Conveniently situated just 1.5 km from Mall Road, 2.2 km from Nainital Lake and in close proximity to the Nainital high court, our property is close enough to explore the best of Nainital's charm, yet far enough to escape into your own mountain sanctuary.",
      },
      {
        question: "Is Parking Available?",
        answer:
          "Yes, absolutely. We provide complimentary on-site parking for all our guests throughout their stay. If you're planning to drive or arrive on your own vehicle, we have ample parking space available for you.",
      },
      {
        question: "What are the room rates?",
        answer:
          "Room rates vary by room category, season, and travel dates. Cottages are priced between ₹4,500–₹7,500, while Bungalows range from ₹6,500–₹12,000. For current rates and availability, please contact us with your travel dates and number of travellers.",
      },
      {
        question: "Can we book the whole property?",
        answer:
          "Yes, the entire property can be booked for groups. The property has two independent units—a Bungalow with 5 heritage rooms and a Cottage with 8 cosy rooms. You can book either unit or both, depending on your requirements. Each unit has its own living, dining, and outdoor spaces, making them ideal for family gatherings, group retreats, and intimate celebrations. For bookings and customized options, please get in touch with us directly..",
      },
      {
        question: "What About Food?",
        answer:
          "We have a home kitchen where our meals are prepared using locally sourced, seasonal ingredients, with a focus on the flavours of Kumaoni cuisine. We keep the food fresh, simple, and thoughtfully prepared to complement your stay. If you have any dietary preferences or requirements, please let us know in advance. We’ll be happy to plan the menu accordingly.",
      },
      {
        question: "How Do I Confirm A Booking?",
        answer: "Booking with us is simple:",
        listOptions: [
          "Get in touch with us via WhatsApp, email, or phone to check availability.",
          "Share your preferred dates and room requirements.",
          "Confirm your reservation and complete the booking details.",
          "We’ll take care of the rest and look forward to welcoming you to our property.",
        ],
      },
      {
        question: "What are the check-in and check-out times?",
        answer:
          "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available based on room availability. If you need to arrange an earlier arrival or later departure, please contact us in advance, and we'll do our best to accommodate your needs.",
      },
      {
        question:
          "How do I reach the property from Nainital town/nearest airport/railway Station?",
        answer:
          "Deodar is just 1.5 km from Nainital town centre, making it easily accessible by car, taxi, or auto-rickshaw —approximately a 5-10 minute drive. The nearest airport is Pantnagar Airport (approximately 70 km away), and the closest railway station is Kathgodam Railway Station (approximately 38 km away). We recommend hiring a taxi or pre-arranging transportation from either point.",
      },
      {
        question: "Is the property pet-friendly?",
        answer:
          "Yes, we do welcome pets at Deodar. We have 2 resident pets in our property, and we're happy to accommodate your furry friends as well. For detailed information about our pet policy, including guidelines and requirements, please reach out to us.",
      },
      {
        question: "Is Deodar Suitable For Remote Work/Staycations?",
        answer:
          "Absolutely. We have WiFi connectivity and our rooms are equipped with a work desk and chair, quiet spaces for focused work, and thoughtfully designed common areas. Many guests extend their stays while maintaining work routines.",
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
        link: contact.WhatsappCta,
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
      left: [
        "/images/gallery/gal1.jpg",
        "/images/gallery/gal2.jpg",
        "/images/gallery/gal3.jpg",
      ],

      middleTop: [
        "/images/gallery/gal4.jpg",
        "/images/gallery/gal5.jpg",
        "/images/gallery/gal6.jpg",
      ],

      right: [
        "/images/gallery/gal7.jpg",
        "/images/gallery/gal8.jpg",
        "/images/gallery/gal9.jpg",
      ],
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
