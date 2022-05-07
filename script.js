window.onload = function () {
  var main = document.getElementById("main");
ee = main.getContext("2d")
let person_img = new Image();
var x = 0
var y = 0
person_img = function () {
  document.getElementById("img1").remove();
  ee.drawImage(person_img, x, y);
};
person_img.src = document.getElementById("img1").src;
document.addEventListener("keydown", KeyDownHandler, false);
//document.addEventListener("keyup",KeyUpHandler, false);
function KeyDownHandler(e) {
  if (e.key == "Left" || e.key == "ArrowLeft") {
    x += 1
  }
  if (e.key == "Right" || e.key == "ArrowRight") {
    x -= 1
  }
}
function rendr() {
  ee.drawImage(person_img.src, x, y);
}
setInterval(rendr, 10)
}