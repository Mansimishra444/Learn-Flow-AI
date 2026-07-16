import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GenerateForm from "../components/GenerateForm";
import FeatureCard from "../components/FeatureCard";
import FloatingBackground from "../components/FloatingBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Animated Background */}
      <FloatingBackground />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10">

        <Navbar />

        <main className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

          <Hero />

          <div className="max-w-4xl mx-auto">
            <GenerateForm />
          </div>

          <FeatureCard />

        </main>

      </div>

    </div>
  );
}