function Task(title, description){
    this.id = Math.random();
    this.title = title;
    this.description = description;
    this.created = new Date().toUTCString();
    this.completed_at = null;
    this.completed = false;
    this.complete = function() {
        this.completed = true;
        this.completed_at = new Date().toUTCString();
    };
    this.activate = function() {
        this.completed = false;
        this.completed_at = null;
    };
}

let tasks = [
    new Task('Go shopping', 'Go shopping and buy something'),
    new Task('Wake up early', 'Waking up early will let you dot dot dot'),
    new Task('Inspire someone', 'Do a magic thing and inspire someone'),
    new Task('Make revolution', 'Organize working class and lead them to revolution')
];

tasks[0].complete();
tasks[2].complete();

