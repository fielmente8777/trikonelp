import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import Form1 from "../forms/Form1";
import { FillLocationIcon } from "@/utils/icons";

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
const ImageBanner: React.FC<ImageBannerProps> = ({
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
      className="relative w-full lg:aspect-16/8 aspect-[4/5.2] overflow-hidden"
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 z-10 bg-black/40 " />

      <div className="absolute inset-0  z-20 flex lg:items-end items-center pb-10 justify-center">
        <Container>
          <div className="flex flex-col gap-6 max-md:gap-30">
            <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1">
              <div className="space-y-2 w-full">
                <p className="flex items-center max-lg:text-[10px] gap-2 text-sm text-white w-fit border border-primary py-1.5 px-3 rounded-full uppercase tracking-widest">
                  <span>
                    <FillLocationIcon />
                  </span>
                  {tag}
                </p>
                <h1
                  className="font-primary text-4xl md:text-6xl/tight  text-white lg:max-w-6xl"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
                <p className="text-white max-w-3xl mt-4">{description}</p>
              </div>
              <div className="bg-white/40 w-fit ml-auto border border-white/10 backdrop-blur-xs p-3 rounded-[20px] lg:flex hidden flex-col gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex flex-col ">
                    <p className="text-white">{highlight.label}</p>
                    <p className="text-white text-xl font-primary">
                      {highlight.value}
                    </p>
                    <p className="text-white">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="bg-white/30 border max-lg:hidden border-white/40 backdrop-blur-xs py-6 px-1.5 rounded-[20px] mt-8 flex flex-col gap-5"
              id="form"
            >
              <Form1 />
              <p
                className="text-sm text-white tracking-widest text-center"
                dangerouslySetInnerHTML={{ __html: benefits }}
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;
