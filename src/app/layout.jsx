import "./globals.css";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Utility/Provider";
import Footer from "@/components/Footer";

// TODO ADD GOOD METDATA
export const metadata = {
  title: "Furnify!",
  description: "A revolutionary online 3D experience furniture store.",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body>
          <Toaster position="bottom-right" />
          <NavBar />
          <div className="min-h-screen bg-[#f8f0e5]">{children}</div>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
