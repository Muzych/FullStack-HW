import { useState } from 'react';


const Banner = ({text}) => {
  return (
    <div>
      <h1><b>{text}</b></h1>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
      <tr>
      <td><b>{text}: {value}</b></td>
      </tr>
  )
}
const Statistics = ({good, neutral, bad}) => {

  if (good === 0 && neutral === 0 && bad === 0){
    return(
      <div>
        <h3>
          <b>No feedback given</b>
        </h3>
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + neutral + bad}/>
      <StatisticLine text="average" value={(good + neutral + bad)/3}/>
      <StatisticLine text="positive" value={good / (good + neutral + bad)} />
      </tbody>
      </table>
    </div>
  )
}

const Button = ({text, handClick}) => {

  return (
    <div>
      <button onClick={handClick}>{text}</button>
    </div>
  )
  
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))


  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotesIndex = votes.indexOf(Math.max(...votes))

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  return (
    <div>
      <Banner text={"give feedback"}/>
      <Button text={"good"} handClick={()=>setGood(good + 1)}/>
      <Button text={"neutral"} handClick={()=>setNeutral(neutral + 1)}/>
      <Button text={"bad"} handClick={()=>setBad(bad+1)}/>
      <Banner text={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes
      <Button text={"vote"} handClick={handleVotes}/>
      <Button text={"next anecdote"} handClick={()=>setSelected(Math.floor(Math.random()*7))}/>
      <Banner text={"Anecdote with most votes"} />
      {anecdotes[maxVotesIndex]} <br />
      has {votes[maxVotesIndex]} votes
    </div>
  )
}

export default App