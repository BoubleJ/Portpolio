'use client'

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollToTopButton() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div
        className="w-12 h-12 border-solid border-4 border-black fixed right-40 bottom-10 z-20"
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon fontSize="large" className="w-2/4 m-auto block" />
      </div>
    </>
  );
}
