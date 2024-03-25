// document.addEventListener('DOMContentLoaded', console.log('Ready to party with jQUery!'))

// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$('document').on('DOMContentLoaded', console.log("Let's get ready to party with jQuery!"))

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

// 3. Remove the last paragraph in the article.
$('p').eq(-1).remove()

// 4. Set the font size of the title to be a random pixel size from 0 to 100.
$('h1').css('font-size',Math.random()*100)

// 5. Add an item to the list; it can say whatever you want.
$('li').append('<li>hello dolly</li>')

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside ol').html('<p> I sincerely apologize for attemping to put a list here. This paragraph is better</p>')

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

updateBg =() =>{
    let red = $('#red').val()
    let blue = $('#blue').val()
    let green = $('#green').val()

    $('body').css('background-color', `rgb(${red},${blue},${green})`)
}

$('.form-control').on('click',updateBg)


// 8. Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
    $(this).remove()
}
)