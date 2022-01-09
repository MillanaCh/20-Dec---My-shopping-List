//selectors
const todoInput = document.querySelector(".todo-input") //input
const todoButton = document.querySelector(".todo-button")//input
const todoList = document.querySelector(".todo-list") //ul

//function
const addTodo = (event) => {
    //prevent form from submitting
    event.preventDefault()
    //creating todo div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todoDiv")
    //creating li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //create complete button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = "<i class ='fas fa-check'></i>";
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)
    //creating delete complete button
    const deletedButton = document.createElement("button")
    deletedButton.innerHTML = "<i class ='fas fa-trash'></i>";
    deletedButton.classList.add("delete-btn")
    todoDiv.appendChild(deletedButton)
    //append todoDiv to UL
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}//ES6
const deleteComplete = (event) => {
    const item = event.target; //show what happened inside
    if(item.classList.contains("delete-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitionend" , () => {
            todo.remove()
        })
        todo.remove()
    } else if(item.classList.contains("completed-btn")){
        todo.classList.toogle("completed")
    }
}


//event-listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteComplete)