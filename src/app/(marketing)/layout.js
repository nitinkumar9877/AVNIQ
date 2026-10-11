import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageTransition from "@/components/layout/PageTransition/PageTransition";

export default function MarketingLayout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <PageTransition>
        <main className="site-main">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
