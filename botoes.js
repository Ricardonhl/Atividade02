document.addEventListener('DOMContentLoaded', () => {
    console.log("Página Treine.me carregada com sucesso!");

    const btn = document.querySelector('.button');
    btn.addEventListener('click', () => {
        console.log("Usuário clicou para iniciar o treino.");
    });
});