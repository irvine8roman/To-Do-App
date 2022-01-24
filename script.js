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
  <td><a href="#" class="edit"><i class="bi bi-pencil"></i></a></td>
  <td><a href='#' class="delete"><i class="bi bi-trash"></i></a></td>
  `;

    document.querySelector("#to-do-list").appendChild(row);
  }

  static deleteTask() {}
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
