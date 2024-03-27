import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  const StatisticLine  = props => <div>{props.text}{props.value}{props.symbol}</div>

  const Statistics = ({ good, neutral, bad }) => {
    let total= good+neutral+bad
    
    if (total){
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine  lay value={good} text="Good: " />
        <StatisticLine  value={neutral} text="Neutral: " />
        <StatisticLine  value={bad} text="Bad: " />
        <StatisticLine  value={good+neutral+bad} text="All: " />
        <StatisticLine  value={(good+bad*-1)/(good+neutral+bad)} text="Average: " />
        <StatisticLine  value={good/(good+neutral+bad)*100} text="Positive: " symbol="%" /> 
      </div>
    )
    
  } else 
  return (
    <div>
      <h1>Statistics</h1>
      No feedback given
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
    <h1>Feedback</h1>
    <div>
        
      <Button handleClick={() => setGood(good + 1)} text="GOOD" /> 
      &nbsp;
      <Button handleClick={() => setNeutral(neutral + 1)} text="NEUTRAL" /> 
      &nbsp;
      <Button handleClick={() => setBad(bad + 1)} text="BAD" /> 
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div></div>
  )
}

export default App