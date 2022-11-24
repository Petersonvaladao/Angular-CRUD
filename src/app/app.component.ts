import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-ap';
  tasks: Task[] = [
    new Task("Visit someone"),
    new Task("Visit som"),
    new Task("Visit someoe"),
    new Task("Visit e")
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task) {
    let userConfirmed = confirm(`Are you sure that you wanto to remove the following task? \n "${existingTask.title}"`)

    if(userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }

}

class Task {
  
  constructor (public title: string) {

  }
  toggleIsDone() {
    this.isDone = !this.isDone
  }

  public isDone = false
}
