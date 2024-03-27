import { useState } from 'react'







const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  const Display = props => <div>{props.text}{props.value}</div>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      
      <Button handleClick={() => setGood(good + 1)} text="GOOD" /> 
      &nbsp;
      <Button handleClick={() => setNeutral(neutral + 1)} text="NEUTRAL" /> 
      &nbsp;
      <Button handleClick={() => setBad(bad + 1)} text="BAD" /> 
      
      <Display value={good} text="Good:" />
      <Display value={neutral} text="Neutral:" />
      <Display value={bad} text="Bad:" />
    </div>
  )
}

export default App