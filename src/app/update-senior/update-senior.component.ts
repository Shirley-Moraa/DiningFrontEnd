import { Component, OnInit } from '@angular/core';
import { Senior } from '../senior';
import { ActivatedRoute, Router } from '@angular/router';
import { SeniorService } from '../senior.service';


@Component({
  selector: 'app-update-senior',
  templateUrl: './update-senior.component.html',
  styleUrls: ['./update-senior.component.css']
})
export class UpdateSeniorComponent implements OnInit {
  
  id: number;
  senior: Senior;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private seniorService: SeniorService) { }

  ngOnInit() {
    this.senior = new Senior();

    this.id = this.route.snapshot.params['id'];
    
    this.seniorService.getSenior(this.id)
      .subscribe(data => {
        console.log(data)
        this.senior = data;
      }, error => console.log(error));
  }

  updateSenior() {
    this.seniorService.updateSenior(this.id, this.senior)
      .subscribe(data => {
        console.log(data);
        this.senior = new Senior();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSenior();    
  }

  gotoList() {
    this.router.navigate(['/seniors']);
    
  }
}
