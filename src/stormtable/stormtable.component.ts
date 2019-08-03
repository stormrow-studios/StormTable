import { Component, Input, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
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
export class StormtableComponent implements AfterViewChecked {

    @Input() options: any;
    @Input() source: any[];
    @ViewChild('rowviewport', null) rowViewport: CdkVirtualScrollViewport;
    private rowViewportHeight: number;

    constructor() {

    }

    public ngAfterViewChecked(): void {
        this.updateViewportSize();
    }

    private updateViewportSize(force: boolean = false) {
        if (this.rowViewport && (force || this.rowViewportHeight !== this.rowViewport.elementRef.nativeElement.offsetHeight)) {
            this.rowViewportHeight = this.rowViewport.elementRef.nativeElement.offsetHeight;
            this.rowViewport.checkViewportSize();
        }
    }
}

