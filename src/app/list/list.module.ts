import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.page';
import { ListService } from './list.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CityListComponent } from '../city-list/city-list.page';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ListComponent
            }
        ]

        )
    ],
    declarations: [
        ListComponent,
        CityListComponent
    ],
    providers:[
        ListService
    ]
})
export class ListModule {

}