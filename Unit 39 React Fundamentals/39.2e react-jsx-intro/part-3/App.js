const App = () => (
    <div>
        <Person name="Mike" age={30} hobbies={["magic","games","pizza parties"]} />
        <Person name="Zeke" age={2} hobbies={["snacks","cuddling","pizza parties"]} />
        <Person name="Courtnie Kushman" age={17} hobbies={["K Drama","Cuticle Care","Mike"]} />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))