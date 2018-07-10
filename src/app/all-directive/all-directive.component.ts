import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-directive',
  templateUrl: './all-directive.component.html',
  styleUrls: ['./all-directive.component.css']
})
export class AllDirectiveComponent implements OnInit {

  list = ['a1', 'a2', 'a3'];
  list1;
  viewMode = 'map';

  constructor() { }

  ngOnInit() {
  }

  checkListAvail() {
    if (this.list.length === 0) {
      return false;
    }
    return true;
  }

  onAdd() {
    this.list.push('a4');
  }

  onRemove(e) {
    const index = this.list.indexOf(e);
    this.list.splice(index, 1);
  }

  onChange(e) {
    const index = this.list.indexOf(e);
    this.list.splice(index, 1, 'a5');
  }

  loadList() {
    this.list1 = ['b1', 'b2', 'b3'];
  }

}
