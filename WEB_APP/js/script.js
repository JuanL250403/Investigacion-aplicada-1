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

var ida = 0;
function loop(){
    console.log("j")
        setTimeout(function(){
            console.log("hola")
            ida++
            if (ida >= slides.length){
                ida = 0;
            }
            if (ida < slides.length){
                slides[ida].style.order = "-1"
                if (ida > 0){
                    slides[ida-1].removeAttribute("style");
                }
            }
            console.log(ida)
            loop();
        }, 6000) 
    }
window.addEventListener("resize", function(){
    if (window.innerWidth < 460){
        loop();
    }
}, false);