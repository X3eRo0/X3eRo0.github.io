const text = document.querySelector('.ml3');
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
    
    const span = text.querySelectorAll('span')[char];
    if(opt === 0){
        span.classList.add('fade');
    } else {
        span.classList.remove('fade');
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