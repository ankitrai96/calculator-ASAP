var buffer = "";
function update(keyName){
    document.getElementById("screen").value += keyName;
}
function calc(operation){
    buffer += document.getElementById("screen").value + operation;
    document.getElementById("screen").value = "";
}
function result(){
    buffer += document.getElementById("screen").value;    
    document.getElementById("screen").value = eval(buffer);
    buffer = "";
}