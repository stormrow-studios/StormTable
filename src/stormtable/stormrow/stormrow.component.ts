import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Stormcolumn } from '../stormcolumn/stormcolumn.interface';

@Component({
    selector: 'stormrow',
    templateUrl: './stormrow.component.html',
    styleUrls: ['./stormrow.component.css']
})
export class StormrowComponent implements OnChanges {

    @Input() options: { columns: Stormcolumn[] };
    @Input() sourceRow: any;
    public cellValues: string[];

    constructor() {

    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.getCellValues();
    }

    public getCellValues() {
        if (!this.sourceRow || !this.options) {
            this.cellValues = [];
            return;
        }
        this.cellValues = this.options.columns.map(col => this.getCellValue(this.sourceRow, col));
    }

    public getCellValue(source: any, column: Stormcolumn): string {
        for (let token of column.path) {
            source = source[token];
        }
        return source;
    }
}

