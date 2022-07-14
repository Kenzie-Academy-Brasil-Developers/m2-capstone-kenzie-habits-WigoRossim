import Api from "../controller/api.controller.js";

export default class Modal {


    static modal_habito() {
        const body = document.querySelector("body")
        const div = document.createElement("div")
        div.classList.add("container")
        const formulario = document.createElement("form")
        div.classList.add("form")
        const titulo = document.createElement("h1")
        const labelTitulo = document.createElement("label")
        const inputTitulo = document.createElement("input")
        const labelDescricao = document.createElement("label")
        const descricao = document.createElement("textarea")
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

        labelTitulo.type = "text"
        labelTitulo.id = "title"
        labelTitulo.name = "title"

        inputTitulo.type = "text"
        inputTitulo.id = "title"
        inputTitulo.name = "title"

        labelDescricao.for = ""
        descricao.name = "comment"

        categoria.name = "select"




        button.innerText = "Inserir"
        titulo.innerText = "Criar hábito"
        labelTitulo.innerText = "Titulo"
        inputTitulo.placeholder = "Digitar título"
        labelDescricao.innerText = "Descrição"
        descricao.placeholder = "Digitar descrição"
        labelCategoria.innerText = "Categoria"

        option.innerText = "Selecionar categoria"
        optionCasa.innerText = "Casa"
        optionEstudo.innerText = "Estudos"
        optionLazer.innerText = "Lazer"
        optionTrabalho.innerText = "Trabalho"
        optionSaude.innerText = "Saúde"


        categoria.append(option, optionCasa, optionEstudo, optionLazer, optionTrabalho, optionSaude)
        divSelect.append(categoria)
        formulario.append(titulo, labelTitulo, inputTitulo, labelDescricao, descricao, labelCategoria, divSelect, button);
        div.append(formulario);
        body.append(div);

        // div.style.display = "none"
        console.log(div)
    }

    static async modal_excluirHabito(id) {
        const modal_excluir = document.querySelector(".modal_excluir")
    
        const container = document.createElement("div")
        const modal_info = document.createElement("div")
        const modal_divBotoes = document.createElement("div")
        const botaoFechar = document.createElement("button")
        const h3 = document.createElement("h3")

        const textoPrincipal = document.createElement("h3")
        const span = document.createElement("span")
        const botaoCancelar = document.createElement("button")
        const botaoExcluir = document.createElement("button")

        container.classList.add("container_modal")
        modal_info.classList.add("modalExcluir_info")
        modal_divBotoes.classList.add("modal_divBotoes")
        botaoFechar.classList.add("modal_botaoFechar")
        h3.classList.add("modalExcluir_h3")
        textoPrincipal.classList.add("modalExcluir_textoPrincipal")
        span.classList.add("modalExcluir_span")
        botaoCancelar.classList.add("excluir_botaoCancelar")
        botaoExcluir.classList.add("excluir_botaoExcluir")

        botaoFechar.innerText = "x"
        h3.innerText = "Excluir hábito"
        textoPrincipal.innerText = "Certeza que deseja excluir este hábito?"
        span.innerText = "Após executar essa ação não será possível desfazer"

        botaoCancelar.innerText = "Cancelar"
        botaoExcluir.innerText = "Excluir"

        botaoCancelar.addEventListener("click", (event) => {
            event.preventDefault()
            modal_excluir.classList.add("hidden")
        })

        botaoExcluir.addEventListener("click", async (event) => {
            event.preventDefault()
            await Api.deletarHabito(id)
            location.reload()
        })

        modal_divBotoes.append(botaoCancelar, botaoExcluir)
        modal_info.append(botaoFechar, h3, textoPrincipal, span, modal_divBotoes)
        container.append(modal_info)
        modal_excluir.apppend(container)
    }


    static async modal_editarHabito(id) {
        const options = ["Lazer", "Saúde", "Casa", "Estudo", "Trabalho"]//REVER ESSE AQUI!
        const modal_editar = document.getElementsByClassName("modal_editar")[0]
        const modal_excluir = document.getElementsByClassName("modal_excluir")[0]

        modal_editar.classList.remove("hidden")
        const habitos = await Api.todosHabitos()

        const elemSelecionado = habitos.find((elem) => {
            return elem.habit_id == id
        })
        console.log(elemSelecionado)

        const container = document.createElement("div")
        const modal_info = document.createElement("div")
        const modal_divBotoes = document.createElement("div")
        const div_input = document.createElement("div")
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
        botao_fechar.classList.add("modal_botaoFechar")
        botao_salvar.classList.add("modal_botaoSalvar")
        botao_excluir.classList.add("modal_botaoExcluir")
        div_input.classList.add("div_input")

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
        titulo.value = elemSelecionado.habit_title
        labelDescricao.innerText = "Descrição"
        descricao.value = elemSelecionado.habit_description
        labelCategoria.innerText = "Categoria"
        categoria[0].value = elemSelecionado.habit_category //REVER AQUI!!!!
        console.log(elemSelecionado.habit_category)
        labelStatus.innerText = "Status"


        h3.innerText = "Editar hábito"
        titulo.type = "text"
        status.type = "checkbox"
        botao_excluir.innerText = "Excluir"
        botao_salvar.innerText = "Salvar alterações"


        botao_fechar.addEventListener("click", (event) => {
            event.preventDefault()
            modal_editar.classList.add("hidden")
        })

        botao_excluir.addEventListener("click", async (event) => {
            event.preventDefault()
            modal_editar.classList.add("hidden")
            modal_excluir.classList.remove("hidden")
            //VAI ABRIR OUTRO MODAL 
        })


        modal_divBotoes.append(botao_excluir, botao_salvar)
        form.append(labelTitulo, titulo, labelDescricao, descricao, labelCategoria, categoria, labelStatus, status)
        modal_info.append(botao_fechar, h3, form, modal_divBotoes)
        container.append(modal_info)
        modal_editar.append(container)
    }

}

