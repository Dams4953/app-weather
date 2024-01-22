
import { graphiqueFunction } from './graphique.js';

export function cardFunction(input, data, dataImg) {

    const joursTotaux = 5;

    // tableaux graphique
    let temperatures = [];
    let jours = [];

    // boucle de données pour graphique
    for (let j = 0; j < joursTotaux; j++) {
        let i = j * 8;
        temperatures.push(data.list[i].main.temp - 273.15); // Température
        jours.push(new Date(data.list[i].dt * 1000).toLocaleDateString()); // jours
    }


    try {

        // appel fonction graphique
        graphiqueFunction(input, temperatures, jours)

        // div pour les 5 jours
        let div = document.getElementById('div');


        // jours semaine pour : // date
        const joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

        // creation h2 et span pour la ville du h2
        let villeTitre = document.createElement('h2');
        villeTitre.innerHTML = `Météo pour <span class="ville_titre">${input}</span>`;
        div.appendChild(villeTitre);

        // images des villes
        let divImagesApi = document.createElement('div');
        divImagesApi.className = 'div_images';
        let imagesApi = document.createElement('img');
        imagesApi.src = dataImg.results[0].urls.small;
        div.appendChild(divImagesApi);
        divImagesApi.appendChild(imagesApi);


        // boucle 5 jours
        for (let j = 0; j < joursTotaux; j++) {
            let i = j * 8;

            // div pour chaque jour
            let dayDiv = document.createElement('div');
            dayDiv.className = 'div_days';
            div.appendChild(dayDiv);

            // date
            let datePara = document.createElement('p');
            datePara.className = 'div_date';
            let date = new Date(data.list[i].dt * 1000);
            datePara.textContent = joursSemaine[date.getDay()] + " " + data.list[i].dt_txt.split(' ')[0];
            dayDiv.appendChild(datePara);

            // icones
            let icon = document.createElement('img');
            icon.className = 'div_logo';
            let iconeCode = data.list[i].weather[0].icon;
            icon.src = `http://openweathermap.org/img/w/${iconeCode}.png`;
            dayDiv.appendChild(icon);

            // temperature
            const conversion = parseInt(data.list[i].main.temp - 273.15);
            let temperature = document.createElement('p');
            temperature.className = 'div_temperature';
            temperature.textContent = `${conversion} °C`;
            dayDiv.appendChild(temperature);

            // humidité
            let humidité = document.createElement('p');
            humidité.className = 'div_humidité';
            humidité.textContent = "humidité : " + data.list[i].main.humidity + "%";
            dayDiv.appendChild(humidité);

            // vitesse du vent
            let vent = document.createElement('p');
            vent.className = 'div_vent';
            vent.textContent = "vent : " + Math.round(data.list[i].wind.speed * 3.6) + "km/h";
            dayDiv.appendChild(vent);
        }
    } catch (error) {
        alert("CARD error");
    }

};


