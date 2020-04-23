function Task(title, description){
    this.title = title;
    this.description = description;
    this.created = new Date().toUTCString();
    this.completed = false;
    this.completed_at = null;

    this.render = function() {
        return `
          <h2>${this.title}</h2>
          <strong>Created At: ${this.created}</strong>
          <p>${this.description}</p>
        `;
    }
}
