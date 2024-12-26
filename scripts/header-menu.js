// Aguardar o carregamento completo do documento
window.addEventListener('scroll', function() {
    var toggle = document.getElementById('menu-toggle');

    // Verifica se a rolagem chegou ao topo do menu
    if (window.scrollY >= 450.00) {
        toggle.style.position = 'block'
    } else {
        toggle.style.position = 'none'
    }
});