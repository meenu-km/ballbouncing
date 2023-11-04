var first_canvas=document.getElementById("canvas")
var context=first_canvas.getContext("2d")
var x1 = first_canvas.width/2
var y1 = first_canvas.height/2
var radius = 50;
var horizontal_speed = 0
var vertical_speed = 0
var count=0

var bounce_count=document.getElementById("display_count")
var reset_count=document.getElementById("reset_button")

function draw(){
    var gradient = context.createRadialGradient(x1, y1, 0, x1, y1, radius);
    gradient.addColorStop(0, "rgb(187, 215, 237)");  // Lighter color at the center
    gradient.addColorStop(1, "rgb(10, 10, 103)"); 
    context.clearRect(0,0,first_canvas.width,first_canvas.height)
    context.beginPath()
    context.arc(x1,y1,radius,0,2*Math.PI)
    context.fillStyle = gradient;
    context.fill()
    context.closePath()
    context.stroke()
}

function update_coordinates(){
    x1+=horizontal_speed
    y1+=vertical_speed
    if(x1+radius > first_canvas.width || x1-radius < 0){
        horizontal_speed = -horizontal_speed
    }
    if(y1+radius > first_canvas.height || y1-radius < 0){
        vertical_speed = -vertical_speed
    }
}
function bounce_ball(){
    draw()
    update_coordinates()
    requestAnimationFrame(bounce_ball)
}
bounce_ball()

first_canvas.addEventListener("click", function(event){
var x2=event.clientX - first_canvas.getBoundingClientRect().left
var y2=event.clientY - first_canvas.getBoundingClientRect().top
if(x2<radius || x2>first_canvas.width - radius || y2<radius || y2>first_canvas.height-radius){
    x1=x2
    y1=y2
    count++
    bounce_count.textContent=count
    horizontal_speed=2
    vertical_speed=2
}
else{
    x1=x2
    y1=y2
    count++
    bounce_count.textContent=count
    horizontal_speed=0
    vertical_speed=0
}
})

reset_count.addEventListener("click",function(){
    count=0
    bounce_count.textContent=count
})

$(document).ready(function(){
    $("#about_button").click(function(){
        $("#about_para").slideToggle("slow")
    })
    $("#how_to_play").click(function(){
        $("#how_to_para").slideToggle("slow")
    })
})