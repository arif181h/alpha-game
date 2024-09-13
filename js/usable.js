function hideElementById(ElementId){
  const element=document.getElementById(ElementId);
  element.classList.add('hidden')
}
function showElementById(ElementId){
  const element=document.getElementById(ElementId);
  element.classList.remove('hidden')
}
function setBackgroundColor(ElementId){
  const element=document.getElementById(ElementId);
  element.classList.add('bg-orange-400');
}

function getAlphabet(){
  const alphatesString='abcdefghijklmnopqrstuvwxyz';
  const alphates=alphatesString.split('');
const randomsongka=Math.random()*25;
 const randomNumber=Math.round(randomsongka);
 const alphate=alphates[randomNumber];
 return alphate
 
}