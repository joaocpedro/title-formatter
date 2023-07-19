

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");
  const buttonCopyText = document.getElementById("btn-copy");
  
  let formattedOutput;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const inputData = document.getElementById("text-input").value;
    formattedOutput = formatarTexto(inputData);
    document.querySelector(".output-text").innerText = formattedOutput;
  });
  
  buttonCopyText.addEventListener("click", function () {   
    if (!formattedOutput) return;     
    navigator.clipboard.writeText(formattedOutput);
    alert("Título Copiado");
  });
  
  
});

function formatarTexto(inputData) {
  const parts = inputData.split("\t");
  
  
  if (parts.length !== 12) { 
    return  "Formato Inválido";
  }

  const data = parts[1].split("/");
  const hora = parts[11].split(":");
  const duracao = parts[6].split(":");
  const output =
    data[0] +
    " " +
    data[1] +
    " " +
    data[2] +
    " - " +
    hora[0] +
    "h" +
    hora[1] +
    " - " +
    parts[5] +
    " - " +
    parts[3] +
    " - " +
    duracao[0] +
    "´" +
    duracao[1] +
    "´" +
    duracao[2];
  return output;
}

