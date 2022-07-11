export default class Api {
    static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))

    static async login(dataLogin) {
        const url = "https://habits-kenzie.herokuapp.com/api/userLogin"
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataLogin)
        })
            .then(res => res.json())
            .then((res) => {
                localStorage.setItem("@kenzie-habits:token", JSON.stringify(res.token))
                localStorage.setItem("@kenzie-habits:dados", JSON.stringify(res.response))

                return res
            })
            .catch(err => err)

        return resposta
    }

    static async atualizarPerfil(data) {
        const url = "https://habits-kenzie.herokuapp.com/api/user/profile"
        const resposta = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return resposta
    }

    static async criarHabito(data) {
        const url = "https://habits-kenzie.herokuapp.com/api/habits"
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return resposta
    }

    static async todosHabitos() {
        const url = "https://habits-kenzie.herokuapp.com/api/habits"
        const resposta = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return resposta
    }

    static async habitoPorCategoria(categoria) {
        const url = `https://habits-kenzie.herokuapp.com/api/habits/category/${categoria}`
        const resposta = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return resposta
    }

    static async editarHabito(data, idHabito) {
        const url = `https://habits-kenzie.herokuapp.com/api/habits/${idHabito}`
        const resposta = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return resposta
    }

    static async finalizarHabito(idHabito) {
        const url = `https://habits-kenzie.herokuapp.com/api/habits/complete/${idHabito}`
        const resposta = await fetch(url, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err)

        return resposta
    }

    static async deletarHabito(idHabito) {
        const url = `https://habits-kenzie.herokuapp.com/api/habits/${idHabito}`
        const resposta = await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
            .then(res => res.json())
            .catch(err => err)
            return resposta
    }

}