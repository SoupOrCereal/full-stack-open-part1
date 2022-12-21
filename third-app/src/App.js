import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Heading = props => <div><h2>{props.value}</h2></div>
 
const Anecdote = ({number}) =>{
  let anecdoteIndex = number % anecdotes.length
  return(
    <p>{anecdotes[anecdoteIndex]}</p>
  )
}

const Votes = ({voteCount}) =>{
  return(
    <p>has {voteCount} votes</p>
  )
}

const App = () => {
  const [anecdoteNumber, setanecdoteNumber] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => setanecdoteNumber(anecdoteNumber+1)
  const voteForAnecdote = () =>{
    let anecdoteIndex = anecdoteNumber % anecdotes.length;
    const copyVotes = [...votes]
    copyVotes[anecdoteIndex] += 1
    setVotes(copyVotes)
  } 

  return (
    <div>
      <Heading value="Anecdote of the day" />
      <Anecdote number={anecdoteNumber} />
      <Votes voteCount={votes[anecdoteNumber % anecdotes.length]} />
      <Button handleClick={voteForAnecdote} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />
      <Heading value="Anecdote with most votes" />
      <Anecdote number={[...votes].indexOf(Math.max(...votes))} />
    </div>
  )
}

export default App