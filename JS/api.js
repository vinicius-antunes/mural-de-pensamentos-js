const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() {
        try {
          const response = await fetch(`${URL_BASE}/pensamentos`)  
          return await response.json()
        } catch (error) {
            alert("Erro ao buscar pensamentos")
            throw error
        }
    },
    async salvarUmPensamento(pensamento) {
        try {
          const response = await fetch(`${URL_BASE}/pensamentos`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pensamento)
            
          })  
          return await response.json()
        } catch (error) {
            alert("Erro ao salvar pensamentos")
            throw error
        }
    },
    async buscarPensamentosPorId(id) {
        try {
          const response = await fetch(`${URL_BASE}/pensamentos`)  
          return await response.json()
        } catch (error) {`${URL_BASE}/pensamentos`
            alert("Erro ao buscar pensamentos")
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
          const response = await fetch(`${URL_BASE}/pensamentos`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pensamento)
            
          })  
          return await response.json()
        } catch (error) {
            alert("Erro ao editar pensamentos")
            throw error
        }
    },

    async excluirPensamento(id) {
            try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: "DELETE"
            })
            } catch (error) {
                alert("Erro ao excluir pensamentos")
                throw error
            }
        }
    }
export default api;