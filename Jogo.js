
//para tornar este codigo publico 
export default {


    //atributos 
    tabuleiro: ['', '', '', '', '', '', '', '',  ''],
    jogador: 'X',
    mensagem: 'Vez de: X', 
    acabou: false,
    opcoes_vitoria: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [6,4,2]
    ], 
    
    //funcões 
    jogar(posicao) {

        console.log('jogar: '  + this.mensagem);
        if(this.acabou)
            return false;

        if (this.tabuleiro[posicao] != '' )
            return false;

        this.tabuleiro[posicao] = this.jogador;
        this.jogador = this.jogador == 'X' ? 'O' : 'X';

        this.mensagem  = 'Vez de ' + this.jogador;

        this.acabou = this.verificarVitoria();

        //if(this.acabou) 
            //mensagem  = 'Fim de jogo';

        return true;
    },
    verificarVitoria(jogador){

/*        for (i in this.opcoes_vitoria){
            //if(this.tabuleiro[this.opcoes_vitoria[i][0]] == jogador )
              //  return true;
              console.log('i igual a ' + i);
        }*/
        return false;
    },
    iniciar(){
        this.tabuleiro.fill('');
        this.mensagem  = 'Vez de ' + this.jogador;
        console.log('jogo - iniciar - this.jogador ' + this.jogador);
        return true;
    }
}