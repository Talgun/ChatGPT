const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodoItem(todoInput.value);
  todoInput.value = '';
});

function addTodoItem(task) {
  const li = document.createElement('li');
  li.innerHTML = `<span>${task}</span> <button>Delete</button>`;
  todoList.appendChild(li);

  const deleteButton = li.querySelector('button');
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(li);
  });
}
