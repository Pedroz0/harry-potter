// Objetivo 1 - quando passar o mouse em cima do personagem da listagem, deve ficar selecionado.

// Passo 1 - pegar os personagens no JavaScript verificando quando passar o mouse sobre eles.

const personagens = document.querySelectorAll('.personagem');

// Passo 2 - adicionar a classe selecionado no personagem quando passar o mouse em cima.

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

// Passo 3 - verificar se ja existe um personagem selecionado, caso sim, remover a selecao dele.        
             

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

// Objetivo 2 - quando passar o mouse em cima do personagem, trocar a foto, o nome e a descricao do personagem grande.

// Passo 1 - pegar o elemento do personagem grande para adicionar as informacoes nele.

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

// Passo 2 - alterar a imagem do personagem grande

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./Images/${idPersonagem}-corpo.png`;

// Passo 3 - Alterar o nome do personagem grande.

        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name');

// Passo 4 - Alterar a descricao do personagem grande.

        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')


    })
})