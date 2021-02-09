Canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

Car1_x = 100;
Car1_y = 100;

Car1_height = 100;
Car1_width = 100;

Car1_image = "car1.png";


Car2_x = 100;
Car2_y = 100;

Ca21_height = 100;
Car2_width = 100;

Car2_image = "car1.png";

background = "racing.jpg";


function add(){
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src =background;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = Car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = Car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag, 0, 0 , canvas.width,canvas.height);
}
function uploadcar1(){
ctx.drawImage(car1_imgTag, Car1_x,Car1_y,Car1_width, Car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, Car2_x,Car2_y,Car2_width, Car2_height);
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed =='87')
    {
        upCar1();
        console.log("W");
    }

    if(keypressed =='83')
    {
        downCar1();
        console.log("S");
    }

    if(keypressed =='65')
    {
        leftCar1();
        console.log("A");
    }

    if(keypressed =='68')
    {
        rightCar1();
        console.log("D");
    }

    if(keypressed =='73')
    {
        UpCar2();
        console.log("I");
    }

    if(keypressed =='75')
    {
        DownCar2();
        console.log("K");
    }

    if(keypressed =='74')
    {
        LeftCar2();
        console.log("J");
    }

    if(keypressed =='76')
    {
        RightCar2();
        console.log("L");
    }

}
function upCar1(){
    if(Car1_y >=0)
    {
        Car1_y -=10;
        console.log("When W is pressed =" + Car1_x +"   -  " +Car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function downCar1()
{
    if(Car1_y <=500)
    {
        Car1_y +=10;
        console.log("When S is pressed, x =" + Ca1_x +" y = "+Car1_y);
        uploadBackground();
        uploadcar1();   
     }
}

function leftCar1()
{
    if(Car1_x >= 0);
    {
        Car1_x -= 10;
        console.log("When A is pressed, x=" + Car1_x +"y = " + Car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function rightCar1()
{
    if(Car1_x <= 700)
    {
        Car1_x += 10;
        console.log("When D is pressed, x = " + Car1_x + "y = "+Car1_y);
        uploadBackground();
        uploadcar1();    }
}


function UpCar2(){
    if(Car2_y >=0)
    {
        Car1_y -=10;
        console.log("When I is pressed =" + Car2_x +"   -  " +Car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function DownCar2()
{
    if(Car2_y <=500)
    {
        Car2_y +=10;
        console.log("When J is pressed, x =" + Car2_x +" y = "+Car2_y);
        uploadBackground();
        uploadcar2();   
     }
}

function LeftCar2()
{
    if(Car2_x >= 0);
    {
        Car2_x -= 10;
        console.log("When J is pressed, x=" + Car2_x +"y = " + Car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function RightCar2()
{
    if(Car2_x <= 700)
    {
        Car2_x += 10;
        console.log("When L is pressed, x = " + Car2_x + "y = "+Car2_y);
        uploadBackground();
        uploadcar2();    }
}
if (Car1_x > 700)
{
    console.log("car1 won");
    document.getElementById('game_status').innerHTML="car1 won!!"
}

if (Car2_x > 700)
{
    console.log("car2 won");
    document.getElementById('game_status').innerHTML="car2 won!!"
}