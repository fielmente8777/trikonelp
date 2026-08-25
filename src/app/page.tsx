import ImageB from "../components/banners/Image";
import Form1 from "../components/forms/Form1";
import { SectionWithContainer } from "../components/sectionComponants";
import SlidingTitle from "../components/sliders/SlidingTitle";
import Difference from "./(landing-page)/components/Difference";
import DiningSection from "./(landing-page)/components/Dining";
import ExperiencesSection from "./(landing-page)/components/Experience";
import FAQ from "./(landing-page)/components/Faqs";
import { landingPageData } from "./(landing-page)/components/pagedata";
import Review from "./(landing-page)/components/Reviews";
import Room from "./(landing-page)/components/Room";

export default function LandingPage() {
  return (
    <main >
      <ImageB {...landingPageData.hero} />
      <SlidingTitle items={landingPageData.step} />
      <div
        className="bg-primary border max-lg:hidden border-white/40 backdrop-blur-xs py-6 px-1.5 flex flex-col gap-5"
        id="form"
      >
        <Form1 />
        <p
          className="text-sm text-white tracking-widest text-center"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </div>
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary lg:hidden"
        containerClassName="space-y-4"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
      <Difference {...landingPageData.differenceData} />

      <Room {...landingPageData.roomsSection} />
      <ExperiencesSection {...landingPageData.experiencesData} />
      <DiningSection {...landingPageData.diningData}/>
      <Review {...landingPageData.testimonialsData} />

      <FAQ {...landingPageData.faqData} />  
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary lg:hidden"
        containerClassName="space-y-4"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
    </main>
  );
}
