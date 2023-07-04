function uploadFile() {
  localStorage.removeItem('meusDados');
  const fileInput = document.getElementById('jsonFile');
  const file = fileInput.files[0];

  const reader = new FileReader();

  reader.onload = function (event) {
    const fileContent = event.target.result;
    let jogos = JSON.parse(fileContent);
    localStorage.setItem('meusDados', JSON.stringify(jogos));
    ExibirJogosNaTela();
  };
  reader.readAsText(file);
}

function ExibirJogosNaTela() {
  const recomendacaoContent = document.getElementById('recomendacao-content');
  const jogos = JSON.parse(localStorage.getItem('meusDados'));

  recomendacaoContent.innerHTML = ''; // Limpa o conteúdo atual da div

  console.log(jogos.jogos);

  jogos.forEach(jogo => {
    recomendacaoContent.innerHTML += `
    <ul class="list-unstyled">
    <li class="playlist-number">
        <div class="song-info">
            <img src="${jogo.capa}"/>
            <h4>${jogo.titulo}</h4>
        </div>
        <div class="clearfix"></div>
    </li>
    <div class="clearfix"></div>
</ul>
    `
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}