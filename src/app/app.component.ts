import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-ap';
  tasks = [
    "Visit someone",
    "Go somewhere",
    "Travel someday",
    "Stay somehow",
    "Shop somewhat?",
  ]

  add(newTask: string) {
    this.tasks.push(newTask)
  }

  remove(existingTask: string) {
    let userConfirmed = confirm(`Are you sure that you wanto to remove the following task? \n "${existingTask}"`)

    if(userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }
}
