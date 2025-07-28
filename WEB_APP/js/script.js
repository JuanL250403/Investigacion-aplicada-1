let ant = document.getElementById("anterior");
let sig = document.getElementById("siguiente");

let slides = document.getElementsByClassName("slide");

var a = 0;
var s = 0;

sig.addEventListener("click", function(){
    if (a < slides.length - 1){
        a++
        slides[a].style.order = "-1"
        slides[a-1].removeAttribute("style");
    }
    console.log("a" + a)
})
ant.addEventListener("click", function(){
    s = a;
    if (s > 0){
        a--
        slides[s-1].style.order = "-1"
        slides[s].removeAttribute("style");
    }
    console.log("s" + s)
})
