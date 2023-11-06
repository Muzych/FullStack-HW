import { useState } from 'react'


const Header = ({text}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Button = ({handClick, text}) => {
  return (
    <>
      <button onClick={handClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  
  if (text === "positive") {
    return <p>{text}: {value*100}%</p>
  }
  else {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </>
    )
  }
}

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad){
    return(
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value={good+neutral+bad}/>
        <StatisticLine text="average" value={(good+neutral-bad)/good+neutral+bad}/>
        <StatisticLine text="positive" value={good/(good+neutral+bad)}/>
      </div>
    )
  }
  else {
    return <p>No feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text={"give feedaback"}/>
      <Button text={"good"} handClick={goodClick}/>
      <Button text={"neutral"} handClick={neutralClick}/>
      <Button text={"bad"} handClick={badClick}/>
      <Header text={"statics"}/>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App