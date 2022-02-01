
// Todolist Constructor

function todoList(){
    this.Tasks = {

    };
    this.taskNo = 0;
}
todoList.prototype.addId = function(){
    this.taskNo += 1;
    return this.taskNo;
};
todoList.prototype.addTask = function(task){
        task.number = this.addId();
        this.Tasks[task.number] = task;
    };

//Constructor For The Task
function Task(task , dueDate , category){
    this.task = task;
    this.dueDate = dueDate;
    this.category = category;
}

