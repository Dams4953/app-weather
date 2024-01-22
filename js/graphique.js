let myChart;

export function graphiqueFunction(input, temperatures, jours) {
    const graph = document.getElementById('myChart');



    if (!myChart) {
        // Création du graphique
        myChart = new Chart(graph, {
            type: 'line',
            data: {
                labels: jours,
                datasets: [{
                    label: `${input}`,
                    data: temperatures,
                    borderColor: couleurAleatoire(),
                    fill: false
                }]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false
            }
        });
    } else {
        // Ajoute données du input au graphique
        const newData = {
            label: `${input}`,
            data: temperatures,
            borderColor: couleurAleatoire(),
            fill: false
        };

        myChart.data.datasets.push(newData);
        myChart.update();
    }
    
    stylesGraphique(graph);
}

// styles pour le graphique
function stylesGraphique(graph) {
    if (graph) {

      
        graph.style.backgroundColor = 'rgba(255, 255, 255, 0.74)';
        graph.style.margin = '20%';
        graph.style.marginTop = '0%';
        graph.style.marginBottom = '0%';
        graph.style.border = '3px solid #00000078';
    }
}

// Fonction pour couleur aléatoire
function couleurAleatoire() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}



