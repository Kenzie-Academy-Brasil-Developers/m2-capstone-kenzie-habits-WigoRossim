import Api from "../controller/api.controller.js";

export default class Modal {


    static modal_habito() {
        const body = document.querySelector("body")
        const divGlobal = document.createElement("div")
        divGlobal.classList.add("global")
        const divBackground = document.createElement("div")
        divBackground.classList.add("background")
        const div = document.createElement("div")
        div.classList.add("container")
        const buttonClose = document.createElement("button")
        buttonClose.classList.add("button_close")
        const formulario = document.createElement("form")
        div.classList.add("form")
        const titulo = document.createElement("h1")
        const labelTitulo = document.createElement("label")
        const inputTitulo = document.createElement("input")
        inputTitulo.classList.add("placeholder")
        const labelDescricao = document.createElement("label")
        const descricao = document.createElement("textarea")
        descricao.classList.add("placeholder")
        const labelCategoria = document.createElement("label")
        const categoria = document.createElement("select")
        const divSelect = document.createElement("div")
        divSelect.classList.add("divSelect")
        const option = document.createElement("option")
        option.classList.add("option")
        const optionCasa = document.createElement("option")
        const optionEstudo = document.createElement("option")
        const optionLazer = document.createElement("option")
        const optionTrabalho = document.createElement("option")
        const optionSaude = document.createElement("option")
        const button = document.createElement("button")
        button.classList.add("botao_inserir")

        descricao.rows = "4"
        descricao.cols = "28"
        descricao.style.resize = "none"

        labelTitulo.type = "text"
        labelTitulo.id = "title"
        labelTitulo.name = "title"

        inputTitulo.type = "text"
        inputTitulo.id = "title"
        inputTitulo.name = "title"

        labelDescricao.for = ""
        descricao.name = "comment"

        categoria.name = "select"



        buttonClose.innerHTML = `<i class="fa-solid fa-x fechar_editar_perfil"></i>`
        button.innerText = "Inserir"
        titulo.innerText = "Criar hábito"
        labelTitulo.innerText = "Titulo"
        inputTitulo.placeholder = "Digitar título"
        labelDescricao.innerText = "Descrição"
        descricao.placeholder = "Digitar descrição"
        labelCategoria.innerText = "Categoria"

        option.innerText = "Selecionar categoria"
        optionCasa.innerText = "casa"
        optionEstudo.innerText = "estudos"
        optionLazer.innerText = "lazer"
        optionTrabalho.innerText = "trabalho"
        optionSaude.innerText = "saude"   


        categoria.append(option, optionCasa, optionEstudo, optionLazer, optionTrabalho, optionSaude)
        divSelect.append(categoria)
        formulario.append(titulo, labelTitulo, inputTitulo, labelDescricao, descricao, labelCategoria, divSelect, button);
        div.append( formulario, buttonClose);
        divGlobal.append(divBackground, div)
        body.append(divGlobal);

        divGlobal.style.display = "none"
    }

    static async modal_excluirHabito(id) {
        const modal_excluir = document.querySelector(".modal_excluir")
        const modal_editar = document.querySelector(".modal_editar")


        const container = document.createElement("div")
        const modal_info = document.createElement("div")
        const modal_divBotoes = document.createElement("div")
        const modal_texto = document.createElement("div")
        const modal_textoPrincipal = document.createElement("div")
        const modal_titulo = document.createElement("div")
        const botaoFechar = document.createElement("button")
        const h3 = document.createElement("h3")

        const textoPrincipal = document.createElement("h3")
        const span = document.createElement("span")
        const botaoCancelar = document.createElement("button")
        const botaoExcluir = document.createElement("button")

        container.classList.add("container_modal")
        modal_info.classList.add("modalExcluir_info")
        modal_divBotoes.classList.add("modalExcluir_divBotoes")
        botaoFechar.classList.add("modalExcluir_botaoFechar")
        h3.classList.add("modalExcluir_h3")
        textoPrincipal.classList.add("modalExcluir_textoPrincipal")
        span.classList.add("modalExcluir_span")
        botaoCancelar.classList.add("excluir_botaoCancelar")
        botaoExcluir.classList.add("excluir_botaoExcluir")
        modal_texto.classList.add("modalExcluir_divTexto")
        modal_textoPrincipal.classList.add("modalExcluir_divTextoMain")
        modal_titulo.classList.add("modalExcluir_titulo")

        botaoFechar.innerText = "X"
        h3.innerText = "Excluir hábito"
        textoPrincipal.innerText = "Certeza que deseja excluir este hábito?"
        span.innerText = "Após executar essa ação não será possível desfazer"

        botaoCancelar.innerText = "Cancelar"
        botaoExcluir.innerText = "Sim, excluir este hábito"

        botaoFechar.addEventListener("click", (event) => {
            event.preventDefault()
            modal_excluir.classList.add("hidden")
        })

        botaoExcluir.addEventListener("click", async (event) => {
            event.preventDefault()
            await Api.deletarHabito(id)
            location.reload()
        })

        botaoCancelar.addEventListener("click", (event)=>{
            event.preventDefault()
            modal_excluir.classList.add("hidden")
            modal_editar.classList.remove("hidden")
        })

        modal_divBotoes.append(botaoCancelar, botaoExcluir)
        modal_textoPrincipal.append(textoPrincipal, span)
        modal_titulo.append(h3, botaoFechar)
        modal_texto.append(modal_titulo, modal_textoPrincipal)
        modal_info.append(modal_texto, modal_divBotoes)
        container.append(modal_info)
        modal_excluir.appendChild(container)
    }


