import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata = {
  title: "Dribbble",
  description: "Website to showcase designs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
