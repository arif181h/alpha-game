function play(){
  hideElementById('first-section');
  hideElementById('third-section')
  showElementById('second-section')

  // reset
  setValueById('current-life',5)
  setValueById('current-score',0)
  continueGame()
}

function continueGame(){
 const alphabet= getAlphabet();
 console.log(alphabet);
 const currentAlphabet=document.getElementById('current-alphabet');
 currentAlphabet.innerText=alphabet;
setB=setBackgroundById(alphabet);
console.log(setB)
}
function handleButton(event){
 const playerPrssed=event.key;
 console.log(playerPrssed)
//  stoped the game
if(playerPrssed==='Escape'){
  gameover();
}
 const expectedpress=document.getElementById('current-alphabet');
 const expectedpressd=expectedpress.innerText;
 const expectedalphabet=expectedpressd.toLowerCase();
 console.log(playerPrssed,expectedalphabet);

 
 if(playerPrssed===expectedalphabet){
  const currentScore=currentScoreElement('current-score');
  const upadetedscore=currentScore+1;
  setValueById('current-score',upadetedscore)
  removeBackgroundById(expectedalphabet);
  continueGame();

 }
 else{
  const currentlife=currentScoreElement('current-life');
  const upadetedlife=currentlife-1;
  setValueById('current-life',upadetedlife)

  if(upadetedlife===0){
    gameover()
  }
 }
}
const dom=document.addEventListener('keyup',handleButton)