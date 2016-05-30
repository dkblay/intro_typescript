import WeatherData from './weatherData';
import ForecastDisplay from './forecastDisplay';
import CurrentConditionDisplay from './currentConditionsDisplay';

// let weatherData:WeatherData = new WeatherData();

let weatherData = new WeatherData();

// Diplay options
let forecastDisplay:ForecastDisplay = new ForecastDisplay(weatherData);
let currentConditionsDisplay: CurrentConditionDisplay = new CurrentConditionDisplay(weatherData);

weatherData.setMeasurement(80, 56 , 30);
weatherData.setMeasurement(88, 44 , 36);
weatherData.setMeasurement(36,76,90);
