document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form elements
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').files[0];
    const rank = document.getElementById('rank').value;
    const idNumber = document.getElementById('id-number').value;
    
    // Simple validation
    const idPattern = /^#\d{6}$/;
    let message = '';

    if (!name || !photo || !rank || !idPattern.test(idNumber)) {
        message = 'Please fill out all fields correctly.';
    } else {
        message = 'Form submitted successfully!';
    }

    // Show message
    document.getElementById('message').textContent = message;
});
