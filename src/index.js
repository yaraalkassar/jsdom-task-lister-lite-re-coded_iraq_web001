document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submit-button").addEventListener('click', function(e){
    e.preventDefault();
    let list = document.getElementById("tasks");
    let listItem = document.createElement("li");
    const taskName = document.getElementById("new-task-description");
    listItem.innerHTML = taskName.value;
    list.appendChild(listItem);
  });
});
