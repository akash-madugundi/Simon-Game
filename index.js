var lev, random, storeColors;
let currPos;
var started = false;
$(document).keydown(function (e){
    if(!started){
        $("h1").text("Level 1");
        restartLvl();
        started = true;
        // $("button").click(handleClick);
    }
})

function restartLvl(){
    lev = 1;
    storeColors = [];
    started = false;
    nextLevel();
}

// for(var i=0; i<4; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }
$("button").click(handleClick);

function nextLevel(){
    currPos = 0;
    random = Math.floor((Math.random()*4)+1);
    storeColors.push(random);
    // console.log(storeColors);
    animate(random);
    // console.log("ran", random);
    // $("button").click(handleClick);       // recursion lev 1 2 4 8....

    // for(var i=0; i<4; i++){
    //     document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    // }
}

function handleClick(){
    var btnID = this.id;        // green, red, yellow, blue
    btn = "#"+btnID;
    $(btn).addClass("click");
    var snd = new Audio("sounds/" + btnID + ".mp3");
    snd.play();
    setTimeout(function() {
        $(btn).removeClass("click");
    }, 80)

    var arr = ["green", "red", "yellow", "blue"];
    let btnNo = arr.indexOf(btnID) + 1;
    if(storeColors[currPos] == btnNo){
        currPos++;
        if(currPos == storeColors.length){
            lev++;
            // console.log("ran ", random, "lev", lev);
            setTimeout(function(){
                $("h1").text("Level " + lev);
                nextLevel();
            }, 1000);
        }
    }
    else{
        $("h1").text("Game Over, Press any key to restart");
        $("body").addClass("error");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        setTimeout(function() {
            $("body").removeClass("error");
        }, 100)
        restartLvl();
    }
}

// $("button").off("click").on("click", handleClick);

function animate(){
    switch(random){
        case 1:
            $("#green").addClass("generate");
            var green = new Audio("sounds/green.mp3");
            green.play();
            setTimeout(function() {
                $("#green").removeClass("generate");
            }, 100)
            break;
        case 2:
            $("#red").addClass("generate");
            var red = new Audio("sounds/red.mp3");
            red.play();
            setTimeout(function() {
                $("#red").removeClass("generate");
            }, 100)
            break;
        case 3:
            $("#yellow").addClass("generate");
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            setTimeout(function() {
                $("#yellow").removeClass("generate");
            }, 100)
            break;
        case 4:
            $("#blue").addClass("generate");
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            setTimeout(function() {
                $("#blue").removeClass("generate");
            }, 100)
            break;
        default:
            $("h1").text("Error");
            var err = new Audio("sounds/wrong.mp3");
            err.play();
            break;
    }
}


// var started, random, colorPattern = [], userPattern = [];
// var colors = ["green", "red", "yellow", "blue"];

// $(document).keydown(function(){
//     if(!started){
//         $("h1").text("Level " + lev);
//         startLev();
//         started = true;
//     }
// })

// function startLev(){
//     random = Math.floor((Math.random()*4));         // 0,1,2,3
//     animate(random);
//     makeSound(random);
// }