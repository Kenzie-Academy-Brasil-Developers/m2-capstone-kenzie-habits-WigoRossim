import Api from "./api.controller.js";

export default class Login{

    static dadosLogin(){
        const buttonLogin = document.querySelector('.button_login');
        buttonLogin.addEventListener('click', async (event) => {
            event.preventDefault();
            const data = {}
            const formValues = [...event.target.form]
            formValues.forEach((input) => {
                if(input.value !== ""){
                    data[input.name] = input.value
                }
            })            
            
            await Api.login(data)

            if(localStorage.getItem("@kenzie-habits:token") !== 'undefined' && localStorage.getItem("@kenzie-habits:dados") !== 'undefined'){
                window.location.href = '../views/main.views.html'
            }     
        })
    }
}