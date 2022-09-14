// button functionality
function checkClick(){
    const filling = document.getElementById("filling")
    console.log("The filling is: " + filling);
}

function removeClick(){
    document.getElementId("filling").value="";
}

function stopClick(){
    //remove the functionality of the check button

    //get the button
    const checkBtn = document.getElementById("checkBtn");

    // remove the functionality
    checkBtn.removeEventListener("click", checkClick);
}

function init(){
    //get access to the button
    const checkBtn = document.querySelector("button");

    // connect button to the function
    checkBtn.addEventListener("click", checkBtn);

    // get the remove button
    const removeBtn = document.getElementById("removeBtn");

    // get the stop button
    const stopBtn = document.getElementById("stopBtn");

    // connect functionality
    removeBtn.addEventListener("click", removeClick);
 }

 init();