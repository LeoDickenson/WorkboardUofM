//PULLED FROM UNIT 14 ACTVITY 16
const loginFormHandler = async (event) => {
    event.preventDefault();

    const employee_email = document.querySelector('#email-login').value.trim();
    const employee_password = document.querySelector('#password-login').value.trim();

    if (employee_email && employee_password) {
        const response = await fetch('/api/signup/login', {
            method: 'POST',
            body: JSON.stringify({ employee_email, employee_password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};


document
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);