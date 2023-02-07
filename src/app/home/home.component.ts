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
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(){
    this.dataService.getData().subscribe(data =>{
      console.log(data);
      this.data = data;
    })
  }

  getData(){
    return this.data
  }

  pageRefresh(){
    // console.log("Refreshed page");
    // window.location.reload();
    // this.newdata = [];
    // this.dataService.getData().subscribe(data =>{
    //   console.log(data);
    //   this.newdata.push(this.data);
    //   console.log(this.newdata);
    // })
    console.log(this.data)
  }
}
