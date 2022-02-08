
// TodoLoist Constructor
function TodoList(){
    this.tasksLists = {

    };
    this.taskNo = 0;
}
    //Method for adding tasks
TodoList.prototype.addTasks = function(task){
    task.number = this.assignNo();
    this.tasksLists[task.number] = task;
};

    //Method for assigning number
TodoList.prototype.assignNo = function(){
    this.taskNo += 1;
    return this.taskNo;
};
    //Method For Delete Tasks
TodoList.prototype.deleteTask = function(no){
    if(this.tasksLists[no] === undefined){
        return false;
    }
    delete this.tasksLists[no]
    return true;
};
//Method For Finding Tasks
TodoList.prototype.findTask = function(no){
    if(this.tasksLists[no] !== undefined){
        return this.tasksLists[no]
    }
    return false
};

// Constructor For creating tasks
function TasksTodo(task , time , cartegory){
    this.task = task;
    this.time = time;
    this.cartegory = cartegory;
}

