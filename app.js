function searchCards() {
    // Отримати елементи зі списку карточок та ввід користувача
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const cards = document.getElementById('cardList').getElementsByTagName('li');
  
    // Пройти через кожну карточку та приховати ті, що не відповідають пошуковому запиту
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const text = card.textContent || card.innerText;
      if (text.toUpperCase().indexOf(filter) > -1) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  }
  