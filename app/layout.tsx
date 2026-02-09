
import Header from "@/components/ui/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "sufifa",
  description: "Sustainable Fishing Farming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
