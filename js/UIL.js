let todoList = new TodoList();

// Function For Displaying Content
function displayTask(todoList){
    let htmlElement = $("#taskDisplay");
    let htmlString = "";
    const keys = Object.keys(todoList.tasksLists);
    keys.forEach(function(key){
        let task = todoList.findTask(key);
        htmlString += "<li class = 'data' id = " + task.number + ">"+ task.task + "</li>";
    })
    htmlElement.html(htmlString)
} 

// Function For the Listener
function attachListener(){
    $("ul#taskDisplay").on("click" , "li" , function(){
        displayContent(this.id);
    })

    $("#buttons").on("click" , ".deletebutton" , function(){
        todoList.deleteTask(this.id);
        displayTask(todoList);
        $(".full-details").hide();
    })
}

// Function For Showing Full Details
function displayContent(id){
    let task = todoList.findTask(id);
    
    $(".full-details").toggle();
    $("#task-details").html(task.task);
    $("#time-display").html(task.time);
    $("#cartegory-details").html(task.cartegory);
    let button = $("#buttons");
    button.empty();
    button.append("<button class = 'btn btn-light deletebutton' id = "  + id + ">Delete</button>" );
    

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