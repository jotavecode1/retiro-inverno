const form = document.querySelector("form");
const pagamentoBox = document.querySelector(".pagamento-box");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const action = form.getAttribute("action");

  try {
    const response = await fetch(action, {
      method: "POST",
      body: formData,
    });

    const text = await response.text();

    alert("✅ Inscrição feita com sucesso!");

    // Esconde o formulário
    form.style.display = "none";

    // Mostra a seção de pagamento
    pagamentoBox.style.display = "block";

    form.reset();
  } catch (error) {
    alert("❌ Erro ao concluir inscrição: " + error);
  }
});
