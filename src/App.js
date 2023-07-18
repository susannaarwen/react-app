import logo from './logo.svg';
import './App.css';
import susanna from './images/susanna.png';
import jsloop from './images/jsloop.png';
import tsloop from './images/tsloop.png';
import everythingiwanted from './images/everythingiwanted.png'
import secondsun from './images/secondsun.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
         Hello and welcome to Susanna's super duper and mega incredible React app.
        </p>
        <p>
          Here I am going to put a log of all the super cool things I have been learning and doing on my bootcamp.
        </p>
        <p>
          If only I knew how to put each section into a new component.
        </p>
        <img src={susanna} id="susanna-1" alt="A close-up selfe of a smiling blonde woman with blue eyes in a green shirt sitting on a train" />
      </header>
      <body>
      <h1>Susanna's Epic Learning Diary</h1>
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

      <article class = 'entry' id='day3'>
        <h2>Friday the 14th of July 2023</h2>
        <p>Erm so today was a very very big and special day for me.</p>
        <p>I built my first text-based adventure game in TypeScript!</p>
        <p>It was based on a crisis that we had all been having on the apprenticeship, as the problem was so hard. So it was in honour of, and dedicated to, my friend Robert on the apprenticeship!</p>
        <p>I can neither confirm nor deny that any Chat GPT was used - but even then it was still such a big achievement for me.</p>
      </article>

      <article class = 'entry' id='day4'>
        <h2>Monday the 17th of July 2023</h2>
        <p>So today was very very special indeed to me.</p>
        <p>With the permission of my coach on the apprenticeship, I have taking TypeScript lessons on Codecademy during the afternoon of my bootcamp.</p>
        <p>Today I learned looooooooooooooooads!</p>
        <p>Here is exactly what I learned:</p>
        <section class="learning-list">
          <ol>
            <li>I learned about the fact that TypeScript knows what <em>shapes</em> our objects adhere to - for examples it knows their built in properties and methods.</li>
            <li>This allows us to quickly locate bugs in our code.</li>
            <li>For example, the <code>tsc</code> command - this catches loads of errors and is soooo cooooooool.</li>
            <li>I learned about the <code>any </code> type; if you don't declare a type in your code then TypeScript may default to it.</li>
            <li>I learned about the syntax for a type declaration which I decuded in my first post: a colon (<code>:</code>) and then the name of the type.</li>
            <li>And to summarise with this greate quote from Codecademy: "TypeScript expects the data type of the variable to match the type of the value initially assigned to it at its declaration - this is known as <em>type inference</em>.</li>
          </ol>
        </section>
      </article>

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
        </section>
      </article>

      </body>
      
    </div>
  );
}



export default App;
