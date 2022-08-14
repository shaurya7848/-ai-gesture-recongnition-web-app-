nosex = 0;
nosey = 0;
difference = 0;
rightWristx = 0;
leftWristx = 0;


function setup()
{
video = createCapture(VIDEO);
video.size(550 , 500);

canvas = createCanvas(550 , 550 );
canvas.position(560,150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose net is intialized')
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex = " + nosex + "mosey = " + nosey);

leftWristx = results[0].pose.leftWrist.x;
rightWristx = results[0].pose.rightWrist.x;
difference = floor(leftWristx - rightWristx);

console.log("leftwristx = " + leftWristx + "rightwrsitx" + rightWristx);
}
}

function draw()
{
background('#96A96');
document.getElementById("square_size").innerHTML = "Width and height of the sqaure will be  = " + difference + "px";
fill('#F90093');
stroke('#F90093');
square(nosex,nosey,difference);
}
