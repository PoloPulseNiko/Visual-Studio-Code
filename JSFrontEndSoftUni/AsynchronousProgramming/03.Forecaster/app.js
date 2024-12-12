function attachEvents() {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
        const location = document.getElementById('location').value;

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(response => response.json())
            .then(locations => {
                const locationCode = locations.find(loc => loc.name.toLowerCase() === location.toLowerCase()).code;

                return Promise.all([
                    fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`).then(res => res.json()),
                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`).then(res => res.json())
                ]);
            })
            .then(([todayData, upcomingData]) => {
                const currentDiv = document.getElementById('current');
                while (currentDiv.firstChild) {
                    currentDiv.removeChild(currentDiv.firstChild);
                }

                const label = document.createElement('div');
                label.className = 'label';
                label.textContent = 'Current conditions';
                currentDiv.appendChild(label);
                const forecastsDiv = document.createElement('div');
                forecastsDiv.className = 'forecasts';
                currentDiv.appendChild(forecastsDiv)
                const symbolSpan = document.createElement('span');
                symbolSpan.className = 'condition symbol';
                symbolSpan.textContent = {
                    'Sunny': '☀',
                    'Partly sunny': '⛅',
                    'Overcast': '☁',
                    'Rain': '☂',
                    'Degrees': '°'
                }[todayData.forecast.condition] || '';
                forecastsDiv.appendChild(symbolSpan);

                const conditionSpan = document.createElement('span');
                conditionSpan.className = 'condition';

                const nameSpan = document.createElement('span');
                nameSpan.className = 'forecast-data';
                nameSpan.textContent = todayData.name;

                const tempSpan = document.createElement('span');
                tempSpan.className = 'forecast-data';
                tempSpan.textContent = `${todayData.forecast.low}°/${todayData.forecast.high}°`;

                const conditionTextSpan = document.createElement('span');
                conditionTextSpan.className = 'forecast-data';
                conditionTextSpan.textContent = todayData.forecast.condition;

                conditionSpan.appendChild(nameSpan);
                conditionSpan.appendChild(tempSpan);
                conditionSpan.appendChild(conditionTextSpan);
                forecastsDiv.appendChild(conditionSpan);

                const upcomingDiv = document.getElementById('upcoming');
                const forecastInfo = document.createElement('div');
                forecastInfo.className = 'forecast-info';
                while (upcomingDiv.firstChild) {
                    upcomingDiv.removeChild(upcomingDiv.firstChild);
                }

                const labelUpcoming = document.createElement('div');
                labelUpcoming.className = 'label';
                labelUpcoming.textContent = 'Three-day forecast';
                upcomingDiv.appendChild(labelUpcoming);

                upcomingData.forecast.forEach(day => {
                    const upcomingSpan = document.createElement('span');
                    upcomingSpan.className = 'upcoming';

                    const symbolUpcoming = document.createElement('span');
                    symbolUpcoming.className = 'symbol';
                    symbolUpcoming.textContent = {
                        'Sunny': '☀',
                        'Partly sunny': '⛅',
                        'Overcast': '☁',
                        'Rain': '☂',
                        'Degrees': '°'
                    }[day.condition] || '';

                    const tempUpcoming = document.createElement('span');
                    tempUpcoming.className = 'forecast-data';
                    tempUpcoming.textContent = `${day.low}°/${day.high}°`;

                    const conditionUpcoming = document.createElement('span');
                    conditionUpcoming.className = 'forecast-data';
                    conditionUpcoming.textContent = day.condition;

                    upcomingSpan.appendChild(symbolUpcoming);
                    upcomingSpan.appendChild(tempUpcoming);
                    upcomingSpan.appendChild(conditionUpcoming);

                    forecastInfo.appendChild(upcomingSpan);
                });

                upcomingDiv.appendChild(forecastInfo);

                document.getElementById('forecast').style.display = 'block';
            })
            .catch(() => {
                const forecastDiv = document.getElementById('forecast');
                forecastDiv.style.display = 'block';
                while (forecastDiv.firstChild) {
                    forecastDiv.removeChild(forecastDiv.firstChild);
                }

                const errorSpan = document.createElement('span');
                errorSpan.className = 'label';
                errorSpan.textContent = 'Error';
                forecastDiv.appendChild(errorSpan);
            });
    });
}

attachEvents();