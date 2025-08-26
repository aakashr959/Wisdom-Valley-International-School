document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll) library for scroll animations
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true      // Whether animation should only happen once
    });

    // Get form elements
    const admissionsForm = document.getElementById('admissionsForm');
    const gradeSelect = document.getElementById('grade');
    const appointmentForm = document.getElementById('appointmentForm'); // New appointment form
    const feeStructureTableDiv = document.getElementById('feeStructureTable'); // New fee structure table div
    const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Data for Fee Structure
    const feeStructureData = [
        { grade: 'Kindergarten', tuitionFee: '₹ 50,000', annualCharges: '₹ 10,000', total: '₹ 60,000' },
        { grade: 'Grade 1', tuitionFee: '₹ 55,000', annualCharges: '₹ 12,000', total: '₹ 67,000' },
        { grade: 'Grade 2', tuitionFee: '₹ 55,000', annualCharges: '₹ 12,000', total: '₹ 67,000' },
        { grade: 'Grade 3', tuitionFee: '₹ 60,000', annualCharges: '₹ 15,000', total: '₹ 75,000' },
        { grade: 'Grade 4', tuitionFee: '₹ 60,000', annualCharges: '₹ 15,000', total: '₹ 75,000' },
        { grade: 'Grade 5', tuitionFee: '₹ 65,000', annualCharges: '₹ 18,000', total: '₹ 83,000' },
        { grade: 'Grade 6', tuitionFee: '₹ 70,000', annualCharges: '₹ 20,000', total: '₹ 90,000' },
        { grade: 'Grade 7', tuitionFee: '₹ 70,000', annualCharges: '₹ 20,000', total: '₹ 90,000' },
        { grade: 'Grade 8', tuitionFee: '₹ 75,000', annualCharges: '₹ 22,000', total: '₹ 97,000' },
        { grade: 'Grade 9', tuitionFee: '₹ 80,000', annualCharges: '₹ 25,000', total: '₹ 1,05,000' },
        { grade: 'Grade 10', tuitionFee: '₹ 80,000', annualCharges: '₹ 25,000', total: '₹ 1,05,000' },
        { grade: 'Grade 11', tuitionFee: '₹ 90,000', annualCharges: '₹ 30,000', total: '₹ 1,20,000' },
        { grade: 'Grade 12', tuitionFee: '₹ 90,000', annualCharges: '₹ 30,000', total: '₹ 1,20,000' }
    ];

    // Function to generate the fee structure table
    function generateFeeStructureTable() {
        if (!feeStructureTableDiv) return;

        let tableHtml = `
            <table class="table table-hover align-middle">
                <thead>
                    <tr>
                        <th>Grade</th>
                        <th>Tuition Fee (Annual)</th>
                        <th>Annual Charges</th>
                        <th>Total Annual Fee</th>
                    </tr>
                </thead>
                <tbody>
        `;

        feeStructureData.forEach(item => {
            tableHtml += `
                <tr>
                    <td>${item.grade}</td>
                    <td>${item.tuitionFee}</td>
                    <td>${item.annualCharges}</td>
                    <td>${item.total}</td>
                </tr>
            `;
        });

        tableHtml += `
                </tbody>
            </table>
        `;

        feeStructureTableDiv.innerHTML = tableHtml;
    }

    // Call the function to generate the fee table on page load
    generateFeeStructureTable();

    // Dynamically populate grade options for the admissions form
    const grades = ['Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
    grades.forEach(grade => {
        const option = document.createElement('option');
        option.value = grade;
        option.textContent = grade;
        gradeSelect.appendChild(option);
    });

    // Function to show feedback modal with dynamic content
    function showFeedback(iconClass, iconHtml, messageText, isSuccess = false) {
        feedbackIcon.className = ''; // Clear previous classes
        feedbackIcon.classList.add(iconClass);
        feedbackIcon.innerHTML = iconHtml;
        feedbackMessage.textContent = messageText;

        // Optionally set text color based on success/error
        if (isSuccess) {
            feedbackMessage.style.color = 'var(--success-color)';
        } else if (iconClass.includes('error')) {
            feedbackMessage.style.color = 'var(--danger-color)';
        } else {
            feedbackMessage.style.color = 'var(--dark-color)';
        }

        feedbackModal.show();
    }

    // Handle admissions form submission
    admissionsForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Basic client-side validation
        const studentName = document.getElementById('student-name').value;
        const dob = document.getElementById('dob').value;
        const parentName = document.getElementById('parent-name').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;

        if (!studentName || !dob || !parentName || !contact || !email) {
            showFeedback('error', '<i class="bi bi-x-circle-fill"></i>', 'Please fill in all required fields for admission.');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFeedback('error', '<i class="bi bi-exclamation-triangle-fill"></i>', 'Please enter a valid email address for admission.');
            return;
        }

        // Show loading state in modal
        showFeedback('loading', '<i class="bi bi-arrow-clockwise"></i>', 'Submitting your admission application...', false);

        // Simulate form submission to a backend API
        try {
            const formData = new FormData(admissionsForm);
            const submissionData = {};
            formData.forEach((value, key) => {
                submissionData[key] = value;
            });

            console.log('Simulating admission form submission:', submissionData);

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate a successful response
            showFeedback('success', '<i class="bi bi-check-circle-fill"></i>', 'Admission application submitted successfully! We will contact you shortly.', true);

            admissionsForm.reset(); // Clear form fields on successful submission

        } catch (error) {
            console.error('Admission submission error:', error);
            showFeedback('error', '<i class="bi bi-x-circle-fill"></i>', 'There was an error submitting your admission application. Please try again.');
        }
    });

    // Handle appointment form submission
    if (appointmentForm) { // Ensure the form exists before adding listener
        appointmentForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            // Basic client-side validation
            const apptName = document.getElementById('appointment-name').value;
            const apptEmail = document.getElementById('appointment-email').value;
            const apptPhone = document.getElementById('appointment-phone').value;
            const apptDate = document.getElementById('appointment-date').value;
            const apptTime = document.getElementById('appointment-time').value;

            if (!apptName || !apptEmail || !apptPhone || !apptDate || !apptTime) {
                showFeedback('error', '<i class="bi bi-x-circle-fill"></i>', 'Please fill in all required fields for the appointment.');
                return;
            }

            // Simple email validation for appointment form
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(apptEmail)) {
                showFeedback('error', '<i class="bi bi-exclamation-triangle-fill"></i>', 'Please enter a valid email address for your appointment.');
                return;
            }

            // Show loading state in modal
            showFeedback('loading', '<i class="bi bi-arrow-clockwise"></i>', 'Booking your appointment...', false);

            // Simulate appointment booking to a backend API
            try {
                const formData = new FormData(appointmentForm);
                const appointmentData = {};
                formData.forEach((value, key) => {
                    appointmentData[key] = value;
                });

                console.log('Simulating appointment booking:', appointmentData);

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Simulate a successful response
                showFeedback('success', '<i class="bi bi-check-circle-fill"></i>', 'Appointment booked successfully! We look forward to seeing you.', true);

                appointmentForm.reset(); // Clear form fields on successful submission

            } catch (error) {
                console.error('Appointment booking error:', error);
                showFeedback('error', '<i class="bi bi-x-circle-fill"></i>', 'There was an error booking your appointment. Please try again.');
            }
        });
    }
});
