import CompetitiveAdvantages from "@/components/home/CompetitiveAdvantages";
import Hero from "@/components/home/Hero";
import HomeProjects from "@/components/home/HomeProjects";
import PmManagment from "@/components/home/PmManagment";
import StatsBar from "@/components/home/StatsBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HomeProjects/>
      <CompetitiveAdvantages/>
      <PmManagment/>
    </>
  );
}
