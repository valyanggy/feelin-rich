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
// let iconSkipForward = document.querySelector('.bodymovinanim');

// let animationSkipForward = bodymovin.loadAnimation({
//         container: iconSkipForward,
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         path: 'moneyflees.json'
// });



//count the click, from W3School
var count = 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");

countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
  // animationSkipForward.playSegments([1,60], true);
  

  if (count % 5 == 0){
  var id = null;
  var elem = document.getElementById("tongue");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}


  }
// }


document.addEventListener("keyup", function(event) {
  if (event.key === 'r') {
    count = 0;
    displayCount.innerHTML = count;
  }
});



//play audio from: https://codepen.io/abirana/pen/GdzQRb
var playBtn = document.getElementById('tongue'),
  hearbeat = document.getElementById('heartbeat')
  audios = document.querySelectorAll('audio');
  
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
  var elem = document.getElementById("tongue");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }

}, false);




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
// let iconSkipForward = document.querySelector('.bodymovinanim');

// let animationSkipForward = bodymovin.loadAnimation({
//         container: iconSkipForward,
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         path: 'moneyflees.json'
// });



//count the click, from W3School
var count = 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");

countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
  // animationSkipForward.playSegments([1,60], true);
  

  if (count % 5 == 0){
  var id = null;
  var elem = document.getElementById("tongue");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}


  }
// }


document.addEventListener("keyup", function(event) {
  if (event.key === 'r') {
    count = 0;
    displayCount.innerHTML = count;
  }
});



//play audio from: https://codepen.io/abirana/pen/GdzQRb
var playBtn = document.getElementById('tongue'),
  hearbeat = document.getElementById('heartbeat')
  audios = document.querySelectorAll('audio');
  
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
  var elem = document.getElementById("tongue");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }

}, false);





