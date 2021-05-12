loadAllEvents();
function loadAllEvents() {
  document.querySelector('form').addEventListener('submit', addNewTask);

  document.querySelector('ul').addEventListener('click', deleteOrTicked);

  document.getElementById("clear").addEventListener('click', clearList);

}

function addNewTask(e: Event) {
  e.preventDefault();
  let input: HTMLInputElement = document.querySelector('input');
  if (input.value != "") {
    addToList(input.value);
    input.value = "";
  }
}

function addToList(taskValue: string) {
  let myUl: HTMLUListElement = document.querySelector('ul');
  let li: HTMLLIElement = document.createElement('li');


  li.innerHTML = `<span class="delete"> x </span><input type="checkbox"><label>${taskValue}</label>`;
  myUl.appendChild(li);
  (<HTMLElement>document.querySelector('.myList')).style.display = 'block';
}

// Check if if its a delete or ticked event 
function deleteOrTicked(evnt: Event) {
  if ((<Element>evnt.target).className == 'delete')
    deleteTask(evnt);
  else {
    tickTask(evnt);
  }
}

// delete the task. (Remove the LI child node from the parent UL node)
function deleteTask(evnt: Event) {
  let remove: Node = (<Element>evnt.target).parentNode;
  let parentNode: Node = remove.parentNode;
  parentNode.removeChild(remove);
}

//tick task (task done) event. (If checked strike through & change color. If unchecked remove strike through & color)
function tickTask(evnt: Event) {
  //get the next node following the current node
  let task: Node = (<HTMLElement>evnt.target).nextSibling;
  if ((<HTMLInputElement>evnt.target).checked) {
     (<HTMLElement>task).style.textDecoration = "line-through";
    (<HTMLElement>task).style.color = "green";
  } else {
    (<HTMLElement>task).style.textDecoration = "none";
    (<HTMLElement>task).style.color = "black";
  }
}

// Clear all tasks in the list (Clears all LI elements in the UL element)
function clearList(evnt: Event) {
  (<HTMLUListElement>document.querySelector('ul')).innerHTML = "";
}
