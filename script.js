let eje= document.getElementById('real');
let opt= document.querySelector('select');
let resul= document.getElementById('resultado');

eje.addEventListener('click', eleccion);

function eleccion(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    //let res = parseFloat(document.getElementById('res').value);

    let opt2 = resul.document.g;
    if(opt2 === 'Suma'){
        let res =resn1 + n2;
        resul.innerHTML = `${resultado}`;
    }else if(opt2 === 'resta'){
        let res =resn1 - n2;
        resul.innerHTML = `${resultado}`;
    }else if(opt2 === 'multiplicacion'){
        let res =resn1 * n2;
        resul.innerHTML = `${resultado}`;
    }else if(opt2 === 'division'){
        let res =resn1 / n2;
        resul.innerHTML = `${resultado}`;
    }
}