/* Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado,
imprima o valor no campo Digite seu telefone.*/


    const botoes = document.querySelectorAll('input[type=button]');
    const inputTel = document.querySelector('#tel')

    function imprimeNumero(valor){
        let novoValor = inputTel.value + valor;
        inputTel.value = novoValor;
    }
    
    for (i = 0; i < botoes.length; i +=1){
        let botao = botoes[i];
        let valorBotao = botao.value;

        botao.onclick = function () {
            imprimeNumero(valorBotao)
        }
        
        botao.onkeydown = function (evento){
            console.log(evento);
            let key = evento.code;
            if(key === 'Enter' || key === 'Space'){
                botao.classList.add('ativa');
            }            
            
        }

        botao.onkeyup = function (evento){
            let key = evento.code;
            if(key === 'Enter' || key === 'Space'){
                botao.classList.remove('ativa');
            }
        }

    } 
    

