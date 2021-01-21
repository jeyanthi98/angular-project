import {Component,OnInit,EventEmitter,Output} from '@angular/core';
import { ListService } from '../list/list.service';
import { CommonService } from '../service/common.service';
@Component({
    selector:'city-list-cmp',
    templateUrl:'city-list.page.html'
    
})
export class CityListComponent implements OnInit{
    public cityList:any;
    @Output() cityName:EventEmitter<string>=new EventEmitter();
    constructor(private ListService:ListService,private commonService:CommonService){}
    ngOnInit(){
        this.commonService.getCityId().subscribe((id:any)=>{
            this.cityByState(id);
        })
    }
    cityByState(id){
        this.ListService.getCityByState(id).subscribe((res:any)=>{
         this.cityList=res;
        })
    }
    getSelectedCity(event){
      this.cityName.emit(event);
    }

}