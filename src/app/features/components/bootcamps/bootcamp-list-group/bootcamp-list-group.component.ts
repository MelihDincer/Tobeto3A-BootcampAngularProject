import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { BootcampResponseModel } from '../../../models/responsemodel/bootcampResponseModel';
import { BootcampService } from '../../../services/concretes/bootcamp.service';
import { GetlistBootcampResponse } from '../../../models/responses/bootcamp/getlist-bootcamp-response';

@Component({
  selector: 'app-bootcamp-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './bootcamp-list-group.component.html',
  styleUrl: './bootcamp-list-group.component.scss'
})
export class BootcampListGroupComponent implements OnInit {

  bootcamps!: GetlistBootcampResponse[];
  constructor(private bootcampService:BootcampService){}   
  
  ngOnInit(): void {
    this.getBootcamps();
  }
getBootcamps(){
    this.bootcampService.getList().subscribe((response)=>{
      this.bootcamps=response.data;
    })
  }
}
