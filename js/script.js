import { cardFunction } from './card.js';
import { apiFunctionVilles } from './api.js';
import { apiFunctionImages } from './api.js';
import {darkmodeFunction} from './darkmode.js';



let data;
let dataImg;

// INPUT PRINCIPAL
document.getElementById('input_Ville').addEventListener('keyup', async function (event) {
    const input = event.target.value;

    // input
    if (event.key === "Enter") {
        event.target.value = '';

        try {
            // api
            data = await apiFunctionVilles(input);
            dataImg = await apiFunctionImages(input)
            

            // cartes météo
            cardFunction(input, data,dataImg); 

        } catch (error) {
            alert('INPUT error');
        }
    }
});

darkmodeFunction();
