function TaskTemplate(task){
    this.task = task;
    this.action = this.task.completed ? "activate" : "complete";
    this.status = this.task.completed ? "completed" : "active"; 
    this.render = function() {
        return `<li class='${this.status}-task'>
                    <div class='task'>
                        <h4 class="task-title">${this.task.title}</h2>
                        <span>Created: ${this.task.created}</span>
                        <p class="task-description">${this.task.description}</p>
                        <small onclick="${this.action}(${this.task.id})">${this.action}</small>
                    </div>
                </li><hr/>`;
    }
}

function ActiveTasks(tasks) {
    this.nullsence_text = "Yayy!!! Everthing is completed!!!" 
    this.tasks = tasks;
    this.render = function() {
        return tasks.length > 0 ? this.tasks.map(task => new TaskTemplate(task).render()).join() : this.nullsence_text;
    }

}

function CompletedTasks(tasks) {
    this.nullsence_text = "Lots of things, to do." 
    this.tasks = tasks;
    this.render = function() {
        return tasks.length > 0 ? this.tasks.map(task => new TaskTemplate(task).render()).join() : this.nullsence_text;
    }
    
}

function render() {
    let active_tasks = tasks.filter(task => task.completed === false);
    let completed_tasks = tasks.filter(task => task.completed === true);
    document.querySelector(".active-tasks").innerHTML = new ActiveTasks(active_tasks).render();
    document.querySelector(".completed-tasks").innerHTML = new CompletedTasks(completed_tasks).render();
}

function complete(id) {
    let task_id = parseFloat(id);
    tasks.filter(task => task.id === task_id).map(t => t.complete());
    render();
}

function activate(id) {
    let task_id = parseFloat(id);
    tasks.filter(task => task.id === task_id).map(t => t.activate());
    render();
}

window.onload = render()