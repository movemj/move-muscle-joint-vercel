"use client";

import { useEffect } from "react";

interface GoogleAnalyticsWindow extends Window {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
}

export function AnalyticsEventTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const eventName = href.startsWith("https://mmj.janeapp.com") || href === "/new-patient-offer"
        ? "book_click"
        : null;

      if (!eventName) return;

      (window as GoogleAnalyticsWindow).gtag?.("event", eventName, {
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
