import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import DesignVsCodePlayground from "@/components/DesignVsCodePlayground";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ProjectEstimator from "@/components/ProjectEstimator";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Interactive Background Canvas */}
      <InteractiveBackground />

      {/* Smooth Trailing Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Process />
        <Projects />
        <DesignVsCodePlayground />
        <Skills />
        <About />
        <Testimonials />
        <ProjectEstimator />
        <ContactForm />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  );
}
