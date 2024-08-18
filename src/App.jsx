import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/company/Company";
import Services from "./components/Services/Services";
import CaseStudies from "./components/caseStudies/CaseStudies";
import Proposals from "./components/Proposal/Proposal";
import WorkProcess from "./components/workProcess/WorkProcess";
import Teams from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Company />
      <Services />
      <Proposals />
      <CaseStudies />
      <WorkProcess />
      <Teams />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;