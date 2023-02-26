// a+b+c


let a = document.querySelectorAll("button").length
for(let i=0; i<=a; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var ifclick =this.innerText;
        document.getElementsByTagName("h2").innerHTML= ifclick + " Button sound";
        makesound(ifclick);//a
        animation(ifclick);
     
    });
    
}
document.addEventListener("keypress",function (event) {
makesound(event.key);//b
animation(event.key);//b

});
function makesound(key) { 
    switch (key) {
        case "w":
            var audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            break;    
        case "s":
            var audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            break;     
        case "d":
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break; 
        case "l":
            var audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "j":
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            break;           
        default: 
            break;
    }

   
    
}
function animation(currentkey) {

    let button= document.querySelector("."+currentkey);
    button.classList.add("pressed")

    setTimeout(function(){
        button.classList.remove("pressed")

    },100)
}

