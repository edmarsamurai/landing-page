document.addEventListener('DOMContentLoaded', function() {
    // Aqui você pode adicionar efeitos de movimento, animações ou outras funcionalidades JS.
    // Por exemplo, uma animação simples para o botão na hero section.
    const heroBtn = document.querySelector('.hero .btn');
    heroBtn.addEventListener('mouseover', function() {
        heroBtn.style.transform = 'scale(1.1)';
    });
    heroBtn.addEventListener('mouseout', function() {
        heroBtn.style.transform = 'scale(1)';
    });
});
