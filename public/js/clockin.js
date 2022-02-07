const clockIn = async (event) => {
    event.preventDefault();

    const clockin_time = document.querySelector('#time').textContent;
    const dbclockin_time = parseInt(clockin_time.replaceAll(':', ''));

    if (dbclockin_time) {
        const response = await fetch ('/api/timesheet/clockin', {
            method: 'POST',
            body: JSON.stringify({clockin_time: dbclockin_time}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to clock in.');
        }
    }
};

document 
    .querySelector('#clock-in-btn')
    .addEventListener('click', clockIn);