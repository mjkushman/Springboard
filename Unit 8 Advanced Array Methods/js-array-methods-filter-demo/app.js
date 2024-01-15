const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

// const containsVowel = function(word) {
// 	for (let char of word) {
// 		if (isVowel(char)) return true;
// 	}
// 	return false;
// };






// const isVowel = function(char) {
// 	return 'aeiou'.indexOf(char) !== -1;
// };

const isVowel = function(char){
	return 'aeiou'.indexOf(char) != -1;
}

// const longWords = words.filter(function(word) {
// 	return word.length >= 20;
// });
const longWords = words.filter(function(word){
	return word.length >= 20;
})


// const cOrUWords = words.filter(function(w) {
// 	return w[0] === 'u' || w[0] === 'c';
// });

const cOrUWords = words.filter(function(w){
	return w[0] === 'u' || w[0] === 'c'
})


// const containVowels = words.filter(containsVowel);
const containsVowel = function(word){
	for(let c of word){
		if(isVowel) return true;
	}
	return false;
}

// const noVowels = words.filter(function(word) {
// 	return !containsVowel(word);
// });

const noVowels = words.filter(function(w){
	
})

function extractCompletedTodos() {
	const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	return Array.from(allCheckboxes)
		.filter(function(box) {
			return box.checked;
		})
		.map(function(checkbox) {
			return checkbox.parentElement.innerText;
		});
}

function myFilter(arr, callback) {
	const filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}

//my version
// function myFilter(arr,callback){
// 	const filteredArray = []
// 	for(let i = 0; i < arr.length; i ++);{
// 		callback(arr[i],i,arr){
// 			filteredArray.push(arr[i];)
// 		}
// 	}
// 	return filteredArray
// }



const shorties = myFilter(words, function(word) {
	return word.length <= 10;
});

const everyOtherWord = myFilter(words, function(word, i) {
	return i % 2 === 0;
});



// const checked = 

// const completed = checked

function extractCompletedTodos(){
	const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	return Array.from(allCheckboxes)
	.filter(function(box){
		return box.checked;
	})
	.map(function(checkbox){
		return checkbox.parentElement.innerText;
	});
}

// function extractCompletedTodos() {
// 	const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
// 	return Array.from(allCheckboxes)
// 		.filter(function(box) {
// 			return box.checked;
// 		})
// 		.map(function(checkbox) {
// 			return checkbox.parentElement.innerText;
// 		});
// }