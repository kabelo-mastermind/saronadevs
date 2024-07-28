
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const Home = () => (
  <>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
    </div>
  </>
);

export default Home;
