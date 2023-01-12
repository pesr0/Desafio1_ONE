function codificar(){
    var texto = document.querySelector('#caixaentrada').value
    var x=0;
    
    for(var i=0; i<texto.length; i++){
        if(texto[i]==texto[i].toUpperCase() && texto[i]!=' ' && texto[i]!='\n' && isNaN(texto[i]) ) x++;
    }

    if (x!=0) alert('Apenas letras minúsculas');

    else{
        texto=texto.replaceAll('e', 'enter');
        texto=texto.replaceAll('i', 'imes');
        texto=texto.replaceAll('a',  'ai');
        texto=texto.replaceAll('u', 'ufat');
        texto=texto.replaceAll('o', 'ober');
        document.querySelector('#caixasaida').value=texto;
    }

    
};


function decodificar(){
    var texto = document.querySelector('#caixaentrada').value;
    texto=texto.replaceAll('enter', 'e');
    texto=texto.replaceAll('imes', 'i');
    texto=texto.replaceAll('ai', 'a');
    texto=texto.replaceAll('ufat', 'u');
    texto=texto.replaceAll('ober', 'o');
    document.querySelector('#caixasaida').value=texto;
};


function copy(){
    var texto = document.querySelector('#caixasaida');
    texto.select();
    document.execCommand('copy');
    document.querySelector('#caixaentrada').value='';
};
