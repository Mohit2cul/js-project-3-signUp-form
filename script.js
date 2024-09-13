document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('cardName').textContent = `Name: ${name}`;
    document.getElementById('cardEmail').textContent = `Email: ${email}`;

    document.getElementById('card').classList.remove('hidden');

    document.getElementById('signupForm').reset();
});
