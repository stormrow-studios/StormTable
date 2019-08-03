import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { StormtableComponent } from './stormtable.component';

@NgModule({
    declarations: [
        StormtableComponent
    ],
    imports: [
        BrowserModule,
        ScrollingModule
    ],
    providers: [],
    exports: [
        StormtableComponent
    ]
})
export class StormtableModule { }
