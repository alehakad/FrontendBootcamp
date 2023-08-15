import logo from "./logo.svg";
import "./App.css";


function App() {
  const showCompany = (name, revenue) => <div id={name}>{name} makes {revenue} every year</div>

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]


  const getClassName = (temperature) => temperature>15 ? temperature<30 ? "fair" : "hell-scape" : "freezing"

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" class={getClassName(12)}></div>
        <div id="weatherBox" class={getClassName(23)}></div>
        <div id="weatherBox" class={getClassName(32)}></div>
      </div>
    </div>
  )
}
  {/*return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(c=>showCompany(c.name, c.revenue))}
      </div>
    </div>
  )*/}
  {/*const getMorningGreeting = () => "Good morning!"
  const getEveningGreeting = () => "Good evening!"

  return (
    [getEveningGreeting(),
    getMorningGreeting(),<p>P tag</p>]
    )*/}

export default App;
