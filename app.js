var img1 = 1, imgMax1 = 6;
var img2 = 7, imgMax2 = 12;
var img3 = 13, imgMax3 = 18;

var first = document.getElementById('1');
var second = document.getElementById('2');
var third = document.getElementById('3');

setInterval(function () {

    image = (++img1 > imgMax1 ? (img1 = 1) : img1) + '.png';
    first.src = './img/' + image;

    image = (++img2 > imgMax2 ? (img2 = 7) : img2) + '.png';
    second.src = './img/' + image;

    image = (++img3 > imgMax3 ? (img3 = 13) : img3) + '.png';
    third.src = './img/' + image;

}, 3000);
