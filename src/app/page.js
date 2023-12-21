import Image from "next/image";

import WhoAmI from "./who_am_i";
import Line from "./line";
import Project_box from "./project_box";
import ScrollToTopButton from "@/app/scroll_to_top";

export default function Home() {
  return (
    <main>
      <ScrollToTopButton />

      <WhoAmI />
      <Line />

      <Project_box />
    </main>
  );
}
