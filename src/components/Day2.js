import everythingiwanted from '../images/everythingiwanted.png'

function Day2() {
    return (
        <article class = 'entry' id='day2'>
        <h2>Thursday the 13th of July 2023</h2>
          <section class="song-of-the-day">
            <h4>Today's song of the day is:</h4>
            <p>"Everything I Wanted" by Billie Eilish.</p>
            <img src={everythingiwanted} alt="A cubist painting of a suspension bridge in pastel colors. Album artwork for Billie Eilish's 'everything i wanted'." />
          </section>
          <h3>Erm so what have I been learning about TypeScript today?</h3>
          <h4>Well, I started a 50 minute TypeScript video...</h4>
          <ul>
            <li>It got me to install TypeScript using the command line</li>
            <li>It talked about TypeScript's growing popularity</li>
            <li>I ran my very first 'Hello World' programme in TypeScript</li>
          </ul>
        </article>
  
    )
}
export default Day2;