import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public options: any;
    public source: any;
    public input1 = 200;
    public input2 = 10000;
    public input3 = '';

    constructor() {
        this.options = this.simpleTextOptions();
        this.source = this.simpleTextSource();
    }

    public input1Changed(value) {
        this.input1 = value;
    }

    public input2Changed(value) {
        this.input2 = value;
        this.source = this.simpleTextSource();
    }

    public input3Changed(value) {
        this.input3 = value;
    }

    private simpleTextOptions(): any {
        return {};
    }

    private simpleTextSource(): any {
        let rows = [];
        for (let i = 0; i < this.input2; i++) {
            rows.push({ name: { value: 'test' + i }, sample: { value: 'sample' + i }});
        }
        return rows;
    }
}
