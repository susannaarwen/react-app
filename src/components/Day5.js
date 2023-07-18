import secondsun from '../images/secondsun.png'

function Day5() {
    return (
        <article class = 'entry' id='day5'>
        <h2>Tuesday the 18th of July 2023</h2>
        <p>My song of the today today has been Second Sun by Nils Hoffman and Ben Bohmer. Why? Because it reminds me of coding.</p>
        <p>And the world can get me down - but it can never get me down, when I think of coding, for too long.</p>
        <img src={secondsun} alt="A blue planet or star surrounded by blue light. Album artwork for Second Sun's album." id="secondsun" />
       <section>
         <h3>MANY, MANY LEARNINGS FROM TODAY</h3>
         <h4>TypeScript Project</h4>
         <p>I completed my first ever project in TypeScript today. We agreed with my coach that I would do it outside of the Codecademy IDE and in VSCode. But because it was a debugging exercise it made sense to keep it in Codecademy.</p>
         <p>I'm actually really pleased with the results of this. I feel as if I learned a lot from it, and I feel that this has been hugely successful. YAY!</p>
         <p>I have to admit that I am really enjoying this TypeScript stuff and that I love adding types. <strong>What kind of a nerd does that make me?!</strong></p>
         <h4>Learning About the Virtual Dom</h4>        
       </section>
     </article>
    )
}

export default Day5;