const text = document.querySelector(".fancy")
const str_ = text.textContent;
const chr_ = str_.split("");

text.textContent = ""

for(let i = 0; i < chr_.length; i++){
    text.innerHTML += "<span>" + chr_[i] + "</span>";
}

let char = 0;
let time = setInterval(onTick, 100);
let counter = 0;
let opt = 0;
function onTick(){

    if(char === chr_.length){
        counter++;
        char = 0 ;

        if(counter % 2 === 0){
            opt = 0;
        } else {
            opt = 1;
        }
    }

    var span = text.querySelectorAll('span')[char];
    span.style.color = "#ff79c6";

    if (opt){
        span.classList.remove('fade');
        span.classList.add('anim');
    } else {
        span.classList.add('fade');
        span.classList.remove('anim');
    }

    char++;

}
