import { countries } from "./countries-list.js";

// Get the search input element
const searchInput = document.getElementById('searchInput');
console.log(searchInput.value)
renderCountries(countries)
// Add an event listener for input event on the search input
searchInput.addEventListener('input', (event) => {
    // Get the search query from the input value
    const searchQuery = event.target.value.toLowerCase();
    // Filter the countries array based on the search query
    const filteredCountries = countries.filter(country => country.name.toLowerCase().startsWith(searchQuery));

    // Call a function to render the filtered countries
    renderCountries(filteredCountries);
});

// Function to render countries based on the filtered array
function renderCountries(countriesArray) {
    // Clear the existing cards
    const container = document.getElementById('country-cards-container');
    container.innerHTML = '';

    // Loop through the filtered countries array and create a card for each country
    countriesArray.forEach(country => {
        // Create a new div element for the card
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        // Create HTML content for the card using country object properties
        cardDiv.innerHTML = `
            <h2>${country.name}</h2>
            <p>Population: ${country.population}</p>
            <p>Area: ${country.area}</p>
            <p>Capital: ${country.capital}</p>
            <p>Interesting Facts: ${country.facts}</p>
        `;

        // Append the card to the container element
        container.appendChild(cardDiv);
    });
}
