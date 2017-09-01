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
}
// escape for reset
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key ==27) {
        buffer = "";
        document.getElementById("screen").value = "";
    }
 }