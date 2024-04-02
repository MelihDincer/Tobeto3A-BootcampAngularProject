import { Injectable } from '@angular/core';
import { BootcampBaseService } from '../abstracts/bootcamp-base.service';
import { Observable } from 'rxjs';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { ListResponseModel } from '../../models/responsemodel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BootcampBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/bootcamps`
  constructor(private httpClient:HttpClient) 
  {
    super() 
  }
  override getList(): Observable<ListResponseModel<GetlistBootcampResponse>> {
      return this.httpClient.get<ListResponseModel<GetlistBootcampResponse>>(`${this.apiUrl}`)
  }

}
