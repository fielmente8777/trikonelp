import Image from "next/image";
import { Container, Section } from "../sectionComponants";

interface ImageBannerProps {
  tag: string;
  title: string;
  description: string;
  benefits: string;
  image: string;
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
}
const ImageB: React.FC<ImageBannerProps> = ({
  title,
  image,
  tag,
  description,
  benefits,
  highlights,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-16/8 aspect-[3/4] overflow-hidden"
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 z-10 bg-black/40 " />

      <div className="absolute inset-0  z-20 flex lg:items-end items-center pb-10 justify-center">
        <Container>
          <div className="flex flex-col gap-6 max-md:gap-30">
            <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1">
              <div className="space-y-2 w-full text-center lg:text-left">
                <p className="flex mx-auto lg:mx-0 bg-white/20 backdrop-blur-2xl  items-center md:text-[10px] gap-2 text-sm text-white w-fit border border-primary py-1.5 px-3 rounded-full uppercase tracking-widest">
                  {/* <span>
                    <DotIcon />
                  </span> */}
                  {tag}
                </p>
                <h1
                  className="font-primary text-4xl md:text-5xl  text-white md:max-w-6xl"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>

              </div>

            </div>

          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ImageB;
