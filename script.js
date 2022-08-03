let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById('p-div');
let imgDiv = document.getElementById('img-div');



pButton.onclick = function (){
    let txt = document.createElement('p');

    txt.style.backgroundColor = 'orange';
    pDiv.style.border = 'soild 3px black';
    txt.innerHTML += "Ice-cream is good at summer time.";
    pDiv.appendChild(txt)
    
    imgDiv.style.display = "none";
    pDiv.style.display ="block";
}

imgButton.onclick = function (){
    let newImage = document.createElement("img");
    newImage.setAttribute("src","pikachu.png");
    imgDiv.appendChild(newImage);
   
    newImage.style.width = "100px"

    imgDiv.style.display ="block";
   pDiv.style.display = "none";

}