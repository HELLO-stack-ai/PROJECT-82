var mouse_event="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="green";
width_of_line=2;


canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseleave";
}



canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
   current_position_of_mousex= e.clientX-canvas.offsetLeft;
    current_position_of_mousey= e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.lineWidth=widthoftheline;
    ctx.strokeStyle=color;
    
    console.log("last position of x and y coordinates =");
    console.log("x= " + last_position_of_x + "y= " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current position of x and y coordinates =");
    console.log("x= " + current_position_of_mousex + "y= " + current_position_of_mousey);
    ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
    ctx.stroke();
}
last_position_of_x=current_position_of_mousex;
last_position_of_y=current_position_of_mousey;
}

    