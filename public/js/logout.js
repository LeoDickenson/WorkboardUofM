const logout = async () => {
    const response = await fetch('/api/signup/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response) {
        document.location.replace('/login');
    } else {
        alert('Failed to log out.');
    }
};

document
    .querySelector('#logout')
    .addEventListener('click', logout);