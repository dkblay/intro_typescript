import {Observer, DisplayElement, Subject} from './interfaces';

export default class ForcastDisplay implements Observer, DisplayElement {

    private currentPressure: number;
    private lastPressure: number;

    constructor(weatherData: Subject) {
        
        weatherData.registerObserver(this);
        // weatherData.registerObserver(this);
    }

    update(pressure: number): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }

    display(): void {
        if(this.currentPressure > this.lastPressure) {
            console.log('Improving weather on the way!');
        } else if (this.currentPressure == this.lastPressure) {
            console.log('More of the same');
        } else if(this.currentPressure < this.lastPressure) {
            console.log('watch out for cooler, rainy weather');
        }
    }


}