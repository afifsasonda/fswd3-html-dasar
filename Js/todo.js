function add(){
    let inptTodo = document.getElementById('todo-input');
    let btnsave = document.getElementById('btn-save');
    let ul = document.getElementsByClassName("list-group");
    let li = document.createElement("list-group-item");
    li.innerHTML = "New element";
    ul.appendChild(li);
}