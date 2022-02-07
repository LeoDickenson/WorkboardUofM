const clockOut = async (event) => {
    event.preventDefault();

    const clockout_time = document.querySelector('#time').textContent;
    const dbclockout_time = parseInt(clockout_time.replaceAll(':', ''));

    if (dbclockout_time) {
        const response = await fetch ('/api/timesheet/clockout', {
            method: 'PUT',
            body: JSON.stringify({clockout_time: dbclockout_time}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response) {
            document.location.replace('/');
        } else {
            alert('Failed to clock out.');
        }
    }
};

document 
    .querySelector('#clock-out-btn')
    .addEventListener('click', clockOut);