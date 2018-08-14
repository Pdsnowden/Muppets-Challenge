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
  { name: 'swedish chef', url: '..images/swedishChef.png'},
]

// MAIN FUNCTION
function startGame() {
  var gameArray = scrambleArray();

};

// SCRAMBLES MUPPET ARRAY
function scrambleArray() {
  var finishedScramble = [];
  var muppetsCopy = [];

  // CLONES FUNCTION 
  function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

 muppetsCopy = clone(MUPPETS);

  while (muppetsCopy.length !== 0) {
    let randomIndex = Math.floor(Math.random() * muppetsCopy.length);
    finishedScramble.push(muppetsCopy[randomIndex]);
    muppetsCopy.splice(randomIndex, 1);
  }
  return finishedScramble;
};







// CALLING MAIN FUNCTION 

window.onload = startGame();