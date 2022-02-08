let todoList = new TodoList();

// Function For Displaying Content
function displayTask(todoList){
    let htmlElement = $("#taskDisplay");
    let htmlString = "";
    const keys = Object.keys(todoList.tasksLists);
    keys.forEach(function(key){
        let task = todoList.findTask(key);
        htmlString += "<li class = 'data' id = " + task.id + ">"+ task.task + "</li>";
    })
    htmlElement.html(htmlString)
} 

// Function For the Listener
function attachListener(){
    $("ul#taskDisplay").on("click" , "li" , function(){
        displayContent();
    })
}
$("document").ready(function(){
    attachListener();
    $("#form").submit(function(event){
        event.preventDefault();
        const task = $("#task-input").val();
        const time = $("#time-input").val();
        const cartegory = $("#cartegory-input").find(":selected").val();

        let taskToBeDone = new TasksTodo(task , time , cartegory);
        todoList.addTasks(taskToBeDone);
        displayTask(todoList)
        $("#task-input").val("");
        $("#time-input").val("");
    })
})