import { useState } from 'react'

const getRandomInt = (max) =>  {
  const randomInteger = Math.floor(Math.random() * max)
  return randomInteger;
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ anecdotes, points, best }) => {

    
    if (best || best === 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
      {anecdotes[best]}
      <br></br>
      has {points[best]} votes
        
      </div>
    )
    
  } else 
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      No feedback given
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
    'Friends do not let friends deploy to production just before Vappu'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [best, setBest]= useState(null)

  const addVote = anecdote => {
    const copy = [...points]
    copy[anecdote] += 1
    determineBest(copy)
    setPoints(copy)
  }

  const determineBest = scores => {
    let bestScore
    let bestAnecdote
    scores.forEach(function callback(value, index) {
      if (!bestScore || value > bestScore ) {
        bestScore = value
        bestAnecdote = index
      }
    });
    return setBest(bestAnecdote)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {points[selected]} votes
      <br></br>
      <Button handleClick={() => addVote(selected)} text="vote" /> 
      <br></br>
      <Button handleClick={() => setSelected(getRandomInt(anecdotes.length))} text="next anecdote" /> 
      
      <Statistics best={best} anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App