let todoList = new TodoList();

$("document").ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
        const task = $("#task-input").val();
        const time = $("#time-input").val();
        const cartegory = $("#cartegory-input").find(":selected").val();

        let taskToBeDone = new TasksTodo(task , time , cartegory);
        todoList.addTasks(taskToBeDone);
    })
})