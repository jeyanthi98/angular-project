import {Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'result-cmp',
    templateUrl:'result.page.html'
    
})
export class ResultComponent implements OnInit{
    public stateResult:any;
    public selectedCity:any;
    public selectedState:any;

    constructor(private route:ActivatedRoute){}
    ngOnInit(){
           this.selectedState=this.route.snapshot.params.state;
           this.selectedCity=this.route.snapshot.params.city;

    }
  

}