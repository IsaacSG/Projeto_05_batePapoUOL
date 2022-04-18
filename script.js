function entrarSala(){
    texto = prompt("Digite seu nome");
    nome ={name:
        texto
    } ;
    const promisse = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome);
    promisse.then(function(){});
    promisse.catch(alert = "Digite o nome novamente");
    setInterval(carregarMensagens, 3000);
    setInterval(verificarConeccao, 5000);
}
function carregarMensagens(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promisse.then(renderizarMensagens);
}
function renderizarMensagens(response){
    let mensagens = response.data;
    let novasmensagens;
    for(i = 0; i<mensagens.length ; i++){
        novasmensagens = document.querySelector(".mensagens");
        if (mensagens[i].type == "status"){
            novasmensagens.innerHTML += `<div><p>(${mensagens[i].time}) <strong>${mensagens[i].from}</strong> ${mensagens[i].text}</p> </div>`
        ;}
        if (mensagens[i].type == "private_message" && mensagens[i].to == texto){
            novasmensagens.innerHTML += `<div class ="private"><p>(${mensagens[i].time}) <strong>${mensagens[i].from}</strong> para <strong>${mensagens[i].to}</strong> :  ${mensagens[i].text}</p> </div>`
        ;}
        if (mensagens[i].type == "message"){
        novasmensagens.innerHTML += `<div class ="message"><p>(${mensagens[i].time}) <strong>${mensagens[i].from}</strong> para <strong>${mensagens[i].to}</strong> :  ${mensagens[i].text}</p></div>`
        ;}
    }
    let lastmessage = document.querySelector(".mensagens").lastElementChild;
    lastmessage.scrollIntoView();
}
function verificarConeccao(){
    const promisse = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nome);
}
function enviarMensagem(){
    const mensagemEnviada = document.querySelector(".mensagemEnviar").value;
    let mensagemParaEnviar = {name: texto, to: "Todos", text: mensagemEnviada,type: "message"};
    const promisse = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', mensagemParaEnviar);
}
entrarSala();