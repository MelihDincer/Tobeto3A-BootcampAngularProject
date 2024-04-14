import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { BootcampService } from '../../../services/concretes/bootcamp.service';
import { GetlistBootcampResponse } from '../../../models/responses/bootcamp/getlist-bootcamp-response';
import { PageRequest } from '../../../../core/models/page-request';
import { BootcampListItemDto } from '../../../models/responses/bootcamp/bootcamp-list-item-dto';

@Component({
  selector: 'app-bootcamp-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './bootcamp-list-group.component.html',
  styleUrl: './bootcamp-list-group.component.scss'
})
export class BootcampListGroupComponent implements OnInit {

  bootcamps!: BootcampListItemDto;
  constructor(private bootcampService:BootcampService){}   
  readonly PAGE_SIZE=6;
  
  ngOnInit(): void {
    this.getBootcamps({page:0, pageSize:this.PAGE_SIZE});
  }

getBootcamps(pageRequest:PageRequest){
    this.bootcampService.getList(pageRequest).subscribe((response)=>{
      this.bootcamps=response;
    })
  }
}
