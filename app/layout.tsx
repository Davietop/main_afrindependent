import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";

import { Metadata } from "next";

import "./globals.css";
import { nohemi, inter_tight, ojuju } from "@/contants/font-def";
import Motion from "./motion";
import WebVitals from "@/components/web-vitals";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/next';


export const revalidate = 0;

export const metadata: Metadata = {
  title: "Afrindependent Institute",
  description: "Unlocking Africa's Prosperity through Africonomics",
  icons: {
    icon: '/favicon.ico', // if you're using a PNG instead
  },
  applicationName: "Afrindenpendent Organisation",
  manifest: "https://www.afrindependent.org/",
  openGraph: {
    title: "Afrindependent",
    description: "Unlocking Africa's Prosperity through Africonomics",
    images: [
      {
        url: "https://www.afrindependent.org/hero_landing.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute - Unlocking Africa's Prosperity",
      },
    ],
    url: "https://www.afrindependent.org/",
  },
  twitter: {
    title: "Afrindependent",
    description: "Unlocking Africa's Prosperity through Africonomics",
    images: [
      {
        url: "https://www.afrindependent.org/hero_landing.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute - Unlocking Africa's Prosperity",
      },
    ],
    site: "https://www.afrindependent.org/",
  },
  keywords: [
    "Africonomics",
    "African Prosperity",
    "School of African Philosophical and Economic Thought",
    "Home of Africonomics",
    "The Africonomics Model",
    "Afrindependent Institute",
    "Africa’s Economic Heritage",
    "African Economies",
    "Free Trade",
    "Free Enterprise",
    "Sound Monetary System",
    "Nonprofit Organization",
    "African Societies",
    "African Perspective",
    "Nilar",
    "African Nonprofit",
    "Africa",
    "AfCFTA",
    "Think Tank",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="body"
        className={`${nohemi.variable} ${inter_tight.variable} ${ojuju.variable} bg-[#f2f2f2] max-w-[1920px] mx-auto`}
      >
        <WebVitals />
        <Motion>{children}</Motion>
      <Link
        rel="alternate"
        type="application/rss+xml"
        href="/rss"
        title="Afrindependent RSS Feed"
      />
        <Script
          defer
          type="text/javascript"
          src="https://donorbox.org/install-popup-button.js"
          id="donorbox-popup-button-installer"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '872800324995642');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=872800324995642&ev=PageView&noscript=1"
          />
        </noscript>

        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-T07D9QCKGL" />

      
    </html>
  );
}
