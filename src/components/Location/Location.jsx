import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Location.css';

const Location = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cities = [
        {
            name: 'Paray-le-Monial',
            latitude: 46.45221505557624, 
            longitude: 4.120693100880529
        },
        {
            name: 'Digoin',
            latitude: 46.48018775880591,
            longitude: 3.978920834011164
        },
    ];

    const fetchWeatherForCities = async () => {
        try {
            setLoading(true);
            const weatherResponses = await Promise.all(
                cities.map((city) =>
                    axios.get('https://api.open-meteo.com/v1/forecast', {
                        params: {
                            latitude: city.latitude,
                            longitude: city.longitude,
                            current_weather: true,
                        },
                    })
                )
            );

            const weatherInfo = weatherResponses.map((response, index) => ({
                city: cities[index].name,
                temperature: response.data.current_weather.temperature,
                weathercode: response.data.current_weather.weathercode,
            }));

            setWeatherData(weatherInfo);
            setLoading(false);
        } catch (error) {
            setError("Une erreur est survenue lors de la récupération des données.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherForCities();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    // Documentation des weather codes : https://open-meteo.com/en/docs
    // Liste des icones : https://erikflowers.github.io/weather-icons/
    const weatherIconMap = {
        0: 'wi-day-sunny',
        1: 'wi-day-sunny-overcast',
        2: 'wi-cloudy',
        3: 'wi-cloudy',
        45: 'wi-fog',
        48: 'wi-fog',
        51: 'wi-sprinkle',
        53: 'wi-sprinkle',
        55: 'wi-sprinkle',
        56: 'wi-sprinkle',
        57: 'wi-sprinkle',
        61: 'wi-rain',
        63: 'wi-rain',
        65: 'wi-rain',
        66: 'wi-rain-mix',
        67: 'wi-rain-mix',
        71: 'wi-snow',
        73: 'wi-snow',
        75: 'wi-snow',
        77: 'wi-snow',
        80: 'wi-showers',
        81: 'wi-showers',
        82: 'wi-showers',
        85: 'wi-snow-wind',
        86: 'wi-snow-wind',
        95: 'wi-thunderstorm',
        96: 'wi-thunderstorm',
        99: 'wi-thunderstorm',
    };

    return (
        <div className="min-w-full col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-10">
            <div className="item-title">
                <h2 className="md:text-4xl text-3xl text-gray-700">Villes</h2>
                <p className="text-lg text-gray-500">Où je suis amené à travailler.</p>
            </div>

            {weatherData.map((data, index) => {
                const weatherIconClass = weatherIconMap[data.weathercode] || 'wi-na';

                return (
                    <div key={index} className="flex flex-row items-center gap-10">
                        <h3 className="md:text-xl text-md text-gray-500">{data.city}</h3>
                        <i className={`wi ${weatherIconClass} text-[50px] text-gray-700`}></i>
                        <p className="md:text-xl text-md text-gray-500">{data.temperature}°C</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Location;
