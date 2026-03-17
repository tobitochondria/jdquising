import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import ProfessionalExperience from "./sections/ProfessionalExperience";
import PublishedWorks from "./sections/PublishedWorks";
import Education from "./sections/Education";
import AcademicAwards from "./sections/AcademicAwards";
import AcademicConferences from "./sections/AcademicConferences";
import ShortCourses from "./sections/ShortCourses";
import Fellowships from "./sections/Fellowships";
import SpeakingEngagements from "./sections/SpeakingEngagements";
import OtherWrittenWorks from "./sections/OtherWrittenWorks";
import MediaAppearances from "./sections/MediaAppearances";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ProfessionalExperience />
      <PublishedWorks />
      <Education />
      <AcademicAwards />
      <AcademicConferences />
      <ShortCourses />
      <Fellowships />
      <SpeakingEngagements />
      <OtherWrittenWorks />
      <MediaAppearances />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
