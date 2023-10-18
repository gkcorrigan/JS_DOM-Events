console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1Paragraph = document.getElementById("node1");
node1Paragraph.textContent = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2Paragraph = document.getElementsByClassName("node2");
console.log(node2Paragraph);
node2Paragraph[0].textContent = "I used the getElementByClassName('node2') method to access this"
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const allThreeHeaderTags = document.getElementsByTagName("h3");
for (let headerText of allThreeHeaderTags){
    headerText.textContent = "I used the getElementByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
const parent = document.getElementById("parent");

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let para = document.createElement("p");
para.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method

parent.appendChild(para);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const anchorOne = document.createElement("a");
// const link = document.anchorElement.link;
anchorOne.textContent = "I am an a tag";
anchorOne.href = "https://truecoders.io";
parent.insertBefore(anchorOne, para);
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
const newChildPara = document.createElement("p");
newChildPara.textContent = "New Child Node";

const parent2 = document.getElementById("exercise-container3");
const nodeToReplace = document.getElementById("N1");



// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
parent2.replaceChild(newChildPara, nodeToReplace);
setTimeout(() => {
    newChildPara.remove();
}, 3000);
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const groceryUL = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((grocery, index, array) => {
    const newLI = document.createElement("li");
    newLI.textContent = grocery;
    groceryUL.append(newLI);
});

document.querySelector("#container").append(groceryUL);
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

    function show(){
        //creation
    const modalDiv = document.createElement("div");
    const modalCard = document.createElement("div");
    const modalPara = document.createElement("p");
    const modalCloseBtn = document.createElement("button");
        //modification to the element
    modalPara.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    modalDiv.id = "modal";
    modalCard.classList.add("modal-card");
    modalCloseBtn.textContent = "X";
    modalCloseBtn.addEventListener("click", () => {
        modalDiv.remove();
    });
        //attaching the element to the page
    document.getElementsByClassName("exercise5")[0].append(modalDiv);
    modalDiv.append(modalCard);
    modalCard.append(modalCloseBtn, modalPara);
    }

    const createModalBtn = document.querySelector("#btn");

    createModalBtn.addEventListener("click", show);
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
