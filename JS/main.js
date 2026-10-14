import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () =>{
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    const botaoCancelar = document.getElementById("botao-cancelar")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
    botaoCancelar.addEventListener("click", manipularCancelamento)
})
function manipularCancelamento() {
  ui.limparFormulario();
}

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

try {
    if (id) {
        await api.editarPensamento({ id, conteudo, autoria });
    } else {
        await api.salvarUmPensamento({ conteudo, autoria });
    }

    ui.limparFormulario();
    await ui.renderizarPensamentos();
} catch (error) {
    console.error(error);
    alert("Não foi possível salvar o pensamento.");
}
    
}