let Number1 =Math.floor(Math.random()*6)+1
let imagesource1= "images/"+"dice" + Number1 + ".png";
let image1 = document.querySelectorAll("img")[0].setAttribute("src", imagesource1);

let Number2 =Math.floor(Math.random()*6)+1
let imagesource2 = "images/"+"dice" + Number2 + ".png";
let image2 = document.querySelectorAll("img")[1].setAttribute("src", imagesource2);

if(Number1>Number2){
    document.querySelector("h2").innerHTML= "Dicee one wins"
}else if(Number1<Number2){
    document.querySelector("h2").innerHTML= "Dicee two wins"
}else{
    document.querySelector("h2").innerHTML= "play again"

}

