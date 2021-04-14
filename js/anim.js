var Animate = function() {
    var text = document.querySelector(".anim");
    var str_ = text.textContent;
    var chr_ = str_.split("");

    text.textContent = ""

    for(let i = 0; i < chr_.length; i++){
        text.innerHTML += "<span>" + chr_[i] + "</span>";
    }

    let char = 0;
    let time = setInterval(onTick, 400);
    let counter = 0;
    let opt = 0;

    function onTick(){

        var anim = document.querySelector('.anim');
        var spns = anim.childNodes;
        var span = spns[char];



        if (stop_anim == true &&
            spns[0].className == "anim" &&
            spns[spns.length - 1].className == "anim"){

            anim.innerHTML = ""; // remove all elements

            clearInterval(textanim);
            
            if (color == true){
                document.querySelector(".crackme").style.color = "#50fa7b";
            } else {
                document.querySelector(".crackme").style.color = "#ff5555";
            }


            for (var i = 0; i < new_text.length; i++){
                var s = document.createElement("span");
                s.innerHTML = new_text[i];
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


        if(opt === 0){
            span.classList.add('fade');
            span.classList.remove('anim');
        } else {
            span.classList.remove('fade');
            span.classList.add('anim');
        }
        char++;

        if(char === chr_.length){
            counter++;
            char = 0 ;

            if(counter % 2 === 0){
                opt = 0;
            } else {
                opt = 1;
            }
        }
    }

    return time;
}