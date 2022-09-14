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
function breadClick() {
  let bread = document.getElementsByClassName("bread");
  const topBread = bread[0].value;
  const botBread = bread[1].value;
  return topBread;
}

// Bound to Clear Bread button
// Clears p.bread text
function breadClear(){
    
    return;
}

// Bound to Add Filling button
// Sets both p.filling text to user input text
function fillingClick(){
    
    return;
}

// Bound to Clear Filling button
// Clears p.filling
function clearFilling(){
    
    return;
}

// Bound to Eat! button
// Clears all <p> text
function eatClick(){

    return;
}