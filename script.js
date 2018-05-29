var mood = setInterval(updateMood, 1000);
var myName = window.prompt('What will you name me?', 'Billy')
var moodLevel = 1
var imageFile = ''

function getIntro() {
  var intro = document.getElementById('intro')
  if (myName == null || myName == "") {
      intro.innerHTML = "How about naming me Billy?";
  } else {
      intro.innerHTML =  "Ooh! I like the name " + myName + "! I'm excited to be your new pet rock!";
      writeCookie(myName);
      console.log('attempting to write cookie from script.js')
  }
}

function updateMood() {
  var imageFile = document.getElementById('billy')
  if (moodLevel < 5) {
    imageFile.src = 'emotions/face' + moodLevel + '.png'
    moodLevel++
  } else {
    moodLevel = 5
    imageFile.src = 'emotions/face' + moodLevel + '.png'
    // moodLevel = 1
  }
}

function resetBilly() {
  moodLevel = 1
  updateMood()
  console.log('clicking this button will reset billy to his default face')
}

function myStopFunction() {
    clearTimeout(mood);
    console.log('you have stopped the timer')
}
