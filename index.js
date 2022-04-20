// const canvasObj = document.getElementById("canvas").getContext("2d");


// var xPos = [];
// var yPos = [];
// var playerCords = {
//     x: 0,
//     y: 0
// }



Crafty.init(1000,350, document.getElementById('game'));

// Player:

// You can set components when you create the entity
var player = Crafty.e('2D, DOM, Color, Twoway, Gravity')
.attr({x: 0, y: 0, w: 100, h: 100})
.color('#F00');

// Or you can add or remove them later
player.addComponent("Twoway, Gravity");
player.twoway(200)
    .gravity("Floor")
    .gravityConst(1100);




// Floor Entity:
Crafty.e("Floor, 2D, Canvas, Color")
.attr({x: 0, y: 250, w: 900, h: 10})
.color('green');







// function getRadnomPos() {
//     for (let index = 0; index < 4; index++) {
//         var testThingy = getRandomInt(100);
//         console.log(testThingy);
//         if (testThingy % 2 == 0) {
//             xPos.push(getRandomInt(180));
//         } else {
//             xPos.push(-1 * (getRandomInt(180)));
//         }
//     }

//     for (let index = 0; index < 4; index++) {
//         var testThingy = getRandomInt(100);
//         console.log(testThingy);
//         if (testThingy % 2 == 0) {
//             yPos.push(getRandomInt(180));
//         } else {
//             yPos.push(-1 * (getRandomInt(180)));
//         }
//     }
// }

// getRadnomPos();
// console.log(xPos);
// console.log(yPos);



// function drawCoordinates(x,y, pointSize){
//     x = x + 180;
//     y = y + 180;
//     // console.log(`Drawing circle at (${x}, ${y})`);
//     // var pointSize = 3; // Change according to the size of the point.


//     canvasObj.fillStyle = "#ff2626"; // Red color

//     canvasObj.beginPath(); //Start path
//     canvasObj.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvasObj with a point structure.
//     canvasObj.fill(); // Close the path and fill.
// }







// $("body").keypress(function(event){
//     var pressed = String.fromCharCode(event.which);
//     // alert(pressed);

//     console.log(pressed);

//     if (pressed == "d") {
//         playerCords.x += 10;
//     } else if (pressed == "a") {
//         playerCords.x -= 10;
//     } else if (pressed == "s") {
//         playerCords.y += 10;
//     } else if (pressed == "w") {
//         playerCords.y -= 10;
//     }
    
//   });


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }


// function render() {

//     canvasObj.clearRect(0, 0, canvas.width, canvas.height);


//     drawCoordinates(playerCords.x, playerCords.y, 10);

//     drawCoordinates(180, 180, 5);
//     drawCoordinates(180, -180, 5);
//     drawCoordinates(-180, -180, 5);
//     drawCoordinates(-180, 180, 5);


//     var i = 0;
//     xPos.forEach(element => {
//         drawCoordinates(element, yPos[i], 3);

//         i++; 
//     });
// }

// setInterval(() => {
//     render();
// }, 10);


