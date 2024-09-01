document.querySelector("#anoNasc").addEventListener("keydown", (e)=>{if(e.key === "Enter"){verificar()}})

function verificar(){
    var anoNasc = Number(document.querySelector("#anoNasc").value)
    var generoEscolhido = document.getElementsByName("genero")
    var anoAtual = new Date().getFullYear()

    if(anoNasc <= 0 || anoNasc > anoAtual || !generoEscolhido[0].checked && !generoEscolhido[1].checked){
        alert("[ERRO] verifique os dados inseridos e tente novamente!")
    }
    else{
        var image = document.createElement("img")
        image.id = "fotos"
        image.alt = "Imagens de personagens conforme a idade calculada"
        var idade = anoAtual - anoNasc

        if(generoEscolhido[0].checked){
            if(idade >= 0 && idade <= 12){ //Criança
                fxEtaria = "menino"
                image.src = "./images/foto-crianca-m.png"
            }else if(idade <= 18){ //adolecente
                fxEtaria = "garoto"
                image.src = "./images/foto-jovem-m.png"
            }else if(idade <= 50){ //adulto
                fxEtaria = "adulto"
                image.src = "./images/foto-adulto-m.png"
            }else{ //velho
                fxEtaria = "idosa"
                image.src = "./images/foto-velho-m.png"
            }
        }
        else if(generoEscolhido[1].checked){
            if(idade >= 0 && idade <= 12){ //Criança
                fxEtaria = "menina"
                image.src = "./images/foto-crianca-f.png"
            }else if(idade <= 18){ //adolecente
                fxEtaria = "garota"
                image.src = "./images/foto-jovem-f.png"
            }else if(idade <= 50){ //adulta
                fxEtaria = "adulta"
                image.src = "./images/foto-adulta-f.png"
            }else{ //velha
                fxEtaria = "idosa"
                image.src = "./images/foto-velha-f.png"
            }
        }
        var resMsg = document.querySelector("div#res")
        resMsg.style.textAlign = "center"
        resMsg.innerHTML = `<p>${fxEtaria} com ${idade} anos</p>` 
        resMsg.appendChild(image)
    } 
}