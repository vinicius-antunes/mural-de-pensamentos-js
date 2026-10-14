const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentosPorId(id) {
    const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
    return await response.json();
},

async editarPensamento(pensamento) {
    const response = await fetch(
        `${URL_BASE}/pensamentos/${pensamento.id}`,
        {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pensamento)
        }
    );

    return await response.json();
},

async excluirPensamento(id) {
    await fetch(`${URL_BASE}/pensamentos/${id}`, {
        method: "DELETE"
    });
}
    }
export default api;