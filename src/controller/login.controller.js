import Api from "./api.controller.js";

export default class Login{

    static popupErr(){
        const div = document.querySelector('.container');
                
                const divPopUpErr = document.createElement('div');
                divPopUpErr.classList.add('popup_err');
                
                const closePopUp = document.createElement('p');
                closePopUp.innerText ="x"
              
                const popUpContent = document.createElement('div');
                popUpContent.classList.add('popup_conteudo');

                const textErr = document.createElement('h3');
                textErr.innerText = "Email ou senha incorretos!"

                popUpContent.append(textErr);
                divPopUpErr.append(closePopUp, popUpContent);
                div.append(divPopUpErr);

                divPopUpErr.addEventListener('click', (event) => {
                    divPopUpErr.style.display = "none"
                    location.reload()
                })
    }

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
                window.location.href = "./src/views/main.views.html"
            }else{
                localStorage.removeItem("@kenzie-habits:token");
                localStorage.removeItem("@kenzie-habits:dados")

                this.popupErr()
            }     
        })
    }
}