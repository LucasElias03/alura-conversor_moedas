function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmRealNumerico * 0.19;
    console.log(valorEmDolar);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em dolar é U$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmEuro = valorEmRealNumerico * 0.16;
  
    var elementoValorConvertido = document.getElementById("valorConvertido2");
    var valorConvertido = "O valor em euro é E$ " + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  