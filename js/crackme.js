function changeText(text, success){

    stop_anim = true;
    new_text = text;
    color = success;
}

function crackme(){
    var password = document.getElementById("password").value;
    var passbytes = new Uint8Array(password.length);

    for (var i = 0; i < password.length; i++){
        passbytes[i] = password[i].charCodeAt(i);
    }


    WebAssembly.instantiateStreaming(fetch('/test.wasm'))
    .then(obj => {
        // Call an exported function:
        console.log(password);
        for (var i = 0; i < password.length; i++){
            obj.instance.exports.set(passbytes[i], i);
        }
        if (obj.instance.exports.check() == 0){
            changeText("CORRECT!", true);
        } else {
            changeText("WRONG!", false);
        }
    })
}