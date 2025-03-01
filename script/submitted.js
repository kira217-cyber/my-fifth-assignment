
let button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Board update Successfully")
    button.disabled = true;
    const assignedNumber = document.getElementById("assigned-number").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber)
    const minus = convertedAssignedNumber - 1;
    document.getElementById("assigned-number").innerText = minus;

    const addedNumber = document.getElementById("added-number").innerText;
    const convertedAddedNumber = parseInt(addedNumber)
    const sum = convertedAddedNumber + 1;
    document.getElementById("added-number").innerText = sum;

});

let button2 = document.getElementById("my-button-2");

button2.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Board update Successfully")
    button2.disabled = true;
    const assignedNumber = document.getElementById("assigned-number").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber)
    const minus = convertedAssignedNumber - 1;
    document.getElementById("assigned-number").innerText = minus;

    const addedNumber = document.getElementById("added-number").innerText;
    const convertedAddedNumber = parseInt(addedNumber)
    const sum = convertedAddedNumber + 1;
    document.getElementById("added-number").innerText = sum;

});




