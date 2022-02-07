const signupFormHandler = async (event) => {
    event.preventDefault();

    const employee_firstname = document.querySelector('#firstname-signup').value.trim();
    const employee_lastname = document.querySelector('#lastname-signup').value.trim();
    const employee_email = document.querySelector('#email-signup').value.trim();
    const employee_password = document.querySelector('#password-signup').value.trim();


    if (employee_firstname && employee_lastname && employee_email && employee_password) {
        const response = await fetch('/api/signup/create', {
            method: 'POST',
            body: JSON.stringify({ employee_firstname, employee_lastname, employee_email, employee_password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('#createBtn')
    .addEventListener('click', signupFormHandler);