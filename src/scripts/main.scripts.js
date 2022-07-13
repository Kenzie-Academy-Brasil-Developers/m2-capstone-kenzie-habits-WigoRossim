import headerController from "../controller/header.controller.js"
import Modal from "../models/habito.models.js"
import Tabela from "../controller/main.controller.js"



headerController.perfilFotoNome()
headerController.perfilDropDownMenu()
headerController.dropDownMenu()
headerController.criarModalPerfilEdicao()
headerController.abrirEditarPerfil()
headerController.fecharEditarPerfil()
headerController.sairDoApp()
headerController.editarPerfil()

Tabela.renderizacao()



