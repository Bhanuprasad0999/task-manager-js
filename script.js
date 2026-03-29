function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  // Prevent empty task
  if (task === "") return;

  // Create list item
  let li = document.createElement("li");
  li.innerText = task;

  // Toggle complete (✔️ important upgrade)
  li.onclick = function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "black";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }
  };

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  // Delete task
  delBtn.onclick = function () {
    li.remove();
  };

  // Add button to list item
  li.appendChild(delBtn);

  // Add list item to UI
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";
}
