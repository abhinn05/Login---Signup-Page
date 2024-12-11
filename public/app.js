// Handle Sign Up
document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Signup successful!');
            window.location.href = 'login.html';
        } else {
            alert(await response.text());
        }
    } catch (err) {
        console.error(err);
        alert('Error during signup');
    }
});

// Handle Login
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login successful!');
            // Redirect to a dashboard or homepage if needed
        } else {
            alert(await response.text());
        }
    } catch (err) {
        console.error(err);
        alert('Error during login');
    }
});
