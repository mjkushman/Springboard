const Bouncer = (props) => {
  let BouncerReply;
  if (props.age < 18) {
    reply = "Sorry kid, you can't come in"
  } else if (props.age < 21) {
    BouncerReply = "You can come in, but no drinking"
  } else {
    BouncerReply = <span>
      Come in, you CAN drink!
      <img src="https://media.giphy.com/media/eXg8Ij7JgnyDu/giphy.gif" />
    </span>
  }
  return (
    <div>
      <p>
        <b>Bouncer:</b> How old are you?
      </p>
      <p>
        <b>You:</b> I am  {props.age} years old
      </p>
      <p>
        <b>Bouncer:</b> {BouncerReply}
      </p>
    </div>
  )
}