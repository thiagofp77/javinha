import prompt from 'prompt-sync';
let ler = prompt ();

console.log('infrome a quantidade de acais pequenos:')
let n1 = Number(ler());
console.log('informe a quantoidade de acais medios ');
let n2 = Number(ler());
console.log ('informe a quantidade de acais grandes');
let n3 = Number(ler());
console.log('informe o vaalor do desconto em %');
let desc = Number(ler());

let x = acais (n1,n2,n3,desc);
console.log(x)

function acais (n1,n2,n3,desc){
    let vp = n1*13.50;
    let vm = n2*15;
    let vg = n3*17.50;
    let des= desc/100;
    let x =(n1+n2+n3)/des;
    return x 
}
