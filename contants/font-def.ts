import localFont from "next/font/local";

const nohemi = localFont({
  variable: "--font-nohemi",
  src: [
    {
      path: "../public/fonts/nohemi/Nohemi-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

const inter_tight = localFont({
  variable: "--font-inter-tight",
  src: [
    {
      path: "../public/fonts/inter_tight/InterTight-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

const ojuju = localFont({
  variable: "--font-ojuju",
  src: [
    {
      path: "../public/fonts/ojuju/Ojuju-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/ojuju/Ojuju-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ojuju/Ojuju-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ojuju/Ojuju-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ojuju/Ojuju-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ojuju/Ojuju-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ojuju/Ojuju-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export { nohemi, inter_tight, ojuju };
