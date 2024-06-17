// AXIOS PARA INTEGRAÇÃO DO BACK-END COM O FRONT-END
const axiosClient = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});

// ROTA SOLICITAÇÃO GET
axiosClient.get('/character/?page=1')
    .then(response => {
        console.log(response.data.results);

        const personagensContainer = document.getElementById('personagens-container');
        console.log(personagensContainer);

        response.data.results.forEach(character => {
            personagensContainer.innerHTML += `
                <div class="col-12 col-lg-6 text-start">
                    <div class="card">
                        <div class="row h-100 align-items-center">
                            <div class="col-5">
                                <img src="${character.image}">
                            </div>

                            <div class="col-7 d-flex align-items-center">
                                <div class="ps-0 conteudo-card">
                                    <h5 class="card-title">${character.name}</h5>
    
                                    <div class="status">
                                        <div class="statusCor"></div>
                                        <p class="corP">${character.status} - ${character.species}</p>
                                    </div>
    
                                    <p class="card-text">Última localização conhecida:</p>
                                    <p class="cardTextP">${character.location.name}</p>
                                    <p class="card-text">Visto a última vez em:</p>
                                    <p class="cardTextP">${character.episode[character.episode.length - 1]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    })
    .catch(error => {
        console.log(error);
    });

// STATUS DOS PERSONAGENS - VIVO, MORTO, DESCONHECIDO

async function verificaStatus(character) {
    let 
}

async function createCharacterCard(character) {
    let statusColorClass = "";
  
    if (character.status === "Alive") {
      statusColorClass = "green-status";
    } else if (character.status === "Dead") {
      statusColorClass = "red-status";
    } else {
      statusColorClass = "gray-status";
    }

// function verificaStatus(status) {
//     switch (status) {
//         case `Alive`:
//             return `<div class="statusCorVivo"></div>`;
//         case `Dead`:
//             return `<div class="statusCorMorto"></div>`; 
//          case `unknown`:
//             return `<div class="statusCorDesconhecido"></div>`;
//         default:
//             return '';
//     }
// }

