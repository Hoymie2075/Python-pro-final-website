// index.js

import { countries } from "./countries-list.js";

// Get the search input element
const searchInput = document.getElementById('searchInput');
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
    // Clear the existing cards and pagination
    const container = document.getElementById('country-cards-container');
    container.innerHTML = '';
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Calculate the number of pages required to display all the countries
    const numPages = Math.ceil(countriesArray.length / 36);

    // Loop through the pages and create a button for each page
    for (let i = 1; i <= numPages; i++) {
        // Create a new button element for the page
        const button = document.createElement('button');
        button.innerHTML = i;

        // Add an event listener for click event on the page button
        button.addEventListener('click', () => {
            // Calculate the start and end index for the countries to be displayed on this page
            const startIndex = (i - 1) * 36;
            const endIndex = i * 36;

            // Call a function to render the countries for this page
            renderCountriesPage(countriesArray.slice(startIndex, endIndex));

            // Remove the active class from all buttons
            const buttons = document.querySelectorAll('.pagination button');
            buttons.forEach(button => button.classList.remove('active'));

            // Add the active class to the selected button
            button.classList.add('active');
        });

        // Append the button to the pagination element
        pagination.appendChild(button);
    }

    // Render the first page of countries by default
    renderCountriesPage(countriesArray.slice(0, 36));

    // Add the active class to the first button
    const firstButton = document.querySelector('.pagination button');
    firstButton.classList.add('active');
}
  

// Function to render countries for a specific page
function renderCountriesPage(countriesArray) {
    // Clear the existing cards
    const container = document.getElementById('country-cards-container');
    container.innerHTML = '';

    // Loop through the countries array and create a card for each country
    countriesArray.forEach(country => {
        // Create a new div element for the card
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        // Create HTML content for the card using country object properties
        cardDiv.innerHTML = `
            <img src="${country.Image}" class="card-img-top myimage">
            <h2 class="text-center">${country.name}</h2>
            <p><b>Population:</b> ${country.population}</p>
            <p><b>Area:</b> ${country.area}</p>
            <p><b>Capital:</b> ${country.capital}</p>
            <p><b>Interesting Facts:</b> ${country.interestingFact}</p>
        `;

        // Append the card to the container element
        container.appendChild(cardDiv);
    })};
