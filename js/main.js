const numeroKilometri = parseInt(prompt('Richiedi il numero di Km'));
const prezzoKilometro = 0.21;
const prezzoTotale = numeroKilometri * prezzoKilometro;

const scontoRagazzi = (prezzoTotale * 0.8);
const scontoAnziani = (prezzoTotale * 0.6);



if (numeroKilometri >= 1){
    const età = parseInt(prompt('Richiedi Età'));
    if (età < 18){
        const scontoRagazzi= prezzoTotale * 0.8;
        console.log(scontoRagazzi);
        document.getElementById('totTravel').innerHTML = 'Il prezzo totale è' + '' + scontoRagazzi + '€';
    } else if (età >= 65){
        const scontoAnziani = prezzoTotale * 0.6;
        console.log(scontoRagazzi);
        document.getElementById('totTravel').innerHTML = 'Il prezzo totale è' + '' + scontoAnziani + '€';
    }else{
        const prezzoTotale = numeroKilometri * prezzoKilometro;
        console.log(prezzoTotale);
        document.getElementById('totTravel').innerHTML = 'Il prezzo totale è' + '' + prezzoTotale + '€';
    }
} else{
    const numeroKilometri = parseInt(prompt('Richiedi il numero di Km'));
}