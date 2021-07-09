let buttonSubmit = document.getElementsByClassName('form__inner-submit');
let inputName = document.getElementsByClassName('form__inner-name');
let inputPassword = document.getElementsByClassName('form__inner-password');
let resultName = document.getElementsByClassName('result__name');
let resultPassword = document.getElementsByClassName('result__password');
let resultClass = document.getElementsByClassName('result');
function local() {
    localStorage.setItem('name', inputName[0].value);
    localStorage.setItem('password', inputPassword[0].value);
};
function show() {
    if(localStorage.name && localStorage.password){
        resultClass[0].classList.add("result__down")
        resultName[0].innerHTML = `Пользователь ввёл имя: ${localStorage.getItem('name')}`;;
        resultPassword[0].innerHTML = `Пользователь ввёл пароль: ${localStorage.getItem('password')}`;
    } else if(!localStorage.name && !localStorage.password) {
        resultClass[0].classList.remove("result__down")
    };
    
};
buttonSubmit[0].addEventListener("click", () => {
    local(inputName, inputPassword)
});
buttonSubmit[0].addEventListener("click", () => {
    show(resultName, resultPassword)
});

