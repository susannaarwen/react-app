import Nav from "./Nav";
import windfarm from "../images/windfarms.png"
import susannaengineer from "../images/susannaengineer.png";

function AboutMePage () {
    return (
        <>    
        <Nav />
        <article id = "about-me">
            <h1>About Me</h1>
            <p>Hi, my name is Susanna and I'm a 29-year-old Trainee Software Engineer based in England, slightly to the west of Brighton.</p>
            <img src={windfarm} id="windfarm" alt="An offshore windfarm at sunset, with the sea, and an orange sky." />
            <p>I love offshore wind farms, I love electricity, and I love renewable energy. For many years in life my motto was "when I get sad I stop being sad and I look at the offshore windfarms instead".</p>
            <p>But now I think I might have to change it to, "when I get sad, I stop being sad, and I build React websites instead." </p>
            <img src={susannaengineer} id="susannaengineer" alt="A close up of a young blonde woman. Next to her is a purple quote on a pale yellow background. Text says 'After two months of coding, I knew I loved it so much I wanted to do it for the rest of my life. - Susanna Chapman, Software Engineer'." />
            </article>
        </>
    )
}

export default AboutMePage;