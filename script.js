window.onload=function(){
    document.getElementById('display').focus();
};
function append(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
function calculateResult() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
document.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    calculateResult();
  }
});