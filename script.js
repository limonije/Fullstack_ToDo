async function callTodolist() {
    try {
        const todoList = await getTodolist();
        console.log(todoList);
        const list = document.querySelector('#task-list');
        const addTasksToDom = todoList.map(function(task) {
            newArray = '<li id=' + task._id + '> <input type="checkbox" id="check"><span>' + task.description + '</span><img class="delete" src="trashcan.png" /></li>';
            return newArray;
       }).join('');
                    
       list.innerHTML = addTasksToDom;
       console.log(list);
       let listItem = document.querySelectorAll('#task-list li img.delete');
       console.log(listItem);
       listItem.forEach(function(task){
        task.addEventListener('click', function(e){
            const id = e.target.parentNode.getAttribute("id");
            console.log(id);
            deleteTask(id);
        });
       });

       
       let changeItem = document.querySelectorAll('#task-list li span');
       console.log(changeItem);
       changeItem.forEach(function(task){
        task.addEventListener('click', function(e){
            const taskText = e.target;
            console.log("LI tekst is: ", taskText);
            taskText.setAttribute('contenteditable', 'true'); 
            console.log(taskText);
            var contenteditable = document.querySelector('[contenteditable]'),
            text = contenteditable.textContent;
            console.log("The changed LI text is: ",text);
            const id = e.target.parentNode.getAttribute("id");
            changeTask(id, text);
            
        });
       });

       let crossItem = document.querySelectorAll('#task-list li input#check');
       console.log(crossItem);
       crossItem.forEach(function(task){
        task.addEventListener('click', function(e){
            const textLI = e.target.parentNode;
            textLI.classList.toggle('strike'); 
            console.log(textLI);
            const id = textLI.getAttribute("id");
            console.log("the id is: ", id);
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

//const data = {description: value, done: false};
//console.log(data);

addTask(value);
callTodolist();
});










// delTask.addEventListener('click', () => {

        
//         const id = todoList.map(function(task) {
//            return task._id;
//         });            
//         console.log(id);
     

    
//     addTask(value);
//     callTodolist();
//     });




