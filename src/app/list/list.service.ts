import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class ListService{
    constructor(private http:HttpClient){}
    //  url="http://api.minebrat.com/api/v1/states";
    baseUrl="/api/v1/";
    url;
    getStates(){
        this.url=this.baseUrl+'states'
        return this.http.get(this.url)
    }
    getCityByState(stateId){
        this.url=this.baseUrl+'states/cities/'+stateId
        return this.http.get(this.url);
    }

}