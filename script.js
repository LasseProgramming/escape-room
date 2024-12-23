
let light1 = false;
let light2 = true;
let light3 = false;
let light4 = true;
let light5 = true;
let light6 = true;
let light7 = false;
let light8 = true;
let light9 = false;
let disableLight = false;



function flipLights(num) {
    if (!disableLight) {
        if (num === 1) {
            if(light1) {
                document.getElementById("light1").src = "images/light-off.png";
                light1 = false;
            } else {
                document.getElementById("light1").src = "images/light-on.png";
                light1 = true;
            }
            if(light2) {
                document.getElementById("light2").src = "images/light-off.png";
                light2 = false;
            } else {
                document.getElementById("light2").src = "images/light-on.png";
                light2 = true;
            }
            if(light4) {
                document.getElementById("light4").src = "images/light-off.png";
                light4 = false;
            } else {
                document.getElementById("light4").src = "images/light-on.png";
                light4 = true;
            }
        }
        if (num === 2) {
            if(light3) {
                document.getElementById("light3").src = "images/light-off.png";
                light3 = false;
            } else {
                document.getElementById("light3").src = "images/light-on.png";
                light3 = true;
            }
            if(light2) {
                document.getElementById("light2").src = "images/light-off.png";
                light2 = false;
            } else {
                document.getElementById("light2").src = "images/light-on.png";
                light2 = true;
            }
            if(light6) {
                document.getElementById("light6").src = "images/light-off.png";
                light6 = false;
            } else {
                document.getElementById("light6").src = "images/light-on.png";
                light6 = true;
            }
        }
        if (num === 3) {
            if(light2) {
                document.getElementById("light2").src = "images/light-off.png";
                light2 = false;
            } else {
                document.getElementById("light2").src = "images/light-on.png";
                light2 = true;
            }
            if(light4) {
                document.getElementById("light4").src = "images/light-off.png";
                light4 = false;
            } else {
                document.getElementById("light4").src = "images/light-on.png";
                light4 = true;
            }
            if(light5) {
                document.getElementById("light5").src = "images/light-off.png";
                light5 = false;
            } else {
                document.getElementById("light5").src = "images/light-on.png";
                light5 = true;
            }
            if(light6) {
                document.getElementById("light6").src = "images/light-off.png";
                light6 = false;
            } else {
                document.getElementById("light6").src = "images/light-on.png";
                light6 = true;
            }
            if(light8) {
                document.getElementById("light8").src = "images/light-off.png";
                light8 = false;
            } else {
                document.getElementById("light8").src = "images/light-on.png";
                light8 = true;
            }
        }
        if (num === 4) {
            if(light4) {
                document.getElementById("light4").src = "images/light-off.png";
                light4 = false;
            } else {
                document.getElementById("light4").src = "images/light-on.png";
                light4 = true;
            }
            if(light7) {
                document.getElementById("light7").src = "images/light-off.png";
                light7 = false;
            } else {
                document.getElementById("light7").src = "images/light-on.png";
                light7 = true;
            }
            if(light8) {
                document.getElementById("light8").src = "images/light-off.png";
                light8 = false;
            } else {
                document.getElementById("light8").src = "images/light-on.png";
                light8 = true;
            }
        }
        if (num === 5) {
            if(light6) {
                document.getElementById("light6").src = "images/light-off.png";
                light6 = false;
            } else {
                document.getElementById("light6").src = "images/light-on.png";
                light6 = true;
            }
            if(light8) {
                document.getElementById("light8").src = "images/light-off.png";
                light8 = false;
            } else {
                document.getElementById("light8").src = "images/light-on.png";
                light8 = true;
            }
            if(light9) {
                document.getElementById("light9").src = "images/light-off.png";
                light9 = false;
            } else {
                document.getElementById("light9").src = "images/light-on.png";
                light9 = true;
            }
        }
        if (light1 && light2 && light3 && light4 && light5 && light6 && light7 && light8 && light9) {
            disableLight = true;
            document.getElementById("light-switch").classList.add("move-light-switch");
        }
    }
}

function pinHint() {
    document.getElementById("hint-pin").classList.remove("hidden");
}

function closeScreen() {
    document.getElementById("computer-screen-container").classList.add("hidden");
}

function openScreen() {
    document.getElementById("computer-screen-container").classList.remove("hidden");
}

function enterPin() {
    if(document.getElementById("pin-input").value === "9369") {
        document.getElementById("login-screen").style.display = "none";
    }
}

function moveRug() {
    document.getElementById("rug").style.left = "500px";
}

