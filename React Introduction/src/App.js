import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Banner = ({text}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))
  const [most, setMost] = useState(0)

  const handleAnecdote = () => {
    setSelected(parseInt(Math.random()*7))
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    if (copy[selected] > copy[most]) {
      setMost(selected)
    }
  }

  return (
    <>
      <Banner text={"Anecdote of the day"}/>
      <div>
        {anecdotes[selected]}
        <br />
        has {points[selected]} votes
      </div>
      <Button 
        text={"vote"}
        handleClick={handleVote}
      />
      <Button 
        text={"next anecdote"}
        handleClick={handleAnecdote}
      />
      <Banner text={"Anecdote with most votes"}/>
      {anecdotes[most]}
      <br />
      has {points[most]} votes
    </>
  )
}

export default App