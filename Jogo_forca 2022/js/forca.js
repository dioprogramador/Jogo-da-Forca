let tentativas = 19;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "COMPUTADOR",
        categoria:"TECNOLOGIA"
    },
    palavra002 = {
        nome: "NOTEBOOK",
        categoria:"TECNOLOGIA"
    },
    palavra003 = {
        nome: "MOOUSE",
        categoria:"TECNOLOGIA"
    },
    palavra004 = {
        nome: "SMARTPHONE",
        categoria:"TECNOLOGIA"
    },
    palavra005 = {
        nome: "PLACA MAE",
        categoria:"TECNOLOGIA"
    },
    palavra006 = {
        nome: "MONITOR",
        categoria:"TECNOLOGIA"
    },
    palavra007 = {
        nome: "HARDWARE",
        categoria:"TECNOLOGIA"
    },
    palavra008 = {
        nome: "SOFTWARE",
        categoria:"TECNOLOGIA"
    },
    palavra009 = {
        nome: "BLUETOOTH",
        categoria:"TECNOLOGIA"
    },
    palavra010 = {
        nome: "WIRELESS",
        categoria:"TECNOLOGIA"
    },
    palavra011 = {
        nome: "PERL",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra012 = {
        nome: "JAVA",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra013 = {
        nome: "RUBY",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra014 = {
        nome: "VISUAL BASIC",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra015 = {
        nome: "KOTLIN",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra016 = {
        nome: "DOCKER",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra017 = {
        nome: "JAVASCRIPT",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra018 = {
        nome: "C#",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra019 = {
        nome: "C",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra020 = {
        nome: "PYTHON",
        categoria:"LINGUAGEM DE PROGRAMACAO"
    },
    palavra021 = {
        nome: "WORD",
        categoria:"PACOTE OFFICE 365"
    },
    palavra022 = {
        nome: "EXCEL",
        categoria:"PACOTE OFFICE 365"
    },
    palavra023 = {
        nome: "ACCESS",
        categoria:"PACOTE OFFICE 365"
    },
    palavra024 = {
        nome: "POWERPOINT",
        categoria:"PACOTE OFFICE 365"
    },
    palavra025 = {
        nome: "PUBLISHER",
        categoria:"PACOTE OFFICE 365"
    },
    palavra026 = {
        nome: "OUTLOOK",
        categoria:"PACOTE OFFICE 365"
    },
    palavra027 = {
        nome: "ONE DRIVE",
        categoria:"PACOTE OFFICE 365"
    },
    palavra028 = {
        nome: "SHAREPOINT",
        categoria:"PACOTE OFFICE 365"
    },
    palavra029 = {
        nome: "ONENOTE",
        categoria:"PACOTE OFFICE 365"
    },
    palavra030 = {
        nome: "EXCHANGE",
        categoria:"PACOTE OFFICE 365"
    },
    palavra031 = {
        nome: "FREE-FIRE",
        categoria:"JOGOS ON-LINE"
    },
    palavra032 = {
        nome: "FIFA 2022-23",
        categoria:"JOGOS ON-LINE"
    },
    palavra033 = {
        nome: " POKEMON UNITE",
        categoria:"JOGOS ON-LINE"
    },
    palavra034 = {
        nome: "LEAGUE OF LEGENDS",
        categoria:"JOGOS ON-LINE"
    },
    palavra035 = {
        nome: "FORTNITE",
        categoria:"JOGOS ON-LINE"
    },
    palavra036 = {
        nome: "GENSHIN IMPACT",
        categoria:"JOGOS ON-LINE"
    },
    palavra037 = {
        nome: "AMONG US",
        categoria:"JOGOS ON-LINE"
    },
    palavra038 = {
        nome: "CS GO",
        categoria:"JOGOS ON-LINE"
    },
    palavra039 = {
        nome: "VALORANT",
        categoria:"JOGOS ON-LINE"
    },
    palavra040 = {
        nome: "CALL OF DUTY WARZONE",
        categoria:"JOGOS ON-LINE"
    },
    palavra040 = {
        nome: "STEVE JOBS",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra041 = {
        nome: "BILL GATES",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra042 = {
        nome: "JEFF BEZOS",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra043 = {
        nome: "LARRY ELLISON",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra044 = {
        nome: "MARK ZUCKERBERG",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra045 = {
        nome: "LARRY PAGE",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra046 = {
        nome: "MA HUATENG",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra047 = {
        nome: "MICHAEL DELL",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra048 = {
        nome: "WILLIAM LEI DING",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra049 = {
        nome: "LAURENE POWELL JOBS",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra050 = {
        nome: "DIETMAR HOPP",
        categoria:"DONO DE EMPRESAS DE T.I"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria:"SOFTWARE MUNDIAIS"
    },
    palavra052 = {
        nome: "LINUX",
        categoria:"SOFTWARE MUNDIAIS"
    },
    palavra053 = {
        nome: "WINDOWS",
        categoria:"SOFTWARE MUNDIAIS"
    },
    palavra054 = {
        nome: "MAC OS",
        categoria:"SOFTWARE MUNDIAIS"
    },
    palavra055 = {
        nome: "IOS",
        categoria:"SOFTWARE MUNDIAIS"
    },
    palavra056 = {
        nome: "ANDROID",
        categoria:"SOFTWARE MUNDIAIS"
    },
    palavra057 = {
        nome: "WINDOWS",
        categoria:"SOFTWARE S.O"
    },
    palavra058 = {
        nome: "MAC OS",
        categoria:"SOFTWARE S.O"
    },
    palavra059 = {
        nome: "LINUX",
        categoria:"SOFTWARE S.O"
    },
    palavra060 = {
        nome: "DEOCLECIO HOLANDA",
        categoria:"PROFESSOR DE INFORMATICA"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#FF0000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




