import { useState } from 'react'

const Heading = props => <div><h2>{props.value}</h2></div>
const StatisticLine = ({name, value}) =>{
  return(
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
} 
 

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = () => good+neutral+bad
  if(total() <= 0) return(<p>No feedback given</p>);
  const avg = () => {
    // the average score (good: 1, neutral: 0, bad: -1)
    let avg = good * 1 + bad * -1;
    avg /= total();
    return avg;
  }
  const pos = () => good/total()*100
  return(
    <>
      <Heading value="statistics" />
      <table>
        <StatisticLine name="good&nbsp;" value={good} />
        <StatisticLine name="neutral&nbsp;" value={neutral} />
        <StatisticLine name="bad&nbsp;" value={bad} />
        <StatisticLine name="all&nbsp;" value={total()} />
        <StatisticLine name="average&nbsp;" value={avg()} />
        <StatisticLine name="positive&nbsp;" value={pos() + "%"} />
      </table>
    </>
  )
}

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
      <Heading value="give feedback" />
      <Button handleClick={addToGood} text="good" />
      <Button handleClick={addToNeutral} text="neutral" />
      <Button handleClick={addToBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App