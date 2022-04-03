const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#psword').value;
  
    if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: psword.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }}
  };


  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  
module.exports = loginFormHandler;