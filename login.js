document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const feedbackMessage = document.getElementById('feedbackMessage'); // Element to show feedback

    // --- Login Form Submission Logic ---
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Clear previous feedback message
        feedbackMessage.textContent = '';
        feedbackMessage.className = '';

        // Simulate a loading state
        feedbackMessage.classList.add('loading'); // You'd style this in CSS
        feedbackMessage.textContent = 'Logging in...';

        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

        // --- Simple Client-side Authentication Simulation ---
        // For a real application, you would send these credentials to a server
        // and validate them securely. DO NOT store sensitive credentials in client-side JS.
        if (username === 'admin' && password === 'password123') {
            feedbackMessage.classList.remove('loading');
            feedbackMessage.classList.add('success');
            feedbackMessage.textContent = 'Login successful! Redirecting...';
            // In a real app, you would redirect to a dashboard or home page
            setTimeout(() => {
                window.location.href = 'index.html'; // Example redirect
            }, 1000);
        } else {
            feedbackMessage.classList.remove('loading');
            feedbackMessage.classList.add('error');
            feedbackMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
