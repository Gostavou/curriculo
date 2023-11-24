
const conteudoEsquerda = document.querySelector('.conteudo-esquerda');

conteudoEsquerda.addEventListener('mouseenter', () => {
    conteudoEsquerda.classList.add('expandido');
    conteudoDireita.classList.add('contraido');
}); 

conteudoEsquerda.addEventListener('mouseleave', () => {
    conteudoEsquerda.classList.remove('expandido');
    conteudoDireita.classList.remove('contraido');
});

document.querySelector('.conteudo-esquerda').addEventListener('click', function () {
    this.classList.toggle('expandido');
});

conteudoEsquerda.addEventListener('mouseenter', () => {
    conteudoEsquerda.classList.add('ativo');
});

conteudoEsquerda.addEventListener('mouseleave', () => {
    conteudoEsquerda.classList.remove('ativo');
});

document.querySelector('.conteudo-esquerda').addEventListener('click', function () {
    this.classList.toggle('expandido');
});