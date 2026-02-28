import { ApiSection } from "@/components/ApiSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JokeZone } from "@/components/JokeZone";
import { Nav } from "@/components/Nav";
import { StatsBar } from "@/components/StatsBar";
import { Testimonials } from "@/components/Testimonials";
import { Ticker } from "@/components/Ticker";
import { WarnBand } from "@/components/WarnBand";
import { getRandomJoke } from "@/data/jokes";

export default function HomePage() {
  const initialJoke = getRandomJoke();

  return (
    <main>
      <WarnBand />
      <Nav />
      <Hero />
      <Ticker />
      <JokeZone initialJoke={initialJoke} />
      <StatsBar />
      <Testimonials />
      <ApiSection />
      <Footer />
    </main>
  );
}
