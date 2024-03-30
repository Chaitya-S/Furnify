import "./globals.css";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";

// import { CartProvider } from "../components/CartContext";

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
          <Toaster />
          <NavBar />
          <div className="min-h-screen bg-[#f8f0e5]">{children}</div>
        </body>
      </html>
    </Provider>
  );
}
