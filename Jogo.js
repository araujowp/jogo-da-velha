
//para tornar este codigo publico 
export default {


    //atributos 
    tabuleiro: ['', '', '', '', '', '', '', '',  ''],
    jogador: 'X',
    mensagem: 'Vez de: X', 
    acabou: false,
    contador: 0,
    opcoes_vitoria: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ], 
    
    //funcões 
    jogar(posicao) {

        if(this.acabou)
            return false;

        if (this.tabuleiro[posicao] != '' )
            return false;

        this.tabuleiro[posicao] = this.jogador;
        
        this.acabou = this.verificarVitoria();
        
        if(this.acabou) {
            this.mensagem = this.jogador + ' Ganhou!!! ';
            return false;
        }
        this.contador++;
        
        if (this.contador == 9){
            this.acabou = true;
            this.mensagem = 'Empate';
            return false;
        }

        this.jogador = this.jogador == 'X' ? 'O' : 'X';
        this.mensagem  = 'Vez de ' + this.jogador;

        return true;
    },
    verificarVitoria(jogador){
        
        for (this.i in this.opcoes_vitoria){
            if(this.tabuleiro[ this.opcoes_vitoria[this.i][0] ] == this.jogador &&
               this.tabuleiro[ this.opcoes_vitoria[this.i][1] ] == this.jogador && 
               this.tabuleiro[ this.opcoes_vitoria[this.i][2] ] == this.jogador){
                return true;
            }
        }

        return false;
    },
    iniciar(){
        this.tabuleiro.fill('');
        this.mensagem  = 'Vez de ' + this.jogador;
        this.acabou = false;
        return true;
    }
}