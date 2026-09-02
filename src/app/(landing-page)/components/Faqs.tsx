"use client";

import { SectionWithContainer } from "@/src/components/sectionComponants";
import LinkButton from "@/src/components/buttons/LinkButton";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
  listOptions?: string[];
}

interface FAQProps {
  tagline: string;
  title: string;
  faqs: FAQItem[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const FAQ = ({ tagline, title, faqs, buttons }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWithContainer sectionClassName="bg-secondary" containerId="#faqs">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-2 text-xs uppercase text-p1 md:text-base">
              {tagline}
            </p>

            <h2 className="max-w-md text-3xl text-primary text-round md:text-[40px]">
              {title}
            </h2>

            {/* BUTTONS */}
            <div className="mt-8 hidden md:grid md:grid-cols-2 lg:max-w-sm gap-2">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`
                    w-full
                    justify-center
                    rounded-sm
                    px-4
                    py-2
                   uppercase
                    ${
                      index === 0
                        ? "border border-primary bg-white text-primary"
                        : "border border-primary bg-primary text-white"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* FAQ ACCORDION */}
          <div className="border-t border-p1/30">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-p1/30">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                    "
                    aria-expanded={isOpen}
                  >
                    <span className="text-base text-round text-primary md:text-2xl">
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-p1">
                      {isOpen ? <IoRemove size={18} /> : <IoAdd size={18} />}
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-3 pr-8 text-base text-round text-grey">
                        {faq.answer}
                      </p>
                      {faq.listOptions && faq.listOptions.length > 0 && (
                        <ol className="list-decimal space-y-2 pb-5 pl-6 pr-8 text-base text-round text-grey">
                          {faq.listOptions.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 md:hidden grid grid-cols-1 lg:max-w-[350px] gap-2">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                    uppercase
                    w-full
                    justify-center
                    rounded-sm
                    px-4
                    py-2
                    ${
                      index === 0
                        ? "border border-primary bg-white text-primary"
                        : "border border-primary bg-primary text-white"
                    }
                  `}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FAQ;
