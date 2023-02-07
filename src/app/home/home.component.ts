import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  newdata: any;
  refreshedData: any;
  gender: any;

  genders: Gender[] = [
    { value: 'male', viewValue: 'All' },
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  myObjArray = [
    {id: 1, name: "Hardik" },
    {id: 2, name: "Vimal" },
    {id: 3, name: "Paresh" }
  ];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  pageRefresh() {
    // window.location.reload();
    this.dataService.getData().subscribe(data => {
      // this.refreshedData = data;
      this.data = data;
      // this.newdata = this.data + data
      // console.log(this.newdata);
    })
  }
}