    static async modal_editarHabito(id) {
        const options = ["Lazer", "Saúde", "Casa", "Estudo", "Trabalho"]
        const modal_editar = document.getElementsByClassName("modal_editar")[0]
        const modal_excluir = document.getElementsByClassName("modal_excluir")[0]

        modal_editar.classList.remove("hidden")
        const habitos = await Api.todosHabitos()

        const elemSelecionado = habitos.find((elem) => {
            return elem.habit_id == id
        })

        const container = document.createElement("div")
        const modal_info = document.createElement("div")
        const modal_divBotoes = document.createElement("div")
        const modal_divConteudoPrincipal = document.createElement("div")
        const modal_divCabecalho = document.createElement("div")
        const modaldiv_status = document.createElement("div")
        const form = document.createElement("form")

        const botao_excluir = document.createElement("button")
        const botao_salvar = document.createElement("button")
        const botao_fechar = document.createElement("button")

        const h3 = document.createElement("h3")

        const labelTitulo = document.createElement("label")
        const titulo = document.createElement("input")
        const labelDescricao = document.createElement("label")
        const descricao = document.createElement("textarea")
        const labelCategoria = document.createElement("label")
        const categoria = document.createElement("select")
        const labelStatus = document.createElement("label")
        const status = document.createElement("input")

        container.classList.add("container_modal")
        modal_info.classList.add("modal_info")
        modal_divBotoes.classList.add("modal_divBotoes")
        modal_divCabecalho.classList.add("modal_divCabecalho")
        modal_divConteudoPrincipal.classList.add("modal_divConteudoPrincipal")
        botao_fechar.classList.add("modal_botaoFechar")
        botao_salvar.classList.add("modal_botaoSalvar")
        botao_excluir.classList.add("modal_botaoExcluir")
        modaldiv_status.classList.add("modaldiv_status")

        titulo.classList.add("modalEditar_titulo")
        descricao.classList.add("modalEditar_descricao")
        categoria.classList.add("modalEditar_categoria")
        status.classList.add("modalEditar_status")
        form.classList.add("modalEditar_form")

        options.forEach((elem) => {
            const option = document.createElement("option")
            option.value = elem
            option.innerText = elem
            categoria.append(option)
        })

        botao_fechar.innerText = "X"
        labelTitulo.innerText = "Titulo"
        labelTitulo.for = "habit_title"
        titulo.name = "habit_title"
        titulo.required = true
        titulo.value = elemSelecionado.habit_title

        labelDescricao.innerText = "Descrição"
        labelDescricao.for = "habit_description"
        descricao.name = "habit_description"
        descricao.required = true
        descricao.value = elemSelecionado.habit_description

        labelCategoria.innerText = "Categoria"
        labelCategoria.for = "habit_category"
        categoria.name = "habit_category"
        categoria.required = true

        labelStatus.innerText = "Status"
        labelStatus.for = "habit_status"
        status.name = "habit_status"


        h3.innerText = "Editar hábito"
        titulo.type = "text"
        status.type = "checkbox"
        botao_excluir.innerText = "Excluir"
        botao_salvar.innerText = "Salvar alterações"

        const data = {}

        botao_fechar.addEventListener("click", (event) => {
            event.preventDefault()
            modal_editar.classList.add("hidden")

        })

        botao_excluir.addEventListener("click", (event) => {
            event.preventDefault()
            this.modal_excluirHabito(id)
            modal_editar.classList.add("hidden")
            modal_excluir.classList.remove("hidden")
            modal_excluir.classList.add("animacao")
        })

        botao_salvar.addEventListener("click", async(event) => {
            event.preventDefault()

            const formSpread = [...form]

            formSpread.forEach((input) => {
                data[input.name] = input.value
            })
            await Api.editarHabito(data, id)
            location.reload()
        })

        modal_divBotoes.append(botao_excluir, botao_salvar)
        modal_divCabecalho.append(h3, botao_fechar)
        modaldiv_status.append(labelStatus, status)
        form.append(labelTitulo, titulo, labelDescricao, descricao, labelCategoria, categoria)
        modal_divConteudoPrincipal.append(modal_divCabecalho, form, modaldiv_status)
        modal_info.append(modal_divConteudoPrincipal, modal_divBotoes)
        container.append(modal_info)
        modal_editar.append(container)
    }

}