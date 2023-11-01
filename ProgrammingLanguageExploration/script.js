const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task');
const prioritySelect = document.getElementById('priority');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const taskPriority = prioritySelect.value;

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.className = taskPriority;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        taskItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
