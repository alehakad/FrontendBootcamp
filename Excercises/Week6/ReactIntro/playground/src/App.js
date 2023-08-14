import logo from "./logo.svg";
import "./App.css";


function App() {
  const getMorningGreeting = () => {"Good morning!"}
  const getEveningGreeting = () => {"Good evening!"}

  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 2</h4 >
        <div className="exercise" id="spotcheck-2">
          {new Date().getHours()>12 ? getMorningGreeting: getEveningGreeting}
        </div>
      </div>
    </div>
  )
}

export default App;
