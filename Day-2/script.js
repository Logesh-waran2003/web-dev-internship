// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("add-task");
  const newTaskInput = document.getElementById("new-task");
  const tasksList = document.getElementById("tasks");

  // Function to add a new task
  function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      tasksList.appendChild(taskItem);

      // Clear the input field
      newTaskInput.value = "";
    }
  }

  // Event listener for the 'Add Task' button
  addTaskButton.addEventListener("click", addTask);

  // Allow pressing Enter to add a task
  newTaskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
