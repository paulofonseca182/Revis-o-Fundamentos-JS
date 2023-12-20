const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperaturesFahrenheit = temperaturesCelsius.map((temp) => {
    const newTemperature = (temp * 9/5) + 32;
    return newTemperature
});

console.log(temperaturesFahrenheit);