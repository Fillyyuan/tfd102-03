let a = document.querySelector('.example')
let b = document.querySelector('.main')
let toggle = true

document.getElementById("btn").onclick = function () {
    if(toggle){
        a.style.display = "flex"
        toggle = !toggle
        console.log(toggle)
        b.style.background = "red"
        b.style.opacity = ".5"
        a.style.opacity = "1"
    }else{                
        toggle = !toggle
    }                  
};

document.querySelector('.main').onmousedown = function () {
    a.style.display = "none"
    b.style.background = "none"
    b.style.opacity = "1"

}