window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Adjust the value as needed
      navbar.classList.add('translucent');
  } else {
      navbar.classList.remove('translucent');
  }
});

// Add event listener to the form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/contact', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});


fetch('https://api.example.com/events')
  .then(response => response.json())
  .then(data => {
    const eventsList = document.getElementById('events-list');
    data.forEach(event => {
      const eventItem = document.createElement('li');
      eventItem.textContent = `${event.name} - ${event.date}`;
      eventsList.appendChild(eventItem);
    });
  })
  .catch(error => console.error(error));
