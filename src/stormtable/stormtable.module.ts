import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StormtableComponent } from './stormtable.component';

@NgModule({
    declarations: [
        StormtableComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        StormtableComponent
    ]
})
export class StormtableModule { }
