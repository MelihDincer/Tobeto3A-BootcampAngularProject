import { Component, OnInit } from '@angular/core';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';
import { HttpClient } from '@angular/common/http';
import { BootcampResponseModel } from '../../models/responsemodel/bootcampResponseModel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  apiUrl = "http://localhost:5268/api/Bootcamps";
  Bootcamps: GetlistBootcampResponse[] = [];

  constructor(private httpclient: HttpClient){}

  ngOnInit(): void {
    console.log("Bootcamp GetAll metodu çalıştırıldı..");
    this.getBootcamps();
  }

  getBootcamps(){
    this.httpclient.get<BootcampResponseModel>(this.apiUrl).subscribe(
      (response)=> {
        this.Bootcamps = response.data;
      }
    )
  }
}