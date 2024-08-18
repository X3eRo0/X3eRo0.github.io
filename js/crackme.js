function changeText(text, success){

    stop_anim = true;
    new_text = text;
    color = success;
}

function crackme(){
    var password = document.getElementById("password").value;
    var passbytes = new Uint8Array(password.length);

    for (var i = 0; i < password.length; i++){
        passbytes[i] = password.charCodeAt(i);
    }


    WebAssembly.instantiateStreaming(fetch('/crackme.wasm'), {})
    .then(obj => {
        for (var i = 0; i < password.length; i++){
            obj.instance.exports.set(passbytes[i], i);
        }
        var c = obj.instance.exports.check();
        if (c == 1){
            changeText("CORRECT!", true);
        } else {
            changeText("WRONG!", false);
        }
    })
}
