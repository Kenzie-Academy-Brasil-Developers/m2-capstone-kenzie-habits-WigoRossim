import Api from "./api.controller.js"


export default class headerController {

    static async perfilFotoNome() {
        const responseLogin = await Api.login()
        const div = document.querySelector(".caixa_usuario")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const h2 = document.createElement("h2")
        img.src = responseLogin.usr_image
        img.alt = responseLogin.usr_name
        h2.innerText = responseLogin.usr_name
        figure.append(img)
        div.append(figure, h2)
    }

    static dropDownMenu() {
        const dropdownMenu = document.querySelector(".dropdown_menu")
        const caixaEditarPerfil = document.createElement("div")
        const spanIconeUser = document.createElement("span")
        const btnEditarUser= document.createElement("button")
        const caixaSair = document.createElement("div")
        const spanIconSair = document.createElement("span")
        const btnSair= document.createElement("button")
        caixaEditarPerfil.classList.add("botao_dropdown_menu")
        caixaSair.classList.add("botao_dropdown_menu")
        spanIconSair.innerHTML = "<i class=\"fa-solid fa-arrow-left fa-2x\"></i>"
        spanIconeUser.innerHTML= "<i class=\"fa-solid fa-user fa-2x\"></i>"
        btnEditarUser.innerText = "Editar Perfil"
        btnSair.innerText = "Sair do app"
        caixaEditarPerfil.append(spanIconeUser, btnEditarUser)
        caixaSair.append(spanIconSair, btnSair)
        dropdownMenu.append(caixaEditarPerfil, caixaSair)
    }

    static async editarPerfil() {
        
    }

}
