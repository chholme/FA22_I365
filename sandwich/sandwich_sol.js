/* TO DO:
Complete the following functions:
  - breadClick()
  - breadClear()
  - fillingClick()
  - fillingClear()
  - eatClick()
*/

/* ------------------------------
List of DOM access commands:
getElementsByTagName(), getElementsByName(), getElementsByClassName
querySelector(), querySelectorAll(), getElementByID()

Hint: take special care between
the use of .innerHTML vs .value
------------------------------*/

// Bound to Add Bread button
// Sets both p.bread text to user input text
function breadClick(){
    // get the bread DOM elements
    const bread = document.getElementsByClassName("bread");

    // get the bread input DOM element
    const text = document.getElementsByName("breadInput");

    // Set both bread[0] and bread[1]
    for (let i = 0; i < bread.length; ++i){
        bread[i].innerHTML = text[0].value;
    }
}

// Bound to Clear Bread button
// Clears p.bread text
function breadClear(){
    // get the bread DOM element
    const bread = document.getElementsByClassName("bread");

    // set both bread[0] and bread[1] to empty string
    for (let i = 0; i < bread.length; ++i){
        bread[i].innerHTML = "";
    }
}

// Bound to Add Filling button
// Sets both p.filling text to user input text
function fillingClick(){
    // get the filling DOM elements
    const filling = document.getElementsByClassName("filling");

    // get the filling input DOM elements
    const text = document.getElementsByName("fillingInput");

    // Set filling[0], [1], [2] text
    for (let i = 0; i < filling.length; ++i){
        filling[i].innerHTML = text[i].value;
    }
}

// Bound to Clear Filling button
// Clears p.filling
function clearFilling(){
    // get the filling DOM elements
    const filling = document.getElementsByClassName("filling");

    // set filling[0], [1], [2] to empty string
    for (let i = 0; i < filling.length; ++i){
        filling[i].innerHTML = "";
    }

}

// Bound to Eat! button
// Clears all <p> text
function eatClick(){
    // get all <p> DOM elements
    const p = document.getElementsByTagName("p");

    // set all <p>.innerHTML to empty string
    for (let i = 0; i < p.length; ++i){
        p[i].innerHTML = "";
    }
}