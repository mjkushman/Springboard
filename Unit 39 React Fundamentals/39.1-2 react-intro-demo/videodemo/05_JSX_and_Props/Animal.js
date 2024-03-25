// const Animal = (props) => {
// 	console.log(props);
// 	return (
// 		<ul>
// 			<li>Emoji: {props.emoji}</li>
// 			<li>Name: {props.name}</li>
// 			<li>Species: {props.species}</li>
// 			<li>IsCute: {props.isCute ? '✅' : '❌'}</li>
// 		</ul>
// 	);
// };


const Animal = (props) => {
	console.log(props)
	return (
		<ul>
			<li> Emoji: {props.emoji} </li>
			<li> Name: {props.name} </li>
			<li> Species: {props.species} </li>
			<li> Is Cute: {props.isCute ? '✅' : '👎'} </li>
		</ul>
	)
}