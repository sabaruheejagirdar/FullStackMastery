
Objective:
To do application using react
- Created event handler for creating add todo task
    save every task in a todos that will be array of object.
    On click of add task, trim the input and save text to todo.text
- Delete the completed task from todo list using filter method
    To delete completed task, onclick of delete pick the id of object and filter it from todos list
- Toggle function and checkbox is added to check completed or not completed task.
  By default all task will be in false state. Toggle them using checked input property.
  On toggle yes, change the todo.complete to true
- Edit an added Todo task and submit it using map function.
  map todos in which update todo.text
- UseEffect hook will be used to save new todos into localstorage.

Learnings:
- When calling a function with parameter-
    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
  Without parameters-
  <form onSubmit={handleSubmit}>