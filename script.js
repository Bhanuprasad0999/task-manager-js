function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") return;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = task;

  let completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";

  completeBtn.onclick = function () {
    span.style.textDecoration = "line-through";
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
