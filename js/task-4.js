const form = document.querySelector("form");

form.addEventListener("submit", event => {
    // ...
});

function handleSubmit(event) {
    event.preventDefault();

    const emailInput = event.currentTarget.elements.email;
    const passwordInput = event.currentTarget.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData);

    form.reset();
}


