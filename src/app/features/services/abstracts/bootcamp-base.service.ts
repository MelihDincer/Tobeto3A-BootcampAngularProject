import { Injectable } from '@angular/core';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/responsemodel/listResponseModel';

@Injectable()
export abstract class BootcampBaseService {

  abstract getList():Observable<ListResponseModel<GetlistBootcampResponse>>
}
