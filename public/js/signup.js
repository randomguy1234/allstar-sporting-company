const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const store_id = document.querySelector('#store-signup').value;

    console.log(store_id);

    if (name && email && password && store_id) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, store_id }),
        headers: { 'Content-Type': 'application/json' },
  
      });

      if (response.ok) {
        document.location.replace('/api/products');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
    
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);