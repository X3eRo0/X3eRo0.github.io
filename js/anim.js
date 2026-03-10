var stop_anim = false;
var textanim = null;
var new_text = "";
var color = false;

var Animate = function() {
    var text = document.querySelector(".crackme-anim .anim");
    if (!text) {
        return null;
    }

    var str_ = text.textContent || "";
    if (!str_) {
        return null;
    }

    var chr_ = str_.split("");
    text.textContent = "";

    for (var i = 0; i < chr_.length; i++) {
        text.innerHTML += "<span>" + chr_[i] + "</span>";
    }

    var char = 0;
    var time = setInterval(onTick, 400);
    var counter = 0;
    var opt = 0;

    function onTick() {
        var anim = document.querySelector(".crackme-anim .anim");
        if (!anim) {
            clearInterval(time);
            return null;
        }

        var spns = anim.childNodes;
        if (!spns.length) {
            return null;
        }

        var span = spns[char];
        if (!span) {
            char = 0;
            span = spns[char];
            if (!span) {
                return null;
            }
        }

        if (
            stop_anim === true &&
            spns[0].className === "anim" &&
            spns[spns.length - 1].className === "anim"
        ) {
            anim.innerHTML = "";
            clearInterval(textanim);

            var panel = document.querySelector(".crackme-anim");
            if (panel) {
                panel.dataset.success = color ? "true" : "false";
            }

            for (var j = 0; j < new_text.length; j++) {
                var s = document.createElement("span");
                s.innerHTML = new_text[j];
                s.className = "fade";
                anim.appendChild(s);
            }

            char = 0;
            counter = 0;
            opt = 0;
            chr_ = new_text.split("");
            stop_anim = false;
            textanim = setInterval(onTick, 400);
            return textanim;
        }

        if (opt === 0) {
            span.classList.add("fade");
            span.classList.remove("anim");
        } else {
            span.classList.remove("fade");
            span.classList.add("anim");
        }

        char++;

        if (char === chr_.length) {
            counter++;
            char = 0;
            opt = counter % 2 === 0 ? 0 : 1;
        }

        return null;
    }

    return time;
};

document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector(".crackme-anim .anim")) {
        textanim = Animate();
    }
});
