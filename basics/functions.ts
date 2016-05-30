function update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;

    this.display();
}

let func: (temp: number, humid: number, presure: number) => void;
func = update;