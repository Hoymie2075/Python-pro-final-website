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
            <img src="${country.Image}" class="card-img-top myimage" alt="...">
            <h2 class="text-center">${country.name}</h2>
            <p><b>Population:</b> ${country.population}</p>
            <p><b>Area:</b> ${country.area}</p>
            <p><b>Capital:</b> ${country.capital}</p>
            <p><b>Interesting Facts:</b> ${country.interestingFact}</p>
        `;

        // Append the card to the container element
        container.appendChild(cardDiv);
    });
}
