const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#restaurant-name').value.trim();
  const meals_available = document
    .querySelector('#meals-available')
    .value.trim();
  const cuisine = document.querySelector('#cuisine').value.trim();
  const lat = document.querySelector('#restaurant-lat').value.trim();
  const lon = document.querySelector('#restaurant-lon').value.trim();

  if (name && meals_available && cuisine && lat && lon) {
    const response = await fetch(`/api/restaurants`, {
      method: 'POST',
      body: JSON.stringify({ name, meals_available, cuisine, lat, lon }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create restaurant');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/restaurants/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete restaurant');
    }
  }
};

document
  .querySelector('.new-restaurant-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.restaurant-list')
  .addEventListener('click', delButtonHandler);
