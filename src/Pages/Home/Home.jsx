import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import EducationalQualification from "../../Components/EducationalQualification/EducationalQualification";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <EducationalQualification></EducationalQualification>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
