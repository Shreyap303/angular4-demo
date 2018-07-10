import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    // this.route.paramMap
    //   .subscribe( params => {
    //     let id = +params.get('id');
    //     console.log(id);
    //   })
  }

  submit() {
    this.router.navigate(['/followers']);
  }

}
