// const task=document.getElementById('task').value;
const tb = document.getElementById('tbutton');
const del = document.getElementsByClassName('delete');
const all_tasks = document.getElementById('allt');
const tbutton=document.getElementById('theme-btn');
const body=document.getElementById('body');

var task_arry = [];


function setTasks() {
    let recieved_tasks = JSON.parse(localStorage.getItem('tasks'));
    all_tasks.innerHTML = '';
    recieved_tasks.forEach((element, index) => {
        all_tasks.innerHTML += ` <tr>
        <th scope="row">${index + 1}</th>
        <td>${element}</td>
        <td><span  class="material-symbols-outlined delete">
        delete
        </span></td>
        </tr>`
    });
}

if (localStorage.getItem('tasks') != null) {
    setTasks();
}

deltask();


tb.addEventListener('click', () => {
    var task = document.getElementById('task').value;
    if (localStorage.getItem('tasks') == null) {
        task_arry.push(task);
        document.getElementById('task').value = ''
        localStorage.setItem('tasks', JSON.stringify(task_arry));
    }
    else {
        task_arry = JSON.parse(localStorage.getItem('tasks'));
        task_arry.push(task);
        document.getElementById('task').value = ''
        localStorage.setItem('tasks', JSON.stringify(task_arry));
    }
    setTasks();
    deltask();
})

if(localStorage.getItem('theme')==null){
    body.classList.remove('dark-mode');
    tbutton.innerHTML='dark_mode';
    localStorage.setItem('theme','light');
}else if(localStorage.getItem('theme')=='light'){
    body.classList.remove('dark-mode');
    tbutton.innerHTML='dark_mode';
}else if(localStorage.getItem('theme')=='dark'){
    body.classList.add('dark-mode');
    tbutton.innerHTML='light_mode';
}




tbutton.addEventListener('click',()=>{
    if(tbutton.innerHTML=='dark_mode'){
        body.classList.add('dark-mode');
        tbutton.innerHTML='light_mode';
        localStorage.setItem('theme','dark');
    }
    else if(tbutton.innerHTML=='light_mode'){
        body.classList.remove('dark-mode');
        tbutton.innerHTML='dark_mode';
        localStorage.setItem('theme','light');
    }

})


function deltask() {
    for (let x = 0; x < del.length; x++) {
        del[x].addEventListener('click', () => {
            task_arry = JSON.parse(localStorage.getItem('tasks'));
            task_arry.splice(x, 1);
            localStorage.setItem('tasks', JSON.stringify(task_arry));
            setTasks();
            deltask();
        })
    }
}

