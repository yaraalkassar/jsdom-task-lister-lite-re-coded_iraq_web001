document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let btn = document.getElementById('btn'); //get button
  btn.addEventListener('click', function(e)
  {      e.preventDefault();
      let list = document.getElementById('tasks');
      let listItem = document.createElement('li');
      const taskName = document.getElementById('new-task-description').value;
      listItem.innerHTML = taskName;
      list.appendChild(listItem);
  });
});
