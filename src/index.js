document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let btn = document.getElementById('btn'); //get button
  btn.addEventListener('click', function(event
  {      event.preventDefault();
      let taskName = document.getElementById('new-task-description').value;
      let list = document.getElementById('tasks');
      let listItem = document.createElement('li');
      listItem.innerHTML = taskName;
      list.appendChild(listItem);
  });












});
