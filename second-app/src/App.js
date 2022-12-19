import { useState } from 'react'

const Display = props => props.isHeading ? <div><h2>{props.value}</h2></div> : <div>{props.value}</div> 

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = () => setGood(good+1)
  const addToNeutral = () => setNeutral(neutral+1)
  const addToBad = () => setBad(bad+1)

  return (
    <div>
      <Display value="give feedback" isHeading />
      <Button handleClick={addToGood} text="good" />
      <Button handleClick={addToNeutral} text="neutral" />
      <Button handleClick={addToBad} text="bad" />

      <Display value="statistics" isHeading />
      <Display value={"good " + good} />
      <Display value={"neutral " + neutral} />
      <Display value={"bad " + bad} />
    </div>
  )
}

export default App