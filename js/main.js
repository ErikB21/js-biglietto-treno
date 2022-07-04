const numeroKilometri = parseInt(prompt('Quanti Km desidera fare?'));
const prezzoKilometro = 0.21;
const prezzoTotale = numeroKilometri * prezzoKilometro;

const scontoRagazzi = (prezzoTotale * 0.8);
const scontoAnziani = (prezzoTotale * 0.6);

let n = scontoRagazzi.toFixed(2);
let nu = scontoAnziani.toFixed(2);
let num = prezzoTotale.toFixed(2);



if (numeroKilometri >= 1){
    const età = parseInt(prompt('La sua Età'));
    if (età < 18){
        const scontoRagazzi= prezzoTotale * 0.8;
        console.log(scontoRagazzi);
        document.getElementById('totTravel').innerHTML = 'Il prezzo totale è ' + '' + n + '€';
    } else if (età >= 65){
        const scontoAnziani = prezzoTotale * 0.6;
        console.log(scontoRagazzi);
        document.getElementById('totTravel').innerHTML = 'Il prezzo totale è ' + '' + nu + '€';
    }else{
        const prezzoTotale = numeroKilometri * prezzoKilometro;
        console.log(prezzoTotale);
        document.getElementById('totTravel').innerHTML = 'Il prezzo totale è ' + '' + num + '€';
    }
} else{
    const numeroKilometri = parseInt(prompt('Richiedi il numero di Km'));
}