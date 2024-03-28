import { GetlistBootcampResponse } from "../responses/bootcamp/getlist-bootcamp-response";
import { responseModel } from "./responseModel";

export interface bootcampResponseModel extends responseModel{
    data:GetlistBootcampResponse[]   
}