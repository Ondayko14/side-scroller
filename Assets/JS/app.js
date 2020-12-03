var canvas = document.getElementById("game-area");
var ctx = canvas.getContext('2d');
ctx.translate(0.5, 0.5);


//randomly sized rectangle generator
var rectangle = function () {
    //random generators
    randomY = Math.floor(Math.random() * canvas.height);
    randomW = Math.floor(Math.random() * canvas.width);
    randomH = Math.floor(Math.random() * canvas.height);


    //create the rectangles
    ctx.fillStyle = getColor();
    ctx.fillRect(canvas.width-100, randomY, randomW, randomH);

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    //move the rectangles
    ctx.translate(100, 100);
    ctx.fillRect(canvas.width-100, randomY, randomW, randomH);

};

//Random Color for fill style
var getColor = function () {
    var color0 = "#E9C46A";
    var color1 = "#F4A261";
    var color2 = "#264653";
    var color3 = "#E76F51";

    var randomColorSelector = Math.abs(Math.floor(Math.random() * 4));

    switch (randomColorSelector) {
        case 0:
            return color0;
            break;
        case 1:
            return color1;
            break;
        case 2:
            return color2;
            break;
        case 3:
            return color3;
            break;
    }
};

rectangle();