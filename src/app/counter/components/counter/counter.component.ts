import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    counterOptions(optionValue: string, value: number): void {
        switch (optionValue) {
            case '@add':
                this.counter += value;
                break;
            case '@substract':
                this.counter -= value;
                break;
            default:
                this.counter = value;
                break;
        }

    }
}