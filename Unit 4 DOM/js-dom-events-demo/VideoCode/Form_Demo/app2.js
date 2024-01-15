const form = document.querySelector("#bbc");
const brandInput = document.querySelector("input[name='brandname']");
const fontSize = document.querySelector("input[name='fontsize']");
const brandColor = document.querySelector("input[name='brandcolor']");
const results = document.querySelector('#results');


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit')
    const newLogo = makeLogo(
        brandInput.value, 
        brandColor.value, 
        fontSize.value,
        );
    results.appendChild(newLogo);
    brandColor.value =''
})


function makeLogo(text, color, size) {
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size+'px';
    return logo;
}

