const container = document.getElementById('container');
const RegisterBtn = document.getElementById('register');
const LoginBtn = document.getElementById('login');

RegisterBtn.addEventListener('click', () => {
    container.classList.add("active");
});

LoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
