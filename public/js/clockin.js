const clockIn = async (event) => {
    event.preventDefault();

    const clockin_time = document.querySelector('#time').value;

    if (clockin_time) {
        const response = await fetch ('/api/timesheet/clockin', {
            method: 'POST',
            body: clockin_time,
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
    .querySelector('#clock-in-btn')
    .addEventListener('click', clockIn);