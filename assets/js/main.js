function updateDateTime() {
    const dateDisplay = document.getElementById('date-display');
    const greeting = document.getElementById('greeting');
    const dayNightIndicator = document.getElementById('day-night-indicator');
    const now = new Date();
    
    // Format date in Spanish
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('es-ES', options);
    
    const hours = now.getHours();
    if (hours >= 5 && hours < 12) {
        greeting.textContent = "Buenos días";
        dayNightIndicator.textContent = '☀️';
    } else if (hours >= 12 && hours < 20) {
        greeting.textContent = "Buenas tardes";
        dayNightIndicator.textContent = '☀️';
    } else if (hours >= 20 || hours < 1) {
        greeting.textContent = "Buenas noches";
        dayNightIndicator.textContent = '🌙';
    } else {
        greeting.textContent = "Feliz madrugada";
        dayNightIndicator.textContent = '🌙';
    }
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute

// Task list functionality
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        addTask(this.value.trim());
        this.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
    };
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'task-text';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(completeBtn);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
}