function movePlant() {
    document.getElementById("plant").style.right = "150px";
    document.getElementById("plant").style.top = "470px";
}

function clickKey1() {
    document.getElementById("key1").style.left = "505px";
    document.getElementById("key1").style.top = "560px";
    document.getElementById("key1").style.transform = "rotate(0deg)";

    setTimeout(function() {
        document.getElementById("key1").classList.add("hidden");
        document.getElementById("lock3").classList.add("hidden");
    }, 500);
    setTimeout(function() {
        openChest()
    }, 1000);
}

function clickKey2() {
    document.getElementById("key2").style.right = "790px";
    document.getElementById("key2").style.top = "560px";
    document.getElementById("key2").style.transform = "rotate(0deg)";

    setTimeout(function() {
        document.getElementById("key2").classList.add("hidden");
        document.getElementById("lock2").classList.add("hidden");
    }, 500);
    setTimeout(function() {
        openChest()
    }, 1000);
}

function clickKey3() {
    document.getElementById("key3").style.left = "435px";
    document.getElementById("key3").style.top = "560px";
    document.getElementById("key3").style.transform = "rotate(0deg)";

    setTimeout(function() {
        document.getElementById("key3").classList.add("hidden");
        document.getElementById("lock1").classList.add("hidden");
    }, 500);
    setTimeout(function() {
        openChest()
    }, 1000);
}

function openChest() {



    if(document.getElementById("lock1").classList.contains("hidden") && document.getElementById("lock2").classList.contains("hidden") && document.getElementById("lock3").classList.contains("hidden")) {
        document.getElementById("chest-open").src = "images/chest-open.png";
        popMathBook()
    }
}

function updateClockHands() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Calculate the rotation degrees for the hour and minute hands
    var hourRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 degrees per minute
    var minuteRotation = minutes * 6; // 6 degrees per minute

    // Update the rotation of the hour hand
    document.getElementById("hour-hand").style.transform = "rotate(" + hourRotation + "deg)";

    // Update the rotation of the minute hand
    document.getElementById("minut-hand").style.transform = "rotate(" + minuteRotation + "deg)";
}

// Call updateClockHands every minute


document.addEventListener("DOMContentLoaded", function() {
    setInterval(updateClockHands, 60000); 
    updateClockHands();
});

function enlargeCogBox1() {
    if(document.getElementById("cog-box-1").classList.contains("hidden")) {
        moveCog1();
    } else {
        document.getElementById("cog-box-1").classList.remove("cog-box-shelf-1");
        document.getElementById("cog-box-1").classList.add("cog-box");
        document.getElementById("close-cog-1").classList.remove("hidden");
        document.getElementById("close-cog-1").classList.add("btn-close");
    }
}

function minifyCogBox1() {
    document.getElementById("cog-box-1").classList.add("cog-box-shelf-1");
    document.getElementById("cog-box-1").classList.remove("cog-box");
    document.getElementById("close-cog-1").classList.add("hidden");
    document.getElementById("close-cog-1").classList.remove("btn-close");
}

function enlargeCogBox2() {
    if(document.getElementById("cog-box-2").classList.contains("hidden")) {
        moveCog2();
    } else {
        document.getElementById("cog-box-2").classList.remove("cog-box-shelf-2");
        document.getElementById("cog-box-2").classList.add("cog-box");
        document.getElementById("close-cog-2").classList.remove("hidden");
        document.getElementById("close-cog-2").classList.add("btn-close");
    }
}

function minifyCogBox2() {
    document.getElementById("cog-box-2").classList.add("cog-box-shelf-2");
    document.getElementById("cog-box-2").classList.remove("cog-box");
    document.getElementById("close-cog-2").classList.add("hidden");
    document.getElementById("close-cog-2").classList.remove("btn-close");
}

function enlargeCogBox3() {
    if(document.getElementById("cog-box-3").classList.contains("hidden")) {
        moveCog3();
    } else {
        document.getElementById("cog-box-3").classList.remove("cog-box-shelf-3");
        document.getElementById("cog-box-3").classList.add("cog-box");
        document.getElementById("close-cog-3").classList.remove("hidden");
        document.getElementById("close-cog-3").classList.add("btn-close");
    }
        
}

function minifyCogBox3() {
    document.getElementById("cog-box-3").classList.add("cog-box-shelf-3");
    document.getElementById("cog-box-3").classList.remove("cog-box");
    document.getElementById("close-cog-3").classList.add("hidden");
    document.getElementById("close-cog-3").classList.remove("btn-close");
}

function moveCog1() {
    const element = document.getElementById("cog1");
    element.style.top = "390px";
    element.style.left = "1060px";
    setInterval(function() {
        element.classList.add("hidden");
        updateGiftinator();
    }, 500)
}

function moveCog2() {
    const element = document.getElementById("cog2");
    element.style.top = "365px";
    element.style.left = "1085px";
    setInterval(function() {
        element.classList.add("hidden");
        updateGiftinator();
    }, 500)
}


function moveCog3() {
    const element = document.getElementById("cog3");
    element.style.top = "330px";
    element.style.left = "1065px";
    setInterval(function() {
        element.classList.add("hidden");
        updateGiftinator();
    }, 500)
}


function enlargeEssay() {
    document.getElementById("essay").classList.remove("essay-small");
    document.getElementById("essay").classList.add("essay-big");
    document.getElementById("close-essay").classList.remove("hidden");
}

function minifyEssay() {
    document.getElementById("essay").classList.add("essay-small");
    document.getElementById("essay").classList.remove("essay-big");
    document.getElementById("close-essay").classList.add("hidden");
}

function incLock(num) {
    const element = document.getElementById("pad-lock-" + num);
    if (element.innerHTML < 9) {
        element.innerHTML = parseInt(element.innerHTML) + 1;
    }
}

function decLock(num) {
    const element = document.getElementById("pad-lock-" + num);
    if (element.innerHTML > 0) {
        element.innerHTML = parseInt(element.innerHTML) - 1;
    }
}

function popMathBook() {
    const element = document.getElementById("math-book");
    if (element.style.visibility !== "visible") {
        element.style.visibility = "visible";
        element.style.top = "590px"
        element.classList.remove("hidden");
        element.style.top = "500px"
        element.style.left = "500px"
        element.style.transform = "rotate(1turn)"
        setTimeout(function() {
            element.style.top = "590px"
        }, 250);
    }

}

function openMath() {
    const element = document.getElementById("math-book-container").classList.remove("hidden");
}

function closeMath() {
    const element = document.getElementById("math-book-container").classList.add("hidden");
}

function checkLock1() {
    if (document.getElementById("pad-lock-1").innerHTML == 0 
        && document.getElementById("pad-lock-2").innerHTML == 4
        && document.getElementById("pad-lock-3").innerHTML == 5
        && document.getElementById("pad-lock-4").innerHTML == 7) {
            document.getElementById("cog-box-1").classList.add("hidden");
    }
}

function checkLock2() {
    if (document.getElementById("pad-lock-5").innerHTML == 8 
        && document.getElementById("pad-lock-6").innerHTML == 1
        && document.getElementById("pad-lock-7").innerHTML == 2
        && document.getElementById("pad-lock-8").innerHTML == 7) {
            document.getElementById("cog-box-2").classList.add("hidden");
    }
}

function checkLock3() {
    if (document.getElementById("pad-lock-9").innerHTML == 7 
        && document.getElementById("pad-lock-10").innerHTML == 8
        && document.getElementById("pad-lock-11").innerHTML == 5
        && document.getElementById("pad-lock-12").innerHTML == 2) {
            document.getElementById("cog-box-3").classList.add("hidden");
    }
}

function closeColors() {
    document.getElementById("colors-container").classList.add("hidden");
}

function openColors() {
    document.getElementById("colors-container").classList.remove("hidden");
}

function updateGiftinator() {
    const cog1 = document.getElementById("cog1");
    const cog2 = document.getElementById("cog2");
    const cog3 = document.getElementById("cog3");

    if(cog1.classList.contains("hidden") && cog2.classList.contains("hidden") && cog3.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-complete-new.png';
        document.getElementById("wall-button-popped").classList.remove("hidden");
    } else if (cog1.classList.contains("hidden") && cog2.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-12.png';
    } else if (cog1.classList.contains("hidden") && cog3.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-13.png';
    } else if (cog2.classList.contains("hidden") && cog3.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-23.png';
    } else if (cog1.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-1.png';
    } else if (cog2.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-2.png';
    } else if (cog3.classList.contains("hidden")) {
        document.getElementById("giftinator").src = 'images/giftinator-3.png';
    }
}


function final() {
    document.getElementById("giftinator-container").style.transform = "perspective(500px) rotateY(-160deg)";
    popGift()
}

function popGift() {
    const element = document.getElementById("gift");
    setTimeout(function() {
        element.style.zIndex = "15";
        element.style.right = "455px"
        element.style.transform = "rotate(1turn)"
        setTimeout(function() {
            element.style.top = "620px"
        }, 2000);
    }, 1000);

}

function popPresent() {
    document.getElementById("present").classList.remove("hidden");
}