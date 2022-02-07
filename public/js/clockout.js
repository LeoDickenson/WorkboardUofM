const clockOut = async (event) => {
    event.preventDefault();

    const time = document.querySelector('#clock-out').value.trim();

    if (time) {
        const response = await fetch ('/api/timesheet/clockout', {
            method: 'POST',
            body: time,
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
    .querySelector('#clock-out')
    .addEventListener('click', clockOut);