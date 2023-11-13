var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

var zf = Math.floor(document.documentElement.clientWidth/500)
var zfp = String(100*zf)+"%"
document.body.style.zoom = zfp
console.log(zfp)