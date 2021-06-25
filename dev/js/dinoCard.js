function _(selector){
  return document.querySelector(selector);
}
function setup() {
  let canvas=createCanvas(650,600);
  canvas.parent("canvasWrapper");
  background(255);
}
function mouseDragged(){
  let type= _("#penPen").checked?"pen":"brush";
  let size=parseInt(_("#penSize").value);
  let color=_("#penColor").value;
  fill(color);
  stroke(color);
  if(type=="pen"){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }else{
    ellipse(mouseX, mouseY, size, size);
  }
}