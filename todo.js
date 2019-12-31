
let todos=[{id:1,name:"todo11",description:"hello node"},{ id:2,name:"todo2",description:"hello node"},{id:3,name:"todo3",description:"hello node"}];
function addTodo()
{
    todos.push({name:"todo4",description:"the fourth element"});
return todos;
}
function deleteTodo(id)
{
todos=todos.filter(function(todo){
    return todo.id!=id;
});
return todos;
}

exports.addTodo=addTodo;
exports.deleteTodo=deleteTodo;
exports.name="todo";