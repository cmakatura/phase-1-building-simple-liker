// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let callServerAndCatch = () => {
  mimicServerCall()
  .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
modal.classList.remove('hidden')
let p = document.createElement('p')
p.innerText = errorMessage
modal.appendChild(p)
setTimeout(() => {
  modal.classList.add('hidden')}, 3000)
}

let emptyHeartsArray = [...document.getElementsByClassName("like-glyph")]
//let emptyHeartsArray = [...emptyHearts]
console.log(emptyHeartsArray)

for (let index = 0; index < emptyHeartsArray.length; index++){
  emptyHeartsArray[index].addEventListener('click', callServerAndCatch, false);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
