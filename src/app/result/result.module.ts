import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './result.page';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ResultComponent
            }
        ]

        )
    ],
    declarations: [
        ResultComponent
    ]
  
})
export class ResultModule {

}