import Contact from "./page_sections/contact";
import HearoSection from "./page_sections/hearo";
import Introduction from "./page_sections/introduction";
import NavigationBar from "./page_sections/navbar";
import Projects from "./page_sections/projects";
import Techstacks from "./page_sections/techstacks";
import Testimonials from "./page_sections/testimonials";
import WorkExperience from "./page_sections/workxp";

const HomePage = ()=>{
    return (
        <>
            <NavigationBar/>
            <HearoSection/>
            <Introduction/>
            <WorkExperience/>
            <Techstacks/>
            <Projects/>
            <Testimonials/>
            <Contact/>
        </>
    );
}

export default HomePage;

// 1.Nav
// 2.Hearo
// 3.intro
// 4.Workxp
// 5.Techniqe
// 6.projects
// 7.testimonials
// 8.contact