var circles = [0,40,80,120,160,200,240,280,320,360]
// let cx = 200
let cr = 20

function setup() {
    // creating and coloring the canvas so that I can see what is happening 
    // always checking the liveserver and console before moving on to the next step
    createCanvas(800, 800);
    

}
function draw() {
    background(50);
for (var i = 0; i < circles.length;i++) {
    circle(circles[i] + 100,mouseY, (10000/(mouseX)))
    fill(10*(255/mouseX))
    
}
}
// function mouseIsPressed() {

// }

