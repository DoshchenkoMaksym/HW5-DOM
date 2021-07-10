let buttonSubmit = document.getElementById('submit');
let inputName = document.getElementById('input-name');
let inputPassword = document.getElementById('input-password');
let resultName = document.getElementsByClassName('result__name');
let resultPassword = document.getElementsByClassName('result__password');
let resultClass = document.getElementsByClassName('result');

function local() {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('password', inputPassword.value);
};

function show() {
    if (localStorage.name && localStorage.password) {
        resultClass[0].classList.add("result__down")
        resultName[0].innerHTML = `Пользователь ввёл имя: ${localStorage.getItem('name')}`;
        resultPassword[0].innerHTML = `Пользователь ввёл пароль: ${localStorage.getItem('password')}`;
    } else if (!localStorage.name && !localStorage.password) {
        resultClass[0].classList.remove("result__down");
    };
};

buttonSubmit.addEventListener("click", () => {
    local(inputName, inputPassword);
    show(resultName, resultPassword);
});

