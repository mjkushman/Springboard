// Write the code necessary to do the following:

// 1. Select the section with an id of container without using querySelector.
document.getElementById('container')

// 2. Select the section with an id of container using querySelector.
document.querySelector("section[id='container']")


// 3. Select all of the list items with a class of “second”.
document.getElementsByClassName('second')

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const ol = document.getElementsByTagName('ol')
ol[0].getElementsByClassName('third')

// 5. Give the section with an id of container the text “Hello!”.
const container = document.getElementById('container')
container.innerText="Hello"

// 6. Add the class main to the div with a class of footer.
const footer = document.querySelector('div[class="footer"]')
footer.classList.add("main")

// 7. Remove the class main on the div with a class of footer.
//footer is already set above
footer.classList.remove("main")

// 8. Create a new li element.
const newLi = document.createElement('li')

// 9. Give the li the text “four”.
newLi.innerText = "four"

// 10. Append the li to the ul element.
const list = document.querySelector('ul')
list.append(newLi)

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olLis = ol[0].querySelectorAll('li') //ol is already set above. This puts the list items in their own variable
for(li of olLis) {
    li.style.color="green";
}

// 12. Remove the div with a class of footer
//footer is already set above
footer.remove();