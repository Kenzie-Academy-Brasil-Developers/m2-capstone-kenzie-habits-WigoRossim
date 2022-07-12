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
        btnEditarUser.classList.add("btn_abrir_edicao")

        spanIconSair.innerHTML = "<i class=\"fa-solid fa-arrow-left fa-2x\"></i>"
        spanIconeUser.innerHTML= "<i class=\"fa-solid fa-user fa-2x\"></i>"
        btnEditarUser.innerText = "Editar Perfil"
        btnSair.innerText = "Sair do app"

        caixaEditarPerfil.append(spanIconeUser, btnEditarUser)
        caixaSair.append(spanIconSair, btnSair)
        dropdownMenu.append(caixaEditarPerfil, caixaSair)
    }

    
    static async criarPerfilEdicao() {
        const responseDados = JSON.parse(localStorage.getItem("@kenzie-habits:token"))

        const body = document.querySelector("body")
        const caixaEditarPefil = document.createElement("div")
        const form = document.createElement("form")
        const caixaFecharEdicao = document.createElement("div")
        const h2 = document.createElement("h2")
        const btnFechar = document.createElement("button")
        const labelNome = document.createElement("label")
        const inputNome = document.createElement("input")
        const labelUrl = document.createElement("label")
        const inputUrl = document.createElement("input")
        const btnConcluir = document.createElement("button")
        
        caixaEditarPefil.classList.add("caixa_editar_perfil")
        form.classList.add("form_edit_perfil")
        caixaFecharEdicao.classList.add("caixa_titulo_fechar")
        btnConcluir.classList.add("btn_edit_perfil")

        h2.innerText = "Editar Perfil"
        btnFechar.innerHTML = `<i class="fa-solid fa-x fechar_editar_perfil"></i>`
        labelNome.for = "nome_user"
        labelNome.innerText = "Nome"
        inputNome.type = "text"
        inputNome.name = "nome_user"
        inputNome.id = "nome_user"
        inputNome.value = responseDados.usr_name
        inputNome.disabled

        labelUrl.for = "url_avatar_perfil"
        labelUrl.innerText = "URL da imagem do perfil"
        inputUrl.type = "text"
        inputUrl.name = "url"
        inputUrl.id = "url_avatar_perfil"
        inputUrl.placeholder = "https://imagem.com"

        btnConcluir.type = "submit"
        btnConcluir.innerText = "Salvar Alterações"

        caixaFecharEdicao.append(h2, btnFechar)
        form.append(caixaFecharEdicao, labelNome, inputNome, labelUrl, inputUrl, btnConcluir)
        caixaEditarPefil.append(form)
        body.append(caixaEditarPefil)
    }

    static async abrirEditarPerfil() {
        const botaoEditarPerfil = document.querySelector(".btn_abrir_edicao")
        const modalEditarPerfil = document.querySelector(".caixa_editar_perfil")

        botaoEditarPerfil.addEventListener("click", (event) => {
            event.preventDefault()
            modalEditarPerfil.classList.add("form_edit_perfil_active")
        })
    }
    static fecharEditarPerfil() {
        const botaoFecharEdicao = document.querySelector(".fechar_editar_perfil")
        const modalEditarPerfil = document.querySelector(".caixa_editar_perfil")

        botaoFecharEdicao.addEventListener("click", (event) => {
            event.preventDefault()
            modalEditarPerfil.classList.remove("form_edit_perfil_active")
        })

    }



}