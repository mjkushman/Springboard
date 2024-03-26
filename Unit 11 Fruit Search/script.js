const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const hasSuggestions = document.querySelector('.has-suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];
	 // this function should filter the list and return a filtered list
	 // DONE
	let lstr = str.toLowerCase() //creates a lowercase search string
	const lFuit = fruit.map(v => v.toLowerCase()) //lowercases the whole fruit array
	const filteredList = lFuit.filter(val => val.includes(lstr))
	results = filteredList.map(v => v[0].toUpperCase()+v.substring(1)) // re-capitalizes the first char in each string
	return results; //return the list of filtered search results
}

function searchHandler(e) {
	console.log('searchHandler function called');
	//this function should call the SEARCH function on every event
	let results = search(input.value);
	showSuggestions(results,input.value); // passes results fron Search function to ShowSuggestions
}

function clearField(){
	suggestions.innerHTML = ''
}
let timer;
function showSuggestions(results, inputVal) {
	// console.log('showSuggestions function called','results is',results,'inputVal is',inputVal);
	//it should take the RESULTS of the SEARCH function and append to dom
	//why does this need inputVal? is it to trigger useSuggestion? Guess I'll come back to this later

	clearField();
	
	const runTimer = () =>{
		timer = setTimeout(() => {clearField()}, 5000);
	}
	if(inputVal != ''){ 
		for(r of results){
			let newLi = document.createElement('li');
			newLi.innerText = r;
			suggestions.appendChild(newLi);
			// console.log(newLi) //so far so good
		};
	}
	clearTimeout(timer)
	runTimer()
	console.log('updated suggestions list',suggestions)	

}
function useSuggestion(e) {
	//should update the dom, replacing whats in the field with the item clicked on
	// console.log('clicked',e.target.innerText)//great
	let clickText = e.target.innerText;
	input.value = clickText;
	suggestions.innerHTML = '';

}



// input.addEventListener('keyup', () => {

// 	});
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

