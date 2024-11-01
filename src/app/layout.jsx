import "./globals.css";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";

import Provider from "@/components/Provider";
import cn from "@/helpers/cn";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = PlusJakartaSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "LRTJ Pay",
  description: "Study case from Bank DKI Frontend Web",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={cn(plusJakartaSans.variable, inter.variable)}>
      <Provider>
        <body className="flex items-center justify-center bg-[#E1E2EF]">
          <main className="flex size-fit min-h-[700px] w-full max-w-screen-mobile flex-col bg-white pb-4">
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
