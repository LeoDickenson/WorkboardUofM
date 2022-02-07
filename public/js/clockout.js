const clockOut = async (event) => {
    event.preventDefault();

    const clockout_time = document.querySelector('#time').value;

    if (clockout_time) {
        const response = await fetch ('/api/timesheet/clockout', {
            method: 'POST',
            body: clockout_time,
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
    .querySelector('#clock-out-btn')
    .addEventListener('click', clockOut);