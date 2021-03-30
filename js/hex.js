const tex = document.querySelector('.hexdump');

tex.innerHTML = ""

for(let i = 0; i < 0x70; i++){
    if((i % 8 === 0)){
        if(i){
            tex.innerHTML += "<br>"
        }
        tex.innerHTML += hex(i, 4) + " : "
    }
    tex.innerHTML += hex(rand_rng(0, 255), 2) + " ";
}

function rand_rng(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function hex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

let tim = setInterval(OnTick, 500);
function OnTick(){
    
    tex.innerHTML = ""

    for(let i = 0; i < 0x70; i++){
        if((i % 8 === 0)){
            if(i){
                tex.innerHTML += "<br>"
            }
            tex.innerHTML += hex(i, 4) + " : "
        }
        tex.innerHTML += hex(rand_rng(0, 255), 2) + " ";
    }

}
