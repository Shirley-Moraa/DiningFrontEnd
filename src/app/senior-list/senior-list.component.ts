import { SeniorDetailsComponent } from '../senior-details/senior-details.component';
import { Observable } from "rxjs";
import { SeniorService } from "../senior.service";
import { Senior } from "../senior";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit {
  seniors: Observable<Senior[]>;

  constructor(private seniorService: SeniorService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.seniors = this.seniorService.getSeniorsList();
  }

  deleteSenior(id: number) {
    this.seniorService.deleteSenior(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  seniorDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSenior(id: number){
    this.router.navigate(['update',id]);
  }
}




