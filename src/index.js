document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let btn = document.getElementById('btn'); //get button
  btn.addEventListener('click', addToList);
  function addToList() {
      hiddenElemetns= document.getElementsByClassName('hide');
      for(let i=0; i<hiddenElemetns.length; i++)
    {
        hiddenElemetns[i].style.display = "block"; 
    }
      let taskName = document.getElementById('task').value;
      let list = document.getElementById('list');
      let listItem = document.createElement('li');
      listItem.innerHTML = listText;
      list.appendChild(listItem);
      let form = document.getElementById('taskForm');
      form.reset();
  }











  
});
