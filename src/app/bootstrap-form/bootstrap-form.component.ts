import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f.value);
  }

}
