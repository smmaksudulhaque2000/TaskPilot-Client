import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import FAQ from "../../Components/FAQ/FAQ";
import Features from "../../Components/Features/Features";
import PricingPlans from "../../Components/PricingPlans/PricingPlans";



const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <div className="px-4">
      <AboutMe></AboutMe>
      <Features></Features>
      <PricingPlans></PricingPlans>
      <FAQ></FAQ>
      <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
