import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Add task';

constructor(){}

ngOnInit(): void {
  
}

toggleAddTask() {
  console.log('test');
}
}
