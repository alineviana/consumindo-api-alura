async function buscaEndereco(cep) {

    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.error) {
            throw Error('CEP não existe!');
        }

        const logradouro = document.getElementById('endereco');
        const bairro = document.getElementById('bairro');
        const cidade = document.getElementById('cidade');
        const estado = document.getElementById('estado');

        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        estado.value = consultaCepConvertida.uf;

        return consultaCepConvertida;

    } catch(error) {
        mensagemErro.innerHTML= `<p> CEP inválido.Tente novamente! </p>`;
        console.log(error);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));



