function verificar() {
  const anoAtual = new Date().getFullYear();
  const txtAno = document.getElementById("txtano");
  const res = document.getElementById("res");
  const img = document.getElementById("imgPessoa");

  if (txtAno.value.length === 0 || Number(txtAno.value) > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
    return;
  }

  const fsex = document.getElementsByName("radsex");
  const idade = anoAtual - Number(txtAno.value);
  let genero = "";
  let fase = "";
  let caminho = "";

  // MASCULINO
  if (fsex[0].checked) {
    genero = "masculino";

    if (idade < 12) {
      fase = "uma criança";
      caminho = "imagens/criancamenino.jpg";
    } else if (idade < 21) {
      fase = "um jovem";
      caminho = "imagens/homem.jpg";
    } else if (idade < 50) {
      fase = "um adulto";
      caminho = "imagens/homem.jpg";
    } else {
      fase = "um idoso";
      caminho = "imagens/senhor.jpg";
    }

    // FEMININO
  } else {
    genero = "feminino";

    if (idade < 12) {
      fase = "uma criança";
      caminho = "imagens/criancamenina.jpg";
    } else if (idade < 21) {
      fase = "uma jovem";
      caminho = "imagens/mulher.jpg";
    } else if (idade < 50) {
      fase = "uma adulta";
      caminho = "imagens/mulher.jpg";
    } else {
      fase = "uma idosa";
      caminho = "imagens/senhora.jpg";
    }
  }

  res.innerHTML = `Detectamos <strong>${fase}</strong> do sexo <strong>${genero}</strong> com <strong>${idade}</strong> anos.`;

  img.src = caminho;
  img.style.display = "block";
}
