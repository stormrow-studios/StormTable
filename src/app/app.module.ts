import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StormtableModule } from 'src/stormtable/stormtable.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StormtableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
