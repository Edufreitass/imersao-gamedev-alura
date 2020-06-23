class Cenario {
    // esse construtor ira conter tudo que precisamos para criar o cenario
    constructor(imagem, velocidade) {
        this.imagem = imagem;
        this.velocidade = velocidade;
        // 1ª img começa no eixo 0
        this.x1 = 0;
        // 2ª img começa quando terminar a largura da 1º img
        this.x2 = width;
    }

    // metodo para colocar as 2 imagens na posicao inicial da tela
    exibe() {
        // background(1°img, eixoX, eixoY, width, height)
        image(this.imagem, this.x1, 0, width, height);
        image(this.imagem, this.x2, 0, width, height);
    }

    // metodo para movimentar a tela do jogo
    move() {
        this.x1 = this.x1 - this.velocidade;
        this.x2 = this.x2 - this.velocidade;

        if (this.x1 < -width) {
            this.x1 = width;
        }
        if (this.x2 < -width) {
            this.x2 = width;
        }

    }

}