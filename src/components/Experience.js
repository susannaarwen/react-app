import Nav from "./Nav";
import windfarm2 from "../images/windfarm2.png"
import windfarm3 from "../images/windfarm3.png"

function ExperiencePage () {
    return (
        <>
            <Nav /> 
            <article id="experience">
                <h1>My Experience</h1>
                <img src={windfarm2} id="windfarm2" alt="An onshore wind farm in Luxembourg in fields. Fields are yellow." />
                <p>I have two Master's degrees in Sustainable Development; one in Marine Spatial Planning and one in Urban Development, specialising in Eco-Industrial Parks.</p>
                <p>I first found Software Engineering when I was working in the Renewable Energy Industry, and that was it, I immediately loved it, and knew that I had to be doing it forever.</p>
                <p>In the last few weeks I have found React, and that was it, I knew that I had to be doing it forever. Due to my own neurodiversity, and due to my background in accessibility, I am super super keen and excited to build beautiful and accessible UI's which will make all of my users feel held, loved, and supported.</p>
                <img src={windfarm3} id="windfarm3" alt="An onshore wind farm in Luxembourg in fields. Fields are green." />
            </article>
        </>
    )
}

export default ExperiencePage;