import {Observer, DisplayElement, Subject} from './interfaces';

export default class CurrentConditionDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: Subject ) {
        weatherData.registerObserver(this);
    }
    
    update(temperature: number, humidity:number, pressure: number): void {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        
        this.display();    
    }
    
    display(): void {
        console.log(`Current Conditions: ${this.temperature} F degrees and humidity %${this.humidity}`);
    }
}