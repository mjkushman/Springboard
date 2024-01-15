//document.getElementById('gallery');
const allH3s = document.querySelectorAll('h3');
//using regular for loop
for(let i = 0; i< allH3s.length; i++){
    allH3s[i].style.color = "pink"; // make sure to use [i] so we're making the change to each iteration of loop
}


const allH2s = document.getElementsByTagName('h2');
//using for of loop
for (let h2 of allH2s) {
    h2.style.color = 'purple';
    h2.style.fontSize = '50px';
}

// do it to images, add a border
const imgs = document.querySelectorAll('img')
for(let img of imgs) {
    img.style.width = '100px';
    img.style.border = '2px solid green';
}