import { GetlistBootcampResponse } from "../responses/bootcamp/getlist-bootcamp-response";
import { ResponseModel } from "./responseModel";

export interface BootcampResponseModel extends ResponseModel{
    data:GetlistBootcampResponse[]
}