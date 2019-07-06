import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports:[
        HeaderComponent
    ],
    imports:[CommonModule]
})
export class SharedModule{

}