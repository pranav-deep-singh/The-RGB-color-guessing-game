// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var numsqures = 6
var colors = generateRandomColors(numsqures)

var squares = document.querySelectorAll(".square");
// console.log(squares);
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay")
colordisplay.textContent = pickedColor
var messagedisplay = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easybtn = document.querySelector("#easybtn")
var hardbtn = document.querySelector("#hardbtn")

easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsqures = 3
    colors = generateRandomColors(numsqures)
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for( var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "steelblue"
    messagedisplay.textContent = ""
}) 

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsqures = 6
    colors = generateRandomColors(numsqures)
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for( var i = 0 ; i < squares.length ; i++){
       squares[i].style.background = colors[i] 
       squares[i].style.display = "block"
    }
    h1.style.background = "steelblue"
    messagedisplay.textContent = ""
})

resetButton.addEventListener("click" , function()   {
    //generate new colors
    colors = generateRandomColors(numsqures)
    //pick a random color from array
    pickedColor = pickColor();
    //chamge colordisplay to match pickedcolor
    colordisplay.textContent = pickedColor;
    messagedisplay.textContent = ""
    this.textContent = "New Colors"
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue"
})

for(var i=0;i<squares.length;i++){
    // add initial colors
    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        // alert("color clicked")
        //grab color of clicked square
        var ClickedColor = this.style.background;
        console.log(ClickedColor,pickedColor)
        if(ClickedColor === pickedColor){
            messagedisplay.textContent = "correct"
            resetButton.textContent = "play again"
            changeColors(ClickedColor);
            h1.style.background = ClickedColor
        }else{
            this.style.background = "#232323"
            messagedisplay.textContent = "try again"
            
        }
    })
}
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor()    {
    var random = Math.floor( Math.random() * colors.length );
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()  {
    var r = Math.floor( Math.random() * 256 );
    var g = Math.floor( Math.random() * 256 );
    var b = Math.floor( Math.random() * 256 );

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
