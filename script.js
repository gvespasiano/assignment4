//Data
var finest = {
  author:"Winston Churchill",
  year:"1940",
  bce:false,
};
var india = {
  author:"Ghandi",
  year:"1942",
  bce:false,
};
var philippic = {
  author:"Demosthenes",
  year:"342",
  bce:true,
};
speech = [
	finest, india, philippic
];

var yearDiff = (india.year-finest.year);

//Console Logs
document.getElementById('BtnDonate').addEventListener('click', function(){
    console.log ("There are " + speech.length + " speeches on the page.");
});
document.getElementById('BtnChurchill').addEventListener('click', function(){
    console.log("This speech was written by " + finest.author + " in " + finest.year + ". It is " + finest.bce + " that this year is B.C.E.");
});
document.getElementById('BtnGhandi').addEventListener('click', function(){
    console.log("This speech was written by " + india.author + " in " + india.year + ". It is " + india.bce + " that this year is B.C.E.");
});
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    console.log("This speech was written by " + philippic.author + " in " + philippic.year + ". It is " + philippic.bce + " that this year is B.C.E.");
});

