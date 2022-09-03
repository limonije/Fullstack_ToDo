async function callTodolist() {
    try {
        const todoList = await getTodolist();
        console.log(todoList);
        const list = document.querySelector('#task-list');
        const addTasksToDom = todoList.map(function(task) {
            newArray = '<li id=' + task._id + '> <input type="checkbox" id="check"><span title="Double click to change task text">' + task.description + '</span><img class="delete" src="trashcan.png" /></li>';
            return newArray;
        }).join('');
                    
        list.innerHTML = addTasksToDom;
        let listItem = document.querySelectorAll('#task-list li img.delete');
        listItem.forEach(function(task){
        task.addEventListener('click', function(e){
            const id = e.target.parentNode.getAttribute("id");
            deleteTask(id);
        });
        });

       
        let changeItem = document.querySelectorAll('#task-list li span');
        changeItem.forEach(function(task){
        task.addEventListener('click', function(e){
            const taskText = e.target;
            taskText.setAttribute('contenteditable', 'true'); 
            var contenteditable = document.querySelector('[contenteditable]'),
            text = contenteditable.textContent;
            const id = taskText.parentNode.getAttribute("id");
            changeTask(id, text);
        });
        });

        let crossItem = document.querySelectorAll('#task-list li input#check');
        crossItem.forEach(function(task){
        task.addEventListener('click', function(e){
            const textLI = e.target.parentNode;
            textLI.classList.toggle('strike'); 
            const id = textLI.getAttribute("id");
            doneTask(id);
                      
        });
        });
           
    } catch(e) {
    console.log(e);
    }
}  

callTodolist();
 
const btn = document.querySelector('#mybutton');

btn.addEventListener('click', () => {

let value = document.getElementById('task').value;

addTask(value);
callTodolist();
});











