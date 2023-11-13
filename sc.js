var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

var zf = Math.floor((document.documentElement.clientHeight/700)*10)
var zfp = String(10*zf)+"%"
document.body.style.zoom = zfp
console.log(zfp)