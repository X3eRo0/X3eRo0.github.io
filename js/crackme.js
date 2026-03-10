function changeText(text, success){
    var status = document.getElementById("crackme-status");
    if (status) {
        status.textContent = text;
        status.dataset.success = success ? "true" : "false";
    }

    if (typeof stop_anim !== "undefined") {
        stop_anim = true;
        new_text = text;
        color = success;
    }
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
    .catch(() => {
        changeText("Unable to load crackme.", false);
    });
}
