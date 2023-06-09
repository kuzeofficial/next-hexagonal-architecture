import { Poppins } from "next/font/google";
import "@/styles/globals.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className + " bg-gray-900/90"}>
      <body className="max-w-[1400px] mx-auto mt-40 justify-center text-center h-full sm:px-0 px-8">
        {children}
      </body>
    </html>
  );
}
