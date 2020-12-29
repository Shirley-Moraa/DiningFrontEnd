import { SeniorService } from '../senior.service';
import { Component, OnInit } from '@angular/core';
import { Senior } from '../senior';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-senior',
  templateUrl: './create-senior.component.html',
  styleUrls: ['./create-senior.component.css']
})
export class CreateSeniorComponent implements OnInit {
  
  senior : Senior = new Senior();
  submitted = false;

  constructor(private seniorService : SeniorService,
    private router : Router) { }

  ngOnInit() {
  }

  newSenior(): void {
    this.submitted = false;
    this.senior = new Senior();
  }
  save() {
    this.seniorService
    .createSenior(this.senior).subscribe(data => {
      console.log(data)
      this.senior = new Senior();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/seniors']);
  } 
}
