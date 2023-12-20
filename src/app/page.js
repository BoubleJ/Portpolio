import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WhoAmI from "./who_am_i";
import Line from "./line";
import Project_box from "./project_box";

export default function Home() {
  return (
    <main>
      <div className="w-12 h-12 border-solid border-4 border-black fixed right-40 bottom-10 ">
        <ArrowUpwardIcon fontSize="large" className="w-2/4 m-auto block" />
      </div>
      <WhoAmI />
      <Line />

      <Project_box />
    </main>
  );
}
