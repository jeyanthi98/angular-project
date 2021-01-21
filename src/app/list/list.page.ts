import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { ListService } from './list.service';
@Component({
    selector: 'list-cmp',
    templateUrl: 'list.page.html'

})
export class ListComponent implements OnInit {
    public stateList: any;
    public selectedState: any;
    public selectedCity: any;
    constructor(private ListService: ListService, private commonService: CommonService, private router: Router) { }
    ngOnInit() {
        this.getStates();
    }
    getStates() {
        this.ListService.getStates().subscribe((res: any) => {
            this.stateList = res;
        })
    }
    getSelectedCityList(event) {
        this.commonService.sendCityId(event.target.value);
        this.selectedState = event.target.options[event.target.selectedIndex].text
    }
    getSlectedCity(event) {
        this.selectedCity = event.target.options[event.target.selectedIndex].text;
    }
    submitState() {
        this.router.navigate(['result', this.selectedState, this.selectedCity])
    }

}