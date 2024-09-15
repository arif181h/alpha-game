function hideElementById(ElementId){
  const element=document.getElementById(ElementId);
  element.classList.add('hidden')
}

function showElementById(ElementId){
  const element=document.getElementById(ElementId);
  element.classList.remove('hidden')
}

function setBackgroundById(ElementId){
 const element=document.getElementById(ElementId);
 element.classList.add('bg-orange-400')
}

function removeBackgroundById(ElementId){
  const element=document.getElementById(ElementId);
  element.classList.remove('bg-orange-400')
 }

function currentScoreElement(ElementId){
 const element=document.getElementById(ElementId);
 const currentScoreinn=element.innerText;
 const value=parseInt(currentScoreinn);
 return value;
}


function setValueById(ElementId,value){
  const element=document.getElementById(ElementId);
  element.innerText=value;
}

function gameover(){
  hideElementById('second-section');
  showElementById('third-section')
  // updated final score
  const lastScore=currentScoreElement('current-score');
  setValueById('last-score',lastScore)
  // clear last alphabet
  const currentAlphabet=getElementtextValueById('current-alphabet');
  removeBackgroundById(currentAlphabet)
}
 
 function getAlphabet(){
  const alphabets='abcdefghijklmnopqrstuvwxyz';
  const alphabetsString=alphabets.split('');
  const randomSongka=Math.random()*25;
  const randomNumber=Math.round(randomSongka);
  const alphabet=alphabets[randomNumber];
  return alphabet
 }

 function getElementtextValueById(ElementId){
  const element= document.getElementById(ElementId);
  const text=element.innerText;
  return text
 }