class Task {
  constructor(task, notes, date) {
    this.task = task;
    this.notes = notes;
    this.date = date;
  }
}

class UI {
  static createTask(task, notes, date) {
    const item = new Task(task, notes, date);
    return item;
  }

  static addTask(newTask) {
    const row = document.createElement("tr");

    row.innerHTML = `
  <td>Temp</td>
  <td>${newTask.task}</td>
  <td>${newTask.notes}</td>
  <td>${newTask.date}</td>
  <td><a href="#" ><i class="bi bi-pencil edit" ></i></a></td>
  <td><a href='#' ><i class="bi bi-trash delete" ></i></a></td>
  `;

    document.querySelector("#to-do-list").appendChild(row);
  }

  static deleteTask(target) {
    target.parentElement.parentElement.parentElement.remove();
  }
}

// Create and add Task
document.querySelector("#submit").addEventListener("click", function () {
  const task = document.querySelector("#task").value;
  const notes = document.querySelector("#notes").value;
  const date = document.querySelector("#date").value;

  if (task === "" || notes === "" || date === "") {
    alert("Please fill in the blanks!");
  } else {
    const newTask = UI.createTask(task, notes, date);

    UI.addTask(newTask);

    document.querySelector("#task").value = "";
    document.querySelector("#notes").value = "";
    document.querySelector("#date").value = "";
  }
});

// Delete Task
document.querySelector("#to-do-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    UI.deleteTask(e.target);
  }
});

document.querySelector("#to-do-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    const newTaskName = window.prompt("Edit Task Name");
    const newNotesName = window.prompt("Edit Notes");

    e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML =
      newNotesName;

    e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML =
      newTaskName;
  }
});
