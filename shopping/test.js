//  test-input:
function getInputValue(){
  var inputText=document.getElementById("First-name");
    var textArea=document.createTextNode(inputText.value);
var inputValue=inputText.appendChild(textArea);
console.log(inputValue)
var test=inputValue.test(/[a-z]/gi);
return test;
}

