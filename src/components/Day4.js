function Day4() {
    return (
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
            <li>I learned about the <code>any</code> type; if you don't declare a type in your code then TypeScript may default to it.</li>
            <li>I learned about the syntax for a type declaration which I decuded in my first post: a colon (<code>:</code>) and then the name of the type.</li>
            <li>And to summarise with this greate quote from Codecademy: "TypeScript expects the data type of the variable to match the type of the value initially assigned to it at its declaration - this is known as <em>type inference</em>.</li>
          </ol>
        </section>
      </article>
    )
}

export default Day4;