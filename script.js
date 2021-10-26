function fazeramao() {
    var n_digitado = Number(document.getElementById(`numero-digitado`).value);
    var link_resultado = document.getElementById(`link-resultado`);
    var p_result = document.getElementById(`p-result`);
    var radio1 = document.getElementById(`radio1`);
    var radio2 = document.getElementById(`radio2`);

    if (n_digitado == 0){
        p_result.innerHTML = `<p id="digite-algo">Digite um Numero</p>`;
    } else if(radio1.checked == true) {
        p_result.innerHTML = `<a href="https://web.whatsapp.com/send?phone=55${n_digitado}&text" target="_blank" id="link-resultado">Abrir no Whatsapp (Navegador)</a>`;
    } else if(radio2.checked == true) {
        p_result.innerHTML = `<a href="https://api.whatsapp.com/send?phone=55${n_digitado}&text" target="_blank" id="link-resultado">Abrir no whatsapp (Instalado)</a>`;
    }
}