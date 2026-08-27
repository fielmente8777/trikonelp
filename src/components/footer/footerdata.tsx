import { contact } from "@/src/utils/constent";

interface FooterData {
  logo: string;

  lists: {
    title?: string;
    links: {
      label?: string;
      href?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/images/footer.png",

  lists: [
    {
      title: "Location",
      links: [
        {
          label: "Sukhatall, Nainital, Uttarakhand\n(Near Nainital High Court)",
          href: contact.addressLink,
        },
      ],
    },

    {
      title: "Contact",
      links: [
        {
          label: `Call: ${contact.phone[0]}`,
          href: contact.callCta,
        },
        {
          label: `Email: ${contact.email}`,
          href: `mailto:${contact.email}`,
        },
      ],
    },
  ],
};
