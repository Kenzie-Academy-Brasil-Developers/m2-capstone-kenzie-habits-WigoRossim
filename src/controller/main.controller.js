import Habito from "../models/habito.models.js"
import Api from "./api.controller.js"


//const newLogin = await Api.login({
//    "email": "grupo1Caique@mail.com",
//    "password": "41c6bf513bb94e29da99477a699abeb5"
//})
//
//const novoHabito =  await Api.criarHabito({
//    "habit_title": "dwada",
//    "habit_description": "dddw",
//    "habit_category": "saude"
//})

console.log(novoHabito)

const inputTitulo = document.getElementsByName("title")[0]
const inputDescricao = document.getElementsByName("comment")[0]
const inputCategoria = document.getElementsByName("select")[0]
const button = document.querySelector("button")
const div = document.querySelector(".container")

button.addEventListener("click", async (event) =>{
    event.preventDefault()


    const data = {
        
        "habit_title": `${inputTitulo.value}`,
        "habit_description": `${inputDescricao.value}`,
        "habit_category": `${inputCategoria.value}`,
    }
   

    const newHabit = await Api.criarHabito(data)
    console.log(newHabit)
    div.style.display = "flex"
})


