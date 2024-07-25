import PageTitle from "../Components/PageTitle";
<<<<<<< HEAD
import Section from "../Components/Section";
import Description from "../Components/Description";
import HrScroller from "../Components/HrScroller";
import Testimonial from "../Components/Testimonial";
import { Button } from "react-bootstrap";
const Career = () => {
    return ( <><PageTitle title={"Career"}/>
    <Section ID={"career"} header={"Contact Us"}>
            <Description img={"/Career/culture.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Our Company Culture", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "Our Values", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits of Working With Us", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                ]} />
        </Section>
        <Section ID={"career"} header={"Opportunities For You"}>
            <Description lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Our Company Culture", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "Our Values", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-pen-to-square", "header": "Benefits of Working With Us", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
            ]} />
        </Section>
        <Section ID={"employees"} header={"Employee Testimonials"}>
            <HrScroller>
                <Testimonial img={"/Career/profile.png"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}/>
                <Testimonial img={"/Career/profile.png"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}/>
                <Testimonial img={"/Career/profile.png"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}/>
                <Testimonial img={"/Career/profile.png"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}/>

                    
                
            </HrScroller>
            <div className="w-100 d-flex"><a className="mx-auto" href="/error"><Button variant="dark">Apply Now <i className="fa-solid fa-user-check"></i></Button></a></div>
        </Section>
        </> 
        
    );
}
 
=======
const Career = () => {
    return (<>
        <PageTitle title={"Career"} />
        Career
    </>);
}

>>>>>>> bc07a2be9149ceb1c74de82ee51ba7a620e25980
export default Career;