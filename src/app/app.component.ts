import { Component } from '@angular/core';
import { TextStormColumn } from 'src/stormtable/stormcolumn/textstormcolumn';

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
    public columnCount = 20;

    constructor() {
        this.options = this.tableOptions();
        this.source = this.tableSource();
    }

    public input1Changed(value) {
        this.input1 = value;
    }

    public input2Changed(value) {
        this.input2 = value;
        this.source = this.tableSource();
    }

    public input3Changed(value) {
        this.input3 = value;
    }

    private tableOptions(): any {
        let columns = [];
        for (let j = 0; j < this.columnCount; j++) {
            let column = new TextStormColumn();
            column.path = [j.toString(), 'value'];
            columns.push(column);
        }
        return { columns: columns };
    }

    private tableSource(): any {
        let rows = [];
        for (let i = 0; i < this.input2; i++) {
            let cells = [];
            for (let j = 0; j < this.columnCount; j++) {
                let cell = {} as any;
                cell.value = 'test' + i + '' + j;
                cells.push(cell);
            }
            rows.push(cells);
        }
        return rows;
    }
}
