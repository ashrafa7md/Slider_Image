var slideImage = Array.from(document.querySelectorAll(".container img")),
  slideNum = document.getElementById("slide-num"),
  slideCount = slideImage.length,
  currSlide = slideCount,
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next");
    prevBtn.onclick = prevSlide;
    nextBtn.onclick = nextSlide;

var indBullets = document.createElement("ul");
indBullets.setAttribute("id", "ind-ul");
for (let i = 1; i <= slideCount; i++) {
    var indItem = document.createElement("li");
    indItem.setAttribute("data-set", i);
    indItem.appendChild(document.createTextNode(i));
    indBullets.appendChild(indItem);
}
document.getElementById("ind").appendChild(indBullets);
var bulltes = Array.from(document.querySelectorAll("#ind-ul li"));
for (i = 0; i < bulltes.length; i++){
    bulltes[i].onclick = function () {
        currSlide = parseInt(this.getAttribute('data-set'))
        check()
    }
}
check()

function nextSlide() {
    if (nextBtn.classList.contains('disabled')) {
        return false;
    } else {
        currSlide++;
        check();
    }
}
function prevSlide() {
   if (prevBtn.classList.contains("disabled")) {
     return false;
   } else {
     currSlide--;
     check();
   }
} 
function check() {
    slideNum.textContent = "Slide # " + currSlide + " of " + slideCount;
    remove();
  slideImage[currSlide - 1].classList.add("active");
    indBullets.children[currSlide - 1].classList.add("active");
    if (currSlide == 1) {
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled')
    }
    if (currSlide == slideCount) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
}
function remove() {
    slideImage.forEach(function (img){
        img.classList.remove('active')
    })
    bulltes.forEach(function (bullet) {
        bullet.classList.remove("active");
    })
}