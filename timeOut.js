

let leftOffSet = 0;
let topMove = 0;
let moveHeading = function() {
    $("#heading").offset({left: leftOffSet});
    leftOffSet++;
    if (leftOffSet>200) {
        let leftOffSet = 0;
    }
};

setInterval(moveHeading, 25);

let clickHandler = function (event) {
    console.log("click " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);


$("html").click(function(event){
   $("#mousemove").offset({
       left: event.pageX,
       top: event.pageY
   })
});

