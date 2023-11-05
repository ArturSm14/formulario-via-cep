function buscarCep(){
    logradouro.value = "";
    bairro.value = "";
    cidade.value = "";
    uf.value = "";


    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(function (resposta){
        return resposta.json();
    })
    .then(function (conteudo){
        logradouro.value = conteudo.logradouro;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        uf.value = conteudo.uf;
        
    });
}

