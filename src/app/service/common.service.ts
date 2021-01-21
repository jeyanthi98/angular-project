import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CommonService{
    private city:Subject<any>=new Subject();
    sendCityId(id){
        this.city.next(id)
    }
    getCityId(){
        return this.city.asObservable()
    }
}