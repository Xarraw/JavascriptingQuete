let like = prompt('A quel point aimes tu les patates ?', 'De -100 à 100');
let potato = '#';
let potatos = ['#','##','###','####','#####','######','#######'];
let monString = '';
let i = 0;

if (like >= 1) {
    for (i in potatos){
        monString += potatos[i] + "\r\n";
    }
    alert(monString);
}if (like <= -1) {
    alert('Sérieusment je suis décu !!!');
}else{
    alert('Je vous sens comme tiraillé.');
}
