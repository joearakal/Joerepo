loadAllEvents();
function loadAllEvents() {
    document.querySelector('form').addEventListener('submit', addNewTask);
    document.querySelector('ul').addEventListener('click', deleteOrTicked);
    document.getElementById("clear").addEventListener('click', clearList);
}
function addNewTask(e) {
    e.preventDefault();
    var input = document.querySelector('input');
    if (input.value != "") {
        addToList(input.value);
        input.value = "";
    }
}
function addToList(taskValue) {
    var myUl = document.querySelector('ul');
    var li = document.createElement('li');
    li.innerHTML = "<span class=\"delete\"> x </span><input type=\"checkbox\"><label>" + taskValue + "</label>";
    myUl.appendChild(li);
    document.querySelector('.myList').style.display = 'block';
}
// Check if if its a delete or ticked event 
function deleteOrTicked(evnt) {
    if (evnt.target.className == 'delete')
        deleteTask(evnt);
    else {
        tickTask(evnt);
    }
}
// delete the task. (Remove the LI child node from the parent UL node)
function deleteTask(evnt) {
    var remove = evnt.target.parentNode;
    var parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}
//tick task (task done) event. (If checked strike through & change color. If unchecked remove strike through & color)
function tickTask(evnt) {
    //get the next node following the current node
    var task = evnt.target.nextSibling;
    if (evnt.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "green";
    }
    else {
        task.style.textDecoration = "none";
        task.style.color = "black";
    }
}
// Clear all tasks in the list (Clears all LI elements in the UL element)
function clearList(evnt) {
    document.querySelector('ul').innerHTML = "";
}
