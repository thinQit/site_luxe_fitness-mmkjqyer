import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Luxe Fitness Studio",
  description: "High-intensity training in a high-design space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
