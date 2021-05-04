//custom cursor from: https://codepen.io/designcourse/pen/GzJKOE
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("swipe");

  setTimeout(() => {
      cursor.classList.remove("swipe");
  }, 100)
})

/* Play an animation: https://codepen.io/useAnimations/pen/VOJEEm*/
let iconSkipForward = document.querySelector('.bodymovinanim');

let animationSkipForward = bodymovin.loadAnimation({
        container: iconSkipForward,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'moneyflees.json'
});



//count the click, from W3School
var count = 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");

countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
  animationSkipForward.playSegments([1,60], true);
}

document.addEventListener("keyup", function(event) {
  if (event.key === 'r') {
    count = 0;
    displayCount.innerHTML = count;
  }
});



