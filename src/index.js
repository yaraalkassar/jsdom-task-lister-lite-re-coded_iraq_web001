document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let btn = document.getElementById('btn'); //get button
  btn.addEventListener('submit', addToList);
  function addToList(e) {
    e.preventDefault();
      let taskName = document.getElementById('new-task-description').value;
      let list = document.getElementById('tasks');
      let listItem = document.createElement('li');
      listItem.innerHTML = taskName;
      list.appendChild(listItem);
  }












});
