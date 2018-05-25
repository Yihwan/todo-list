let checkboxes = document.querySelectorAll('.list input[type="checkbox"]');
let deleteIcons = document.querySelectorAll('.list .delete');

let lastChecked;

window.onload = function() {
  document.getElementById('todo-count').innerHTML = countTodos();
  deleteIcons.forEach(icon => {
    icon.style.visibility = "hidden";
  });
};

function countTodos() {
  return document.querySelector('.items').childElementCount;
}

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }

    });
  }

  lastChecked = e.target;
}

function createTodo() {
  let enteredTodo = document.getElementById('new-todo');
  let newHtml =
  `
  <div class="item">
    <span onclick="deleteTodo(this);"
    class="delete">❌</span>
    <input type="checkbox">
    <p>${enteredTodo.value}</p>
  </div>
  `;

  const todoItems = document.querySelector('.items');
  todoItems.insertAdjacentHTML('beforeend', newHtml);

  checkboxes = document.querySelectorAll('.list input[type="checkbox"]');
  deleteIcons = document.querySelectorAll('.list .delete');

  deleteIcons[deleteIcons.length - 1].style.visibility = "hidden";
  document.getElementById('todo-count').innerHTML = countTodos();
}

function toggleEdit() {
  const editButton = document.getElementById('edit');

  if (editButton.innerHTML === "Edit") {
    editButton.innerHTML = "Done";

    document.querySelector('.new').style.visibility = "hidden";

    checkboxes.forEach(checkbox => {
      checkbox.style.visibility = "hidden";
    });

    deleteIcons.forEach(icon => {
      icon.style.visibility = "visible";
    });

  } else if (editButton.innerHTML === "Done") {
    editButton.innerHTML = "Edit";

    document.querySelector('.new').style.visibility = "visible";

    checkboxes.forEach(checkbox => {
      checkbox.style.visibility = "visible";
    });

    deleteIcons.forEach(icon => {
      icon.style.visibility = "hidden";
    });
  }
}

function deleteTodo(todo) {
  console.log(todo);
  todo.parentNode.parentNode.removeChild(todo.parentNode);
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});
