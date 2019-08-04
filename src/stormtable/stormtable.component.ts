import { Component, Input, ViewChild, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';


export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(18, 50, 100);
    }
}

@Component({
    selector: 'stormtable',
    templateUrl: './stormtable.component.html',
    styleUrls: ['./stormtable.component.css'],
    providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})
export class StormtableComponent implements OnChanges, AfterViewChecked {

    @Input() options: any;
    @Input() source: any[];
    @ViewChild('rowviewport', null) rowViewport: CdkVirtualScrollViewport;
    public rowViewportHeight: number;

    constructor() {

    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['options']) {
            this.validateOptions();
            this.fillOptions();
        }
    }

    public ngAfterViewChecked(): void {
        this.updateViewportSize();
    }

    private fillOptions() {
        // TODO fill in and massage options
    }

    private validateOptions() {
        // TODO make sure the bare minimum options are there
    }

    private updateViewportSize(force: boolean = false) {
        if (this.rowViewport && (force || this.rowViewportHeight !== this.rowViewport.elementRef.nativeElement.offsetHeight)) {
            this.rowViewportHeight = this.rowViewport.elementRef.nativeElement.offsetHeight;
            this.rowViewport.checkViewportSize();
        }
    }
}

