// const removeButtons = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// for (let btn of removeButtons) {
// 	btn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// }

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const newFriend = document.createElement('li');
// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'UnFriend';
// 	removeBtn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// 	newFriend.innerText = input.value;
// 	newFriend.appendChild(removeBtn);
// 	friendList.appendChild(newFriend);
// 	input.value = '';
// });

// // REMOVED ALL FROM BELOW HERE
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// friendList.addEventListener('click', function(e) {
// 	if (e.target.tagName === 'BUTTON') {
// 		e.target.parentElement.remove();
// 	}
// 	else if (e.target.tagName === 'LI') {
// 		e.target.classList.add('best-friend');
// 		const heart = document.createElement('span');
// 		heart.innerHTML = '&hearts;';
// 		e.target.prepend(heart);
// 	}
// });

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const newFriend = document.createElement('li');
// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'UnFriend';

// 	newFriend.innerText = input.value;
// 	newFriend.appendChild(removeBtn);
// 	friendList.appendChild(newFriend);
// 	input.value = '';
// });


//MIKE WROTE ALL THE BELOW
// const removeButtons = document.querySelectorAll('li button'); //removed  for delegation
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list')


form.addEventListener('submit', function(e){
	e.preventDefault();
	console.log(input.value);
	const newFriend = document.createElement('li');
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'cancel me'
	newFriend.innerText = input.value;
	newFriend.appendChild(removeBtn);
	input.value = '';
	friendList.appendChild(newFriend);
})


// for(let btn of removeButtons){ //removed for delegation
// 	btn.addEventListener('click', function(e) {
// 		console.log('You clicked remove')
// 		console.log(e);
// 		e.target.parentElement.remove()

// 	})
//}

friendList.addEventListener('click', function(e){
	//console.log(e.target);
	if(e.target.tagName ==='BUTTON'){
		e.target.parentElement.remove();
	}
	else if(e.target.tagName === 'LI'){
		console.log('You clicked LI');
		e.target.classList.add('best-friend');
		const heart = document.createElement('span'); // creates a heart variable
		heart.innerHTML = '&hearts;' // adds the heart to our heart variable, prevously empty
		e.target.prepend(heart); //appends the heart to this element
	}
})

 