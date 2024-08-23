document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.innerHTML = $;{taskText} <button>Remover</button>;
        
        newTask.querySelector('button').addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});