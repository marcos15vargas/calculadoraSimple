const resultado = document.querySelector(".res");
const borrar = document.querySelector('.borrar');
const retroceso = document.querySelector('.delete');
const multiplicar = document.querySelector('.multiplicar');
const division = document.querySelector('.dividir');
const resta = document.querySelector('.menos');
const suma = document.querySelector('.mas');
const igual = document.getElementById('igual');
const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const cuatro = document.querySelector('.cuatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const siete = document.querySelector('.siete');
const ocho = document.querySelector('.ocho');
const nueve = document.querySelector('.nueve');
const cero = document.querySelector('.cero');


uno.addEventListener('click',()=>resultado.textContent = resultado.textContent + "1");
dos.addEventListener('click',()=>resultado.textContent = resultado.textContent + "2");
tres.addEventListener('click',()=>resultado.textContent = resultado.textContent + "3");
cuatro.addEventListener('click',()=>resultado.textContent = resultado.textContent + "4");
cinco.addEventListener('click',()=>resultado.textContent = resultado.textContent + "5");
seis.addEventListener('click',()=>resultado.textContent = resultado.textContent + "6");
siete.addEventListener('click',()=>resultado.textContent = resultado.textContent + "7");
ocho.addEventListener('click',()=>resultado.textContent = resultado.textContent + "8");
nueve.addEventListener('click',()=>resultado.textContent = resultado.textContent + "9");
cero.addEventListener('click',()=>resultado.textContent = resultado.textContent + "0");

suma.addEventListener('click',()=>{
    let arr =resultado.textContent;
    if(arr.indexOf('+') == -1){
        resultado.textContent = resultado.textContent + "+";
    }
});
resta.addEventListener('click',()=>{
    let arr =resultado.textContent;
    if(arr.indexOf('-') == -1){
        resultado.textContent = resultado.textContent + "-";
    }
});
multiplicar.addEventListener('click',()=>{
    let arr =resultado.textContent;
    if(arr.indexOf('*') == -1){
        resultado.textContent = resultado.textContent + "*";
    }
});
division.addEventListener('click',()=>{
    let arr =resultado.textContent;
    if(arr.indexOf('/') == -1){
        resultado.textContent = resultado.textContent + "/";
    }
});


borrar.addEventListener('click',()=>{
    resultado.textContent = null;
})

retroceso.addEventListener('click',()=>{
    let arr = resultado.textContent.split('');
    arr.pop();
    resultado.textContent = arr.join('');
})


igual.addEventListener('click',()=>{
    let arr = resultado.textContent;
    if(arr.indexOf("+") != -1){
        let suma = resultado.textContent.split('+');
        resultado.textContent = null;
        resultado.textContent = parseInt(suma[0])+parseInt(suma[1]);
    }else if(arr.indexOf('-') != -1){
        let resta = resultado.textContent.split('-');
        resultado.textContent = null;
        resultado.textContent = parseInt(resta[0]) - parseInt(resta[1]);
    }else if(arr.indexOf('*') != -1){
        let mult = resultado.textContent.split('*');
        resultado.textContent = null;
        resultado.textContent = parseInt(mult[0]) * parseInt(mult[1]);
    }else if(arr.indexOf('/') != -1){
        let division = resultado.textContent.split('/');
        resultado.textContent = null;
        resultado.textContent = parseFloat(division[0]) / parseFloat(division[1]);
    }
})