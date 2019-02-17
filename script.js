//Data
var finest = {
  author:"Winston Churchill",
  year:"1940",
  BCE:false,
}
var india = {
  author:"Ghandi",
  year:"1942",
  BCE:false,
}
var philippic = {
  author:"Demosthenes",
  year:"342",
  BCE:true,
}

//Console Logs
document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are"+ "speaches on the page.");//Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});