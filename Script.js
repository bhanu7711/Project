const input=document.querySelector(".input-box");        //when clik the button it wil show on the DIsplsyscreen
const button=document.querySelector(".add-button");//........................when clik the button it wil show on the DIsplsyscreen
const todoList=document.querySelector(".todo-list");//........................when clik the button it wil show on the DIsplsyscreen

button.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo);

function addTodo(event){
   event.preventDefault();
const todoDiv=document.createElement("div");
todoList.classList.add("todo-container");

const todoItem=document.createElement("li");
todoItem.classList.add("todo-item");
todoItem.innerText= input.value;
todoDiv.appendChild(todoItem);

const deleteButton=document.createElement("button");
deleteButton.classList.add("delete-btn");
deleteButton.innerHTML= '<i class="fa-solid fa-trash"></i>'
todoDiv.appendChild(deleteButton);


const Complete=document.createElement("button");
Complete.classList.add("Complete-btn");
Complete.innerHTML= '<i class="fa-solid fa-check"></i>'
todoDiv.appendChild(Complete);

todoList.appendChild(todoDiv);
input.value="";
}
function deleteTodo(e){
const box=e.target;
if(box.classList[0]==="delete-btn"){
var delBox = box.parentElement;
delBox.remove();
}

if(box.classList[0]==="Complete-btn"){
const delBox = box.parentElement;
delBox.classList.toggle("completed");
}
}