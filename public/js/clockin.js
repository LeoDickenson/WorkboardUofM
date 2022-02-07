const clockIn = async (event) => {
    event.preventDefault();

    const time = document.querySelector('#clock-in').value.trim();

    if (time) {
        const response = await fetch ('/api/timesheet/clockin', {
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
    .querySelector('#clock-in')
    .addEventListener('click', clockIn);