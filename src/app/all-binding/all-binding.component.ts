import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-binding',
  templateUrl: './all-binding.component.html',
  styleUrls: ['./all-binding.component.css']
})
export class AllBindingComponent implements OnInit {

  imgUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  @Input() isActive: boolean;
  @Output() change = new EventEmitter();
  modelEmail = 'aaa@bbb.ccc';

  constructor() { }

  ngOnInit() {
  }

  btnClick() {
    this.isActive = !this.isActive;
    this.change.emit({imageUrl: this.imgUrl, Email : this.modelEmail, active: this.isActive});
  }

  eventClick($event) {
    $event.stopPropagation();
    console.log('Button Clicked', $event);
  }

  divClick() {
    console.log('Div Clicked');
  }

  onKeyUp() {
    console.log('Enter is pressed');
  }

  sendVariable(email) {
    console.log(email);
  }

  sendTwoWay() {
    console.log(this.modelEmail);
    this.modelEmail = 'xxx@yyy.zzz';
  }

}
