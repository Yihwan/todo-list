const checkboxes = document.querySelectorAll('.list input[type="checkbox"]');

let lastChecked;

window.onload = function() {
  document.getElementById('todo-count').innerHTML = countTodos();
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
    <input type="checkbox">
    <p>${enteredTodo.value}</p>
  </div>
  `;
  const todoItems = document.querySelector('.items');

  todoItems.insertAdjacentHTML('beforeend', newHtml);
  document.getElementById('todo-count').innerHTML = countTodos();
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});
