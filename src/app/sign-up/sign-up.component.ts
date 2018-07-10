import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique),
    'password': new FormControl('', Validators.required),
    'topics': new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }

  signin() {
    console.log(this.form.value);
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push( new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
