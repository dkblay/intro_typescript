import {Subject, Observer} from './interfaces'

export default class WeatherData  implements Subject{
    private observers: Array<Observer>
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor() {
        this.observers = [];
    }
    
    registerObserver(o: Observer): void {
        this.observers.push(o);
    }
    
    removeObserver(o: Observer): void {
        let index: number = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    
    notifyObservers(): void {
       this.observers.forEach((observer) => {
           observer.update(this.temperature, this.humidity, this.pressure);
       })
    }
    
    measurementChanged(): void {
        this.notifyObservers();
    }
    
    setMeasurement(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementChanged();
    }
    
    get  termperature() : number {
        return this.temperature;
    }
    
    getHumidity(): number {
        return this.humidity;
    }
    
    getPressure(): number {
        return this.pressure;
    }
}