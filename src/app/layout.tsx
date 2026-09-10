import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Geist,
  Geist_Mono,
  Varela_Round,
} from "next/font/google";
import "./globals.css";
import "./style.scss";
import { WebProvider } from "../context-api/WebContext";
import OfferSection from "../components/OfferSection";
import LandingNavbar from "../components/navbar/LandingNavbar";
import LandingFooter from "../components/footer/LandingFooter";
import PopUpForm from "../components/pop-up/PopUpForm";
import Call from "../components/ContactButton/Call";
import { contact } from "../utils/constent";
import Whatsapp from "../components/ContactButton/WhatsApp";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela-round",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Trikone",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="0qrxNkwwCN-jdfL-gzpf3NlWYKXuhXSjQBz3k-rYrYA"
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TML5XPBV');`}</Script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3EGNKWTFKQ"
        ></script>
        <Script id="google analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3EGNKWTFKQ');`}
        </Script>
      </head>
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${varelaRound.variable} ${cormorant.variable} h-full antialiased`}
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TML5XPBV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <WebProvider>
          <OfferSection />
          <LandingNavbar />

          {children}
          <LandingFooter />
          <PopUpForm />
          <Call callNumber={contact.phone[0]} />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
        </WebProvider>
      </body>

      <Script id="chatbot-config" strategy="afterInteractive">
        {`
    window.eazbotConfig = {
       ndid: "3b6fb698-ab43-4bdc-a1a9-eac76af9d3be",
       hid: "62036194",
    };
  `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
