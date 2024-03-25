const RandomChoice = (props) => {
  const idx = Math.floor(Math.random() * props.choices.length);
  const choice = props.choices[idx];
  return (
    <div>
      <p> these are the choices: {props.choices}</p>
      <h4>Random Choice is: {choice}</h4>
    </div>
  )
}
