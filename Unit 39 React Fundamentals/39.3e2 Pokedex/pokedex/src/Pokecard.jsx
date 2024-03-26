import './Pokecard.css'
const img_baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard(props) {

    let imgURL = `${img_baseURL}${props.id}.png`

    return (
    <div className="Pokecard" >
        <h2>{props.name}</h2>
         <p>{props.type} type </p>
           <div> <img src={imgURL} alt={props.name}/> </div>
        <p>EXP: {props.base_experience} </p>
    </div>
    
    

    )

}

export default Pokecard;