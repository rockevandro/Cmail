import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from '../components/cmail-list-item/cmail-list-item.component';

@NgModule({
    declarations: [
        HeaderComponent,
        CmailListItemComponent
    ],
    exports:[
        HeaderComponent,
        CmailListItemComponent
    ],
    imports:[
        RouterModule,
        CommonModule
    ]
})
export class SharedModule{

}