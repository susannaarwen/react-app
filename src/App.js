import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6 from './components/Day6';
import Day7 from './components/Day7';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Intro />
      
      </header>
      <body>
      <h1>Susanna's Epic Learning Diary</h1>
     
      <Day1 />

      <Day2 />
     
      <Day3 />

      <Day4 />

      <Day5 />

      <Day6 />

      <Day7 />

      </body>
      
    </div>
  );
}



export default App;
