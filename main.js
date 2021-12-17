const add = document.querySelector('#newTaskSubmit');

const input = document.querySelector('#newTaskInput');

const list = document.querySelector('#listTasks');

const select = document.querySelector('select');

add.addEventListener('click', () => {
  if (input.value != '') {
  const value = input.value;
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  const finishDiv = document.createElement('div');
  finishDiv.id = 'finish';
  taskDiv.appendChild(finishDiv);
  const p = document.createElement('p');
  p.innerHTML = value;
  taskDiv.appendChild(p);
  const iCheck = document.createElement('i')
  iCheck.className = 'fas fa-check';
  iCheck.id = 'check';
  taskDiv.appendChild(iCheck);
  input.value = '';
  listTasks.appendChild(taskDiv);
  filter();
  }
})

window.addEventListener('click', (e) => {
  if (e.target.id == 'check') {
    const task = e.target.parentNode;
    task.classList = 'task disabled';
    task.children[0].classList = 'check';
    task.children[1].classList = 'finishP';
  }
})

select.addEventListener('change', () => {
  filter();
})

function filter() {
  const tasks = document.querySelectorAll('.task');
  if (select.value == 'finish') {
    for (var i = 0; i < tasks.length; i++) {
      if (!tasks[i].classList.contains('disabled')) {
        tasks[i].style.display = 'none';
      }else {
        tasks[i].style.display = 'flex';
      }
    }
  }else if (select.value == 'toDo') {
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].classList.contains('disabled')) {
        tasks[i].style.display = 'none';
      }else {
        tasks[i].style.display = 'flex';
      }
    }
  }else {
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].style.display = 'flex';
    }
  }
}