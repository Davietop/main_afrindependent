"use client";

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      eventParams?: Record<string, any>
    ) => void;
  }
}

import { useReportWebVitals } from "next/web-vitals";

const WebVitals = () => {
  useReportWebVitals((metric) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      let eventParams: { [key: string]: any } = {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        metric_id: metric.id,
        non_interaction: true,
      };
      window.gtag("event", metric.name, eventParams);
    }
  });
  return <></>;
};

export default WebVitals;
