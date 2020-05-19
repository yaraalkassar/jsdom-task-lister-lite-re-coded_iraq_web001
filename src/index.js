document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let btn = document.getElementById('btn'); //get button
  btn.addEventListener('click', addToList);
  function addToList() {
      let taskName = document.getElementById('new-task-description').value;
      let list = document.getElementById('list');
      let listItem = document.createElement('li');
      listItem.innerHTML = listText;
      list.appendChild(listItem);
      let form = document.getElementById('taskForm');
      form.reset();
  }












});
