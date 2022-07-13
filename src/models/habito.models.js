import Api from "../controller/api.controller.js";

export default class Modal{

    
    static modal_habito(){
    const body = document.querySelector("body")
    const div = document.createElement("div")
    div.classList.add("container")
    const formulario = document.createElement("form")
    div.classList.add("form")
    const titulo = document.createElement("h1")
    const labelTitulo =  document.createElement("label")
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

    option.innerText =  "Selecionar categoria"
    optionCasa.innerText =   "Casa"
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
} 
