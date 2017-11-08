var inputText = document.getElementById("input_text");
var addTaskButton = document.getElementById("add_task_button");
var taskList = [];
var isEditTask = false;
var editIndex;
var taskSection = document.getElementById("task_section");
addTaskButton.addEventListener("click", addTask);
function addTask() {
  if (inputText.value) {
    if (isEditTask) {
      // Edit task
      taskList.splice(editIndex, 1, inputText.value);
    } else {
      // add new Task
      taskList.push(inputText.value);
    }
    createNewNode();
    isEditTask = false;
  }
  inputText.value = "";
}
function createNewNode() {
  taskSection.innerHTML = "";
  for (var i = 0; i < taskList.length; i++) {
    var li = document.createElement("li");
    li.classList.add("margin-top-20");
    var span = document.createElement("span");
    span.classList.add("todo-text");
    span.innerHTML = taskList[i];
    var span1 = document.createElement("span");
    span1.classList.add("edit-button");
    span1.innerHTML = "EDIT";
    var span2 = document.createElement("span");
    span2.innerHTML = "DELETE";
    span2.classList.add("delete-button");
    li.appendChild(span);
    li.appendChild(span1);
    li.appendChild(span2);
    taskSection.appendChild(li);
  }
}
taskSection.addEventListener("click", editDeleteTask);
function editDeleteTask(e) {
  var editDeleteIndex = taskList.indexOf(e.target.parentNode.firstChild.innerHTML);
  if (e.target.innerText === "EDIT") {
    editTask(editDeleteIndex);
  } else if (e.target.innerHTML === "DELETE") {
    deleteTask(editDeleteIndex);
  }
}
function editTask(index) {
  isEditTask = true;
  editIndex = index;
  inputText.value = taskList[index];
}
function deleteTask(index) {
  taskList.splice(index, 1);
  createNewNode();
}
