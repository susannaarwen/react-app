import jsloop from '../images/jsloop.png';
import tsloop from '../images/tsloop.png';

function Day1() {
    return (
        <article class = 'entry' id='day1'>
        <h2>Wednesday the 12th of July 2023</h2>
       <p>Today, I have been learning about loops in TypeScript</p>
       <p>It turns out that loops in TypeScript are extremely similar to those in JavaScript.</p> 
       <ul>
        <li>Definite loops</li>
        <li class="indented">These are like the <code>for</code> loops</li>
        <li>Indefinite loops</li>
        <li class="indented">These are like the <code>while</code> loops and the <code>do...while</code> loops</li>
       </ul>
       <section id="loop-differences">
        <h3>Here is an example of the difference between JavaScript and TypeScript in a <code>for</code> loop.</h3>
        <p>As a reminder, here is a good old JavaScript <code>for</code> loop:</p>
        <img src={jsloop} id="jsloop" alt="A code example of a for loop in JavaScript taken from Chat GPT." />
        <p>And here is the same <code>for</code> loop but in TypeScript:</p>
        <img src={tsloop} id="tsloop" alt="A code example of a for loop in TypeScript taken from Chat GPT." />
        <p>As you can see, the variable <code>i</code> is declared to be a number.</p>
        <p>This is a nice little intro to TS for me: I can see that variable declaration might look a little something like this:</p>
          <ul>
            <li>Put <code>let</code> or <code>const</code></li>
            <li>Put the name of the variable</li>
            <li>Then put a colon directly after</li>
            <li>Then put a space and the name of the data type with no quotation marks</li>
            <li>Then put an equals, and then the value of the variable, as per usual</li>
          </ul>
        <p>According to some reading I've been doing, TypeScript would also tell you if you were to try and assign the variable <code>i</code> to a constant.</p>
        </section>
      </article>
    )
}

export default Day1;