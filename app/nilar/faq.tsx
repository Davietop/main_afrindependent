"use client";

import React from "react";
import { Collapse, Button, ConfigProvider } from "antd";
import { ArrowUpOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";

const { Panel } = Collapse;
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const faqs = [
  {
    question: "Is gold practical in a digital age?",
    answer:
      "Yes. The Nilar is a gold-based currency that can be easily transacted digitally. Gold provides the reliable and ethical foundation for its value, while transactions can happen physically or through modern, secure, and scalable digital platforms. This makes it as usable as mobile money, banking apps, and crypto wallets",
  },
  {
    question: "Can African countries realistically adopt the Nilar?",
    answer:
      "Absolutely. African nations have the sovereign right and capacity to establish sound monetary systems, especially because the current era of fiat currency systems has proven unjust and destructive. The Nilar is designed to be implemented gradually, nationally or regionally, with complete transparency. More importantly, African leaders have the moral, cultural, and material obligation to provide African nations with an entirely sound monetary system. ",
  },

  {
    question: "How does the Nilar compare to Bitcoin or CBDCs?",
    answer: {
      bullets: [
        "Bitcoin is decentralized and strictly digital, not backed by any tangible asset. Its price volatility, permanent cap of 21 million coins, and other factors make it unsuitable for large-scale commerce, practical daily transactions, and economic planning. The Nilar remains a more viable and workable form of sound money.",
        "CBDCs (Central Bank Digital Currencies) are digital fiat currencies—still inflationary, fraudulent, centrally controlled, and backed by coercion.",
      ],
      paragraph:
        "The Nilar combines the best of both worlds: gold-based, decentralized governance, independence of political manipulation, and digital availability through tokenization. It offers ethical stability, usability, and long-term reliability.",
    },
  },
  {
    question:
      "Would the Nilar replace existing currencies or work alongside them?",
    answer:
      "The Nilar can function alongside existing currencies as an alternative or complementary system. Over time, as trust builds and adoption grows, it will become the preferred medium of exchange and store of value for individuals, businesses, and even governments seeking currency stability and reliability. Fiat currencies are to be gradually phased out concurrently.",
  },
  {
    question: "  How is the Nilar secured and audited",
    answer: {
      header: ` All gold reserves backing the Nilar are independently audited and securely stored, with full transparency for public trust. Digital issuance is strictly limited to the actual gold held—eliminating inflation risk and monetary manipulation.`,
    },
  },
];

const FAQData = [
  {
    key: "1",
    label: "What is this app, and how can it help me?",
    children: (
      <p className="text-slate-500 leading-relaxed">
        This app helps you track your daily expenses, set budgets, and manage
        your finances more effectively. It provides you with the tools you need
        to understand your spending patterns.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is there a free trial available?",
    children: (
      <p className="text-slate-500">
        Yes, we offer a 14-day free trial for all new users.
      </p>
    ),
  },
  {
    key: "3",
    label: "Which payment methods do you accept?",
    children: (
      <p className="text-slate-500">
        We accept Visa, Mastercard, and American Express.
      </p>
    ),
  },
  {
    key: "4",
    label: "How does the app keep my financial data secure?",
    children: (
      <p className="text-slate-500">
        We use 256-bit SSL encryption to protect your data.
      </p>
    ),
  },
  {
    key: "5",
    label: "I need help with the app. How can I contact support?",
    children: (
      <p className="text-slate-500">
        Our support team is available 24/7 via the contact form.
      </p>
    ),
  },
];

const AppFAQ = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#18181b",
          borderRadius: 16,
          fontFamily: ibmPlexSans.style.fontFamily,
        },
        components: {
          Collapse: {
            headerBg: "#f8fafc",
            contentBg: "#f8fafc",
            headerPadding: "16px 20px", // Slightly tighter for mobile
          },
        },
      }}
    >
      <div
        className={`${ibmPlexSans.className} w-full bg-white pt-6 px-5  lg:px-10`}
      >
        {/* Section Title - Stays top-left */}
        <div className="mb-2 md:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide ">
            Frequently Asked Questions
          </h3>
        </div>

        {/* Responsive Grid Container */}
        <div className="w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row gap-y-6 lg:gap-x-16 items-start">
          {/* Left Side: Header & Contact Card */}
          <div className="w-full lg:w-6/12 space-y-4">
      

            {/* Custom Contact Card - Responsive Width */}
            <div className="p-6 sm:p-10 w-full lg:max-w-full rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 bg-slate-50/40 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Can not find answers?
              </h3>
              <p className="text-sm sm:text-base text-slate-500 mb-6 leading-relaxed">
                We are here to help you out whenever you need! Get in touch with
                our dedicated support team for personalized assistance anytime.
              </p>
              <Button
                type="primary"
                size="large"
                shape="round"
                icon={<ArrowRightOutlined rotate={-45} />}
                className="h-18 px-6 bg-deepForest text-[#ffd700] hover:!bg-zinc-800 border-none flex items-center gap-2 text-sm sm:text-base"
              >
               <Link href='/contact'> Contact us</Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Ant Design Accordion */}
          <div className="w-full lg:w-6/12">
            <Collapse
              accordion
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              ghost
              className="faq-collapse"
              expandIcon={({ isActive }) => (
                <div
                  className={`transition-all p-1.5 rounded-lg flex items-center justify-center ${
                    isActive
                      ? "bg-slate-200 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  <ArrowUpOutlined rotate={isActive ? 0 : 180} />
                </div>
              )}
            >
              {faqs.map((item, index) => {
                // Helper to render the different answer formats
                const renderAnswer = (answer:any) => {
                  // Case 1: Simple String
                  if (typeof answer === "string") {
                    return <p className="leading-relaxed">{answer}</p>;
                  }

                  // Case 2: Object with Header/Paragraph/Bullets
                  return (
                    <div className="space-y-4">
                      {answer.header && (
                        <p className="font-medium text-slate-800">
                          {answer.header}
                        </p>
                      )}

                      {answer.bullets && (
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                          {answer.bullets.map((bullet:any, idx:any) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      )}

                      {answer.paragraph && (
                        <p className="leading-relaxed italic text-slate-700 bg-slate-100/50 p-3 rounded-lg border-l-2 border-slate-300">
                          {answer.paragraph}
                        </p>
                      )}
                    </div>
                  );
                };

                return (
                  <Panel
                    header={
                      <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                        {item.question}
                      </span>
                    }
                    key={index} // Using index as key since the data keys aren't provided
                    className="mb-4 overflow-hidden rounded-2xl bg-slate-50 border-none last:mb-0"
                  >
                    <div className="text-sm sm:text-base text-slate-600 pb-2">
                      {renderAnswer(item.answer)}
                    </div>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AppFAQ;
