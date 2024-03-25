const App = () => (
  <div>
    <Alert>
      <h1>HELLO!!!!</h1>
    </Alert>
    <RandomChoice choices={['red', 'green', 'yellow']} />
     <RandomNumRange min={20} max={30} />
    <RandomNumRange min={30} max={100} />
    <RandomNumRange />

    < Animal 
    name = "Zeke Kushman"
    species = " Sharpei Corgi Mix"
    emoji = "🐕"
    isCute={true}
    />
    
    <Animal
      name="Albus The Dog"
      species="Bernadoodle"
      emoji="🐩"
      isFriendly={true}
      isCute={false}
    />
    <Animal name="Patrick" species="Red Fox" emoji="🦊" />
    <RandomNum />
    <RandomNum />
    <RandomNum />
    <Bouncer age={19} />
    <Bouncer age={101} />
    <Bouncer age={39} />
    <TodoList todos={['walk chickens', 'feed chickens', 'eat chickens']} />

  </div>
)



ReactDOM.render(<App />, document.getElementById("root"))
