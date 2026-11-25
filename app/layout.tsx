import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fifteen Rooftop | Above the Ordinary",
  description: "A rooftop dining and lounge experience on the 15th floor at The Curve By The Park, Nairobi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
