import { TestBed, async } from '@angular/core/testing';
import { StormtableComponent } from './stormtable.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StormtableComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(StormtableComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'StormTable'`, () => {
        const fixture = TestBed.createComponent(StormtableComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('StormTable');
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(StormtableComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to StormTable!');
    });
});
