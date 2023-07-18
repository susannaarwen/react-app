import susanna from '../images/susanna.png';

function Intro () {
    return (
        <article id="intro">
        <p>Hello and welcome to Susanna's super duper and mega incredible React app.</p>
       <p>Here I am going to put a log of all the super cool things I have been learning and doing on my bootcamp.</p>
       <p>If only I knew how to put each section into a new component.</p>
       <img src={susanna} id="susanna-1" alt="A close-up selfe of a smiling blonde woman with blue eyes in a green shirt sitting on a train" />
       </article>
    )
}

export default Intro;