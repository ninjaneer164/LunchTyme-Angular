import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    @Input()
    public showBack: boolean = false;

    @Output()
    public back: EventEmitter<any> = new EventEmitter<any>();

    public navBack(): void {
        this.back.emit();
    }
}
