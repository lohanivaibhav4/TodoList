import { tasks } from "./data.js";

const taskInput = document.getElementById('task-input')
const activeList = document.getElementById('active-list')
const completedList = document.getElementById('completed-list')
const activeTasksDiv = document.getElementById('tasks-div')
const completedTasksDiv = document.getElementById('completed-tasks-div')

document.addEventListener('click',function(e){
    tasks.forEach(task=>{
        if(e.target.id === task.taskId){
            task.is_active = !task.is_active
            renderTasks(tasks)
        }

    })
})

taskInput.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
       if(taskInput.value){
            tasks.unshift({
                task:taskInput.value,
                taskId:crypto.randomUUID(),
                is_active:true
            })
            renderTasks(tasks)
            taskInput.value =''
       }
       
    }
})

function renderTasks(tasks){
    
    let activeTaskHtml = ''
    let completedTaskHtml = ''

    tasks.forEach(task=>{
        if(task.is_active){
            activeTaskHtml += `<li>
                        <i class="fa-regular fa-circle-check tick" id="${task.taskId}"></i>
                        <p>${task.task}</p>
                    </li>`
        }
        else{
            completedTaskHtml += `<li>
                        <i class="fa-solid fa-check-double doubletick" id="${task.taskId}"></i>
                        <p>${task.task}</p>
                    </li>`
        }
    })
    activeList.innerHTML = activeTaskHtml
    completedList.innerHTML = completedTaskHtml
}

renderTasks(tasks)


