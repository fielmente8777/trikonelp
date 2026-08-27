import ImageB from "../components/banners/Image";
import Form1 from "../components/forms/Form1";
import { SectionWithContainer } from "../components/sectionComponants";
import SlidingTitle from "../components/sliders/SlidingTitle";
import Difference from "./(landing-page)/components/Difference";
import DiningSection from "./(landing-page)/components/Dining";
import Escape from "./(landing-page)/components/Escape";
import Ethos from "./(landing-page)/components/Ethos";
import ExperiencesSection from "./(landing-page)/components/Experience";
import FAQ from "./(landing-page)/components/Faqs";
import { landingPageData } from "./(landing-page)/components/pagedata";
import Review from "./(landing-page)/components/Reviews";
import Room from "./(landing-page)/components/Room";

export default function LandingPage() {
  return (
    <main>
      <ImageB hero={landingPageData.hero} />
      <SlidingTitle items={landingPageData.step} />
      
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="bg-primary border-b border-primary py-6"
        containerClassName="space-y-4 "
      >
        <Form1 />
        <p
          className="text-sm text-light text-secondary max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
      <Difference {...landingPageData.differenceData} />

      <Room {...landingPageData.roomsSection} />
      <Ethos {...landingPageData.ethosData} />
      <ExperiencesSection {...landingPageData.experiencesData} />
      <DiningSection {...landingPageData.diningData} />
      <Escape {...landingPageData.escapeData} />
      <Review {...landingPageData.testimonialsData} />

      <FAQ {...landingPageData.faqData} />
    </main>
  );
}
