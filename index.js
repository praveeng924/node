const express =require("express");
const todo= require('./todo');
const app =express();
const port=3000;
console.log(todo.name);
 app.get("/",(req,res)=>{
     //console.log(req.query);
   //  if(req.query.search =="1")
    //{
    //    res.send("hello");
   // }
   // else
   // {
   //     res.send("world");
   // }
   const todo1=todo.addTodo();
   res.json(todo1);
   //const todos=[{name:"todo1",description:"hello node"},{name:"todo2",description:"hello node"}];
  //  res.send(JSON.stringify(todos));
    //todo.addTodo(hello);
    
    });
    app.listen(port,() =>console.log(`App listening on port ${port}!`));
    app.get("/delete",function(req,res){

        const todo2=todo.deleteTodo(req.query.id);
        res.json(todo2);
    });