let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHit = function (distance) {
    if (distance < 10) {
        return "Very hot!";
    } else if (distance < 20) {
        return "Hot!";
    } else if (distance < 40) {
        return "Warm!";
    } else if (distance < 80) {
        return "Not bad!";
    } else if (distance < 160) {
        return "Cold!";
    } else if (distance < 320) {
        return "Very cold!";
    } else {
        return "You are Sub Ziro!";
    }
};


let width = 640;
let height = 640;
let click = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
$("#map").click(function (event) {
    click++;
    let distance = getDistance(event, target);
    let distanceHit = getDistanceHit(distance);
    $("#distance").text(distanceHit + "You have " + click + " clicks");
    $("#distance").css("font-size", "40px");

    if (distance<8) {
        alert("Congratulation, You are win! Clicks: " + click);
    }
    if (click>25) {
        alert("Game over!")
    }
});


