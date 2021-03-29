
function hexd(c) {
    var s = "0123456789abcdef";
    var i = parseInt (c);
    if (i == 0 || isNaN (c))
        return "00";
    i = Math.round (Math.min (Math.max (0, i), 255));
    return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex (rgb) {
    return hexd(rgb[0]) + hexd(rgb[1]) + hexd(rgb[2]);
}

/* Remove '#' in color hex string */
function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

/* Convert a hex string to an RGB triplet */
function convertToRGB (hexa) {
    var color = [];
    color[0] = parseInt ((trim(hexa)).substring (0, 2), 16);
    color[1] = parseInt ((trim(hexa)).substring (2, 4), 16);
    color[2] = parseInt ((trim(hexa)).substring (4, 6), 16);
    return color;
}

function generateColor(colorStart,colorEnd,colorCount){

    // The beginning of your gradient
    var start = convertToRGB (colorStart);    

    // The end of your gradient
    var end   = convertToRGB (colorEnd);    

    // The number of colors to compute
    var len = colorCount;

    //Alpha blending amount
    var alpha = 0.0;

    var saida = [];

    for (i = 0; i < len; i++) {
        var c = [];
        alpha += (1.0/len);

        c[0] = start[0] * alpha + (1 - alpha) * end[0];
        c[1] = start[1] * alpha + (1 - alpha) * end[1];
        c[2] = start[2] * alpha + (1 - alpha) * end[2];

        saida.push(convertToHex (c));

    }

    return saida;

}

const text = document.querySelector(".fancy")
const str_ = text.textContent;
const chr_ = str_.split("");

text.textContent = ""


var randomColor1 = "#" + ("000000" + (((Math.random() * 16777215) % 256) << [0, 8, 16][Math.floor((Math.random() * 16777215)) % 3]).toString(16)).substr(-6);
var randomColor2 = "#" + ("000000" + (((Math.random() * 16777215) % 256) << [0, 8, 16][Math.floor((Math.random() * 16777215)) % 3]).toString(16)).substr(-6);

var colors = generateColor(randomColor1, randomColor2, 39);

for(let i = 0; i < chr_.length; i++){
    text.innerHTML += "<span>" + chr_[i] + "</span>";
}

let char = 0;
let time = setInterval(onTick, 100);
let counter = 0;
let opt = 0;
function onTick(){

    if(char === chr_.length){
        randomColor1 = "#" + ("000000" + (((Math.random() * 16777215) % 256) << [0, 8, 16][Math.floor((Math.random() * 16777215)) % 3]).toString(16)).substr(-6);
        randomColor2 = "#" + ("000000" + (((Math.random() * 16777215) % 256) << [0, 8, 16][Math.floor((Math.random() * 16777215)) % 3]).toString(16)).substr(-6);
        colors = generateColor(randomColor1, randomColor2, 39);
        counter++;
        char = 0 ;

        if(counter % 2 === 0){
            opt = 0;
        } else {
            opt = 1;
        }
    }

    var span = text.querySelectorAll('span')[char];
    span.style.color = "#" + colors[char];

    if (opt){
        span.classList.remove('fade');
    } else {
        span.classList.add('fade');
    }

    char++;

}
