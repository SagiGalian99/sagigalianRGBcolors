function mode1(){
    document.getElementById("middleDivMode1").style.visibility = "visible";
    document.getElementById("middleDivMode2").style.visibility = "hidden";
    document.getElementById("middleDivDefault").style.visibility = "hidden";
}
function mode2(){
    document.getElementById("middleDivMode1").style.visibility = "hidden";
    document.getElementById("middleDivMode2").style.visibility = "visible";
    document.getElementById("middleDivDefault").style.visibility = "hidden";
}
function mode3(){
    document.getElementById("middleDivMode1").style.visibility = "hidden";
    document.getElementById("middleDivMode2").style.visibility = "hidden";
    document.getElementById("middleDivDefault").style.visibility = "visible";
}

function seeColor(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    document.getElementById("colorSee").style.backgroundColor = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
}
function findRgbColor(){
    const colors = ["red","green","blue","black","white","yellow","cyan","purple","orange","gray"];
    const rgb = ["(255, 0, 0)","(0, 255, 0)","(0, 0, 255)","(0, 0, 0)","(255, 255, 255)","(255, 255, 0)","(0, 255, 255)","(128, 0, 128)","(255, 102, 0)","(150, 150, 150)"];

    var color = document.getElementById("colorName").value;
    color = color.toLowerCase();
    var findColor = false;
    for (var i = 0; i < colors.length; i++){
        if (color == colors[i]){
            document.getElementById("rgbName").innerHTML = rgb[i];
            findColor = true;
        }
    }
    if (findColor == false){
        document.getElementById("rgbName").innerHTML = "Cant find this color"
    }
}
