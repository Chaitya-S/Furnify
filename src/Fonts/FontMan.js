import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";

const IN = Inter({ subsets: ["latin"] });
const MON = Montserrat({ subsets: ["latin"], weight: "400" });
const IV = localFont({
  src: "../Fonts/ivymode.ttf",
  display: "swap",
});

export const montserrat = MON.className;
export const ivymode = IV.className;
export const inter = IN.className;
