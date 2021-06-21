var count = 6;
var colors = generatecolorsArr(count);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("#heading");
var correctcolor = correct();
var message = document.querySelector("#status");
var colordisplay = document.getElementById("displaycolor");
var reset = document.getElementById("reset");
var mode = document.querySelectorAll(".mode");
for(var i=0; i< mode.length; i++)
{
    mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy"? count = 3 : count = 6;
        res();
    })
}
function res()
{
    colors = generatecolorsArr(count);
    correctcolor = correct();
    message.textContent="";
    reset.textContent="New Colors";
    colordisplay.textContent = correctcolor;
    for(var i=0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else
        { 
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
reset.addEventListener("click",function(){
    res();
}); 
colordisplay.textContent = correctcolor;
for(var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var guessedcolor = this.style.backgroundColor;
        if (guessedcolor == correctcolor)
        {
            message.textContent = "correct!!";
            changecolor(correctcolor);
            h1.style.backgroundColor = guessedcolor;
            reset.textContent = "Play Again!!!"
        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "try again!";   
        }
    });
} 
function changecolor(color)
{
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}
function correct()
{
    var rcolor = Math.floor(Math.random() * colors.length);
    return colors[rcolor];
}
function generatecolorsArr(num)
{
    var arr = [];
    for(var i=0; i < num; i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}
function randomcolor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g +", " + b + ")";
}

