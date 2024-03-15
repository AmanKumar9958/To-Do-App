const add = document.getElementById('addTask');
const input = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');

//for adding tasks..
function addTask() {
    if (input.value === "") {           //If input box is empty..
        alert("Please Enter Something!");
    }
    else {
        let li = document.createElement("li");      //to add task in our list..
        li.innerHTML = input.value;
        taskContainer.appendChild(li)           //add that list in our container..

        let span = document.createElement('span');  //to store our cross icon..
        span.innerHTML = "\u00d7";      //to create cross icon..
        li.appendChild(span)        //to add that span tag in out container..
    }
    input.value = "";
    saveTask();
}

//for completing task and removing task..
taskContainer.addEventListener('click', function (removing) {
    if (removing.target.tagName === 'LI') {
        removing.target.classList.toggle('done');   //mark done or not done..
    }
    else if (removing.target.tagName === 'SPAN') {
        removing.target.parentElement.remove();     //remove the task..
        saveTask();
    }
}, false);

// for saving our data..
function saveTask() {
    localStorage.setItem('data', taskContainer.innerHTML);
}

//for displaying data..
function showData() {
    taskContainer.innerHTML = localStorage.getItem('data');
}
showData();