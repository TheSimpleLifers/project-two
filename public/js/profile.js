const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const meals_available = document
    .querySelector('#project-funding')
    .value.trim();
  const cuisine = document.querySelector('#project-desc').value.trim();
  const lat = document.querySelector('#restaurant-lat').value.trim();
  const lon = document.querySelector('#restaurant-lon').value.trim();

  if (name && meals_available && cuisine) {
    const response = await fetch(`/api/restaurants`, {
      method: 'POST',
      body: JSON.stringify({ name, meals_available, cuisine }),
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
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
