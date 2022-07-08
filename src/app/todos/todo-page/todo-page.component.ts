import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { completados } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  flagCheckAll: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.store.dispatch( completados( { flag: !this.flagCheckAll } ) );
    this.flagCheckAll = !this.flagCheckAll;
  }

}
