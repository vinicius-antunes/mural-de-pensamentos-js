const URL_BASE = "http://localhost:3000";

const api = {
    async buscarPensamentos() {
        const response = await axios.get(`${URL_BASE}/pensamentos`);
        return response.data;
    },

    async salvarUmPensamento(pensamento) {
        const response = await axios.post(
            `${URL_BASE}/pensamentos`,
            pensamento
        );

        return response.data;
    },

    async buscarPensamentosPorId(id) {
        const response = await axios.get(
            `${URL_BASE}/pensamentos/${id}`
        );

        return response.data;
    },

    async editarPensamento(pensamento) {
        const response = await axios.put(
            `${URL_BASE}/pensamentos/${pensamento.id}`,
            pensamento
        );

        return response.data;
    },

    async excluirPensamento(id) {
        await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    }
};

export default api;