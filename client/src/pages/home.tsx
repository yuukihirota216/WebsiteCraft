import HeroSection from "@/components/hero-section";
import CustomerProblems from "@/components/customer-problems";
import ProblemSolution from "@/components/problem-solution";
import LineCTA from "@/components/line-cta";
import TrustInfo from "@/components/trust-info";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="side-borders max-w-md mx-auto min-h-screen bg-white">
      <HeroSection />
      <CustomerProblems />
      <ProblemSolution />
      <LineCTA />
      <TrustInfo />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
