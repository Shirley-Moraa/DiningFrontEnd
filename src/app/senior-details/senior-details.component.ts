import { Senior } from '../senior';
import { Component, OnInit, Input } from '@angular/core';
import { SeniorService } from '../senior.service';
import { SeniorListComponent } from '../senior-list/senior-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-senior-details',
  templateUrl: './senior-details.component.html',
  styleUrls: ['./senior-details.component.css']
})
export class SeniorDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['seniors']);
  }

}
