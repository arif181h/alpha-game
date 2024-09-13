function play(){
  const show=  hideElementById('first-section');
  const hide=showElementById('second-section');
  continueGame()
   
}


function continueGame(){
  const getpal=  getAlphabet();
  const sowp=document.getElementById('current-alphabet');
  sowp.innerText=getpal;
  const setB= setBackgroundColor(getpal);
  console.log(setB)
}
