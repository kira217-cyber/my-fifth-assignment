
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


    const history1 = document.getElementById("history-list-1")
    const currentTime = new Date()
    const convertedCurrentTime = currentTime.toLocaleTimeString();

    const p = document.createElement("p")
    p.innerText=`You have Complete The Task Fix Mobile Button Issue at ${convertedCurrentTime}`;

    p.style.margin="16px"
    p.style.padding="16px"
    p.style.backgroundColor="#F4F7FF"
    p.style.borderRadius="8px"
    p.style.marginBottom="16"
    p.style.fontWeight="bold"

    history1.appendChild(p)
    document.getElementById("btn-hidden").addEventListener("click", function(event){
        event.preventDefault();
        history1.remove(this.innerText)
    })

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

    const history2 = document.getElementById("history-list-2")
    const currentTime = new Date()
    const convertedCurrentTime = currentTime.toLocaleTimeString();

    const p = document.createElement("p")
    p.innerText=`You have Complete The Task Add Dark Mode at ${convertedCurrentTime}`;

    p.style.margin="16px"
    p.style.padding="16px"
    p.style.backgroundColor="#F4F7FF"
    p.style.borderRadius="8px"
    p.style.marginBottom="16"
    p.style.fontWeight="bold"

    history2.appendChild(p)
    document.getElementById("btn-hidden").addEventListener("click", function(event){
        event.preventDefault();
        history2.remove(this.innerText)
    })

});


let button3 = document.getElementById("my-button-3");

button3.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Board update Successfully")
    button3.disabled = true;
    const assignedNumber = document.getElementById("assigned-number").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber)
    const minus = convertedAssignedNumber - 1;
    document.getElementById("assigned-number").innerText = minus;

    const addedNumber = document.getElementById("added-number").innerText;
    const convertedAddedNumber = parseInt(addedNumber)
    const sum = convertedAddedNumber + 1;
    document.getElementById("added-number").innerText = sum;

    const history3 = document.getElementById("history-list-3")
    const currentTime = new Date()
    const convertedCurrentTime = currentTime.toLocaleTimeString();

    const p = document.createElement("p")
    p.innerText=`You have Complete The Optimize Home page at ${convertedCurrentTime}`;

    p.style.margin="16px"
    p.style.padding="16px"
    p.style.backgroundColor="#F4F7FF"
    p.style.borderRadius="8px"
    p.style.marginBottom="16"
    p.style.fontWeight="bold"

    history3.appendChild(p)
    document.getElementById("btn-hidden").addEventListener("click", function(event){
        event.preventDefault();
        history3.remove(this.innerText)
    })

});

let button4 = document.getElementById("my-button-4");

button4.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Board update Successfully")
    button4.disabled = true;
    const assignedNumber = document.getElementById("assigned-number").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber)
    const minus = convertedAssignedNumber - 1;
    document.getElementById("assigned-number").innerText = minus;

    const addedNumber = document.getElementById("added-number").innerText;
    const convertedAddedNumber = parseInt(addedNumber)
    const sum = convertedAddedNumber + 1;
    document.getElementById("added-number").innerText = sum;

    const history4 = document.getElementById("history-list-4")
    const currentTime = new Date()
    const convertedCurrentTime = currentTime.toLocaleTimeString();

    const p = document.createElement("p")
    p.innerText=`You have Complete The Add new emoji 🤲 at ${convertedCurrentTime}`;

    p.style.margin="16px"
    p.style.padding="16px"
    p.style.backgroundColor="#F4F7FF"
    p.style.borderRadius="8px"
    p.style.marginBottom="16"
    p.style.fontWeight="bold"

    history4.appendChild(p)
    document.getElementById("btn-hidden").addEventListener("click", function(event){
        event.preventDefault();
        history4.remove(this.innerText)
    })

});


let button5 = document.getElementById("my-button-5");

button5.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Board update Successfully")
    button5.disabled = true;
    const assignedNumber = document.getElementById("assigned-number").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber)
    const minus = convertedAssignedNumber - 1;
    document.getElementById("assigned-number").innerText = minus;

    const addedNumber = document.getElementById("added-number").innerText;
    const convertedAddedNumber = parseInt(addedNumber)
    const sum = convertedAddedNumber + 1;
    document.getElementById("added-number").innerText = sum;

    const history5 = document.getElementById("history-list-5")
    const currentTime = new Date()
    const convertedCurrentTime = currentTime.toLocaleTimeString();

    const p = document.createElement("p")
    p.innerText=`You have Complete The Task Integrate OpenAI API at ${convertedCurrentTime}`;

    p.style.margin="16px"
    p.style.padding="16px"
    p.style.backgroundColor="#F4F7FF"
    p.style.borderRadius="8px"
    p.style.marginBottom="16"
    p.style.fontWeight="bold"

    history5.appendChild(p)
    document.getElementById("btn-hidden").addEventListener("click", function(event){
        event.preventDefault();
        history5.remove(this.innerText)
    })

});


let button6 = document.getElementById("my-button-6");

button6.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Board update Successfully")
    alert("congrates!!! You have completed all the current task")
    button6.disabled = true;
    const assignedNumber = document.getElementById("assigned-number").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber)
    const minus = convertedAssignedNumber - 1;
    document.getElementById("assigned-number").innerText = minus;

    const addedNumber = document.getElementById("added-number").innerText;
    const convertedAddedNumber = parseInt(addedNumber)
    const sum = convertedAddedNumber + 1;
    document.getElementById("added-number").innerText = sum;

    const history6 = document.getElementById("history-list-6");
    const currentTime = new Date()
    const convertedCurrentTime = currentTime.toLocaleTimeString();

    let p = document.createElement("p")
    p.innerText=`You have Complete The Task Improve Job searching at ${convertedCurrentTime}`;

    p.style.margin="16px"
    p.style.padding="16px"
    p.style.backgroundColor="#F4F7FF"
    p.style.borderRadius="8px"
    p.style.marginBottom="16"
    p.style.fontWeight="bold"
    history6.appendChild(p)
    document.getElementById("btn-hidden").addEventListener("click", function(event){
        event.preventDefault();
        history6.remove(this.innerText)
    })

});



