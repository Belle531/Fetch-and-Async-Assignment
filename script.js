async function fetchPokemonData(searchTerm) {
    const pokemonCardContainer = document.getElementById('pokemonCardContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');

   
    pokemonCardContainer.innerHTML = '';
    errorMessage.classList.add('visually-hidden');
    loadingSpinner.classList.remove('visually-hidden');

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        const pokemon = response.data;
        updatePokemonCard(pokemon);
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        loadingSpinner.classList.add('visually-hidden');
        errorMessage.textContent = "Pokémon not found. Please try again.";
        errorMessage.classList.remove('visually-hidden');
    } finally {
        loadingSpinner.classList.add('visually-hidden'); 
    }
}

function updatePokemonCard(pokemon) {
    const pokemonCardContainer = document.getElementById('pokemonCardContainer');

    const card = document.createElement('div');
    card.classList.add('card', 'shadow-sm'); // 

    const image = document.createElement('img');
image.classList.add('card-img-top', 'img-fluid');
image.src = pokemon.sprites.other['official-artwork'].front_default;
image.alt = pokemon.name;
image.style.width = '100%'; 
image.style.maxHeight = '200px'; 
image.style.objectFit = 'contain'; 

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-center');

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Capitalize name

    const id = document.createElement('p');
    id.classList.add('card-text');
    id.textContent = `ID: ${pokemon.id}`;

    const weight = document.createElement('p');
    weight.classList.add('card-text');
    weight.textContent = `Weight: ${pokemon.weight / 10} kg`; 

    const height = document.createElement('p');
    height.classList.add('card-text');
    height.textContent = `Height: ${pokemon.height / 10} m`; 

    const typesTitle = document.createElement('h6');
    typesTitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    typesTitle.textContent = 'Types:';

    const typesList = document.createElement('div');
    typesList.classList.add('d-flex', 'justify-content-center', 'gap-2');
    pokemon.types.forEach(type => {
        const typeSpan = document.createElement('span');
        typeSpan.classList.add('badge', 'bg-secondary'); 
        typeSpan.textContent = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        typesList.appendChild(typeSpan);
    });

  
    cardBody.appendChild(name);
    cardBody.appendChild(id);
    cardBody.appendChild(weight);
    cardBody.appendChild(height);
    cardBody.appendChild(typesTitle);
    cardBody.appendChild(typesList);

    card.appendChild(image);
    card.appendChild(cardBody);


    pokemonCardContainer.appendChild(card);
}


document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            fetchPokemonData(searchTerm);
        }
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                fetchPokemonData(searchTerm);
            }
        }
    });
});


