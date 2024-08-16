// import styles from "./home.module.css";
import {
  HeroSection,
  ImpracticalityToReality,
  OurServices,
  RecentProjects,
  Discover,
  FavoriteClients,
  JoinUs
} from "./sections/index";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <ImpracticalityToReality />
        <OurServices />
        <RecentProjects />
        <Discover />
        <FavoriteClients />
        <JoinUs />
      </div>
    </>
  );
}
