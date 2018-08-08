// MUPPET Array
const MUPPETS = [
  { name: 'animal', ulr: '..images/animal.png'},
  { name: 'kermit', url: '..images/kermit.png'},
  { name: 'dr honeydew', url: '..images/drhoneydew.png'},
  { name: 'dr teeth', url: '..images/drTeeth.png'},
  { name: 'fozzy', url: '..images/fozzy.png'},
  { name: 'gonzo', url: '..images/gonzo.png'},
  { name: 'miss piggie', url: '..images/misspiggie.png'},
  { name: 'pepe', url: '..images/pepe.png'},
  { name: 'rizzo', url: '..images/rizzo.png'},
  { name: 'rowlf', url: '..images/rowlf.png'},
  { name: 'sam eagle', url: '..images/sameagle.png'},
  { name: 'scooter', url: '..images/scooter.png'},
  { name: 'swedishchef', url: '..images/swedishChef.png'},
]

// TESTING***  CHANGES THE IMAGE ONCLICK
document.querySelector('img').addEventListener('click', changeImg);

function changeImg () {
  let img = document.querySelector('img');

  img.src = 'images/animal.png';
}

// TIMER
const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const FOOTERTEXT = document.querySelector('.date');

FOOTERTEXT.innerHTML = (`Copyright ${YEAR}`);

addEventListener('load', function () {
  let ONE_SECOND = 1000;
  let seconds = 60;
  lastTick = +new Date(),
  timer = document.querySelector('.timer');

  function tick () {
    let now = +new Date(),
      nextTick = 2 * ONE_SECOND - (now - lastTick);

    lastTick = now;
    if (--seconds) {
      setTimeout(tick, nextTick > ONE_SECOND ? ONE_SECOND : nextTick);
    }
    timer.innerHTML = '0:' + (seconds < 10 ? '0' : '') + seconds;
  }

  timer.innerHTML = '01:00';
  setTimeout(tick, ONE_SECOND);
});

// TEXT BOX

const USERTEXT = document.querySelector('.textAnswer');

// Clear box on click
function boxClicked () {
  clearTextBox();
}
// gets user guesss on enter
function handleEnter(e) {
  e = e || window.event;
  if(e.keyCode === 13) {
    var elem = e.srcElement || e.target;
    console.log(elem.value);
    clearTextBox();
  }
}

function clearTextBox() {
  USERTEXT.value = '';
}

n = (MUPPETS.length);

var k = "";

for (i = 0; i < n; i++){
  var list = MUPPETS[i].name;
  if (i % 4 === 0){
    if (i === 0){
      k += "<li>" +list+"</li>"; 
    } else {
    k += "chirp"  + "<li>" +list+"</li>";
    }
  } else {
    k += "<li>" +list+"</li>"; 
  }
}

var myList = document.querySelector('.names');
myList.innerHTML = k;
/*

for (var i =0; i < MUPPETS.)

  kermit: {
    name: 'kermit',
    imageLocation: '..images/kermit.png',
  },
  animal: {
    name: 'animal',
    imageLocation: '..images/animal.png',
  }
*/