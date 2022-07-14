import Modal from "../models/habito.models.js"
import Api from "./api.controller.js"

Modal.modal_habito()

export default class Tabela {
    // static tabela = document.querySelector("tbody")

    static cabecalhoTabela(){
        const tabela = document.querySelector(".tabela")
       

        const tr = document.createElement("tr")

        const thStatus = document.createElement("th")
        const thTitulo = document.createElement("th")
        const thDescricao = document.createElement("th")
        const thCategoria = document.createElement("th")
        const thEditar = document.createElement("th")

        thStatus.classList.add("status_tabela")
        thStatus.innerText = "Status"

        thTitulo.classList.add("titulo_div")
        thTitulo.innerText = "Título"

        thDescricao.classList.add("descricao_tabela")
        thDescricao.innerText = "Descrição"

        thCategoria.classList.add("categoria_tabela")
        thCategoria.innerText = "Categoria"

        thEditar.classList.add("editar_tabela")
        thEditar.innerText = "Editar"

        tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
        tabela.append(tr)

        return tabela
    }

    static async renderizacao(data) {
        
        const habitos = data

        const tbody = this.cabecalhoTabela()
        console.log(tbody)

        habitos.forEach((elem) => {
            const tr = document.createElement("tr")
            const tdCheckbox = document.createElement("td")
            const checkboxInput = document.createElement("input")
            const tdTitulo = document.createElement("td")
            const tdDescricao = document.createElement("td")
            const tdCategoria = document.createElement("td")
            const tdEditar = document.createElement("td")
            const botaoCategoria = document.createElement("button")
            const botaoEditar = document.createElement("button")
            const img = document.createElement("img")

            tdCheckbox.classList.add("checkbox")
            tdTitulo.classList.add("texto_div")
            tdDescricao.classList.add("descricao_texto")
            tdCategoria.classList.add("categoria_texto")
            botaoCategoria.classList.add("botao_texto")
            img.classList.add("reticencias")
            botaoEditar.classList.add("botao_editar")

            checkboxInput.type = "checkbox"
            img.src = "../assets/img/reticencias.png"

            tr.id = elem.habit_id
            tdTitulo.innerText = elem.habit_title
            tdDescricao.innerText = elem.habit_description
            botaoCategoria.innerText = elem.habit_category

            botaoEditar.append(img)
            tdEditar.append(botaoEditar)
            tdCheckbox.append(checkboxInput)
            tdCategoria.append(botaoCategoria)
            tr.append(tdCheckbox, tdTitulo, tdDescricao, tdCategoria, tdEditar)
            // this.tabela.append(tr)
            tbody.append(tr)
        })
    }

    static async filtraHabitosConcluidos(){
        
        const habitos = await Api.todosHabitos()

        const pai = document.querySelector(".tabela")

        const buttonConcluidos = document.querySelector(".concluidos")
        buttonConcluidos.addEventListener('click', async () =>{
            
            pai.innerHTML = ""

            let concluidos = []
            
            for(let i = 0; i < habitos.length; i++){
                               
                if(habitos[i].habit_status === true){
                    concluidos.push(habitos[i])
                } 
                
            }
            await Tabela.renderizacao(concluidos)
            

            
        })

    }

    static async mostraTodosHabitos(){

        const habitos = await Api.todosHabitos()

        const pai = document.querySelector(".tabela")

        const buttonTodos = document.querySelector(".todos")
        buttonTodos.addEventListener('click', async (event) => {
            pai.innerHTML = ""

            await Tabela.renderizacao(habitos)
        })

    }
}

export class Habito {
    static async criarHabito() {

        const inputTitulo = document.getElementsByName("title")[0]
        const inputDescricao = document.getElementsByName("comment")[0]
        const inputCategoria = document.getElementsByName("select")[0]
        const button = document.getElementsByClassName("botao_inserir")[0]
        const div = document.querySelector(".container")

        button.addEventListener("click", async (event) => {
            event.preventDefault()
            console.log("oi")

            const data = {

                "habit_title": `${inputTitulo.value}`,
                "habit_description": `${inputDescricao.value}`,
                "habit_category": `${inputCategoria.value}`,
            }


            const newHabit = await Api.criarHabito(data)
            console.log(newHabit)
            div.style.display = "flex"
            // location.reload()
        })
    }
}

Tabela.filtraHabitosConcluidos()
Tabela.mostraTodosHabitos()
Tabela.cabecalhoTabela()

Habito.criarHabito()